
// 当前缓存版本的唯一标识符，用当前时间代替
var VERSION = "201912231711"
// 当前缓存白名单，在新脚本的 install 事件里将使用白名单里的 key

var cacheFileList = [
  "staticPath/static/css/h5-framework/1.0.0/index.css",
  "staticPath/static/??js/vue/2.6.10/index.js,js/h5-framework/1.0.5/index.js"
]
self.addEventListener('install', (event) =>  {
  // 等待所有资源缓存完成时，才可以进行下一步
  event.waitUntil(
    caches.open(VERSION)
    .then((cache) => {
      // 要缓存的文件 URL 列表
      return cache.addAll(cacheFileList)
    })
    .then(() => self.skipWaiting())
    .then(() => console.log('installation complete! version: ' + VERSION))
  )
})

self.addEventListener('activate', (event) =>  {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
        .filter(key => !key.startsWith(VERSION))  // 过滤不需要删除的资源
        .map(key => caches.delete(key))  // 删除旧版本资源，返回为 Promise 对象
      )
    }).then(() => {
      console.log('removeOldCache completed.');
    })
  )
})

var isCORSRequest = function(url) {
  return url.indexOf(location.host) === -1
}

var isNeedCache = function(url) {
  var CACHE_HOST = ['img.piaoniu.com', 'm.img.whqietu.com', 'm.static.whqietu.com', 'assets.piaoniu.com']
  return CACHE_HOST.some((host) => {
    return url.indexOf(host) !== -1
  })
}
self.addEventListener('fetch',(event) => {
  var url = event.request.url
  // Ignore not GET https request.
  if (event.request.method !== 'GET' || new URL(url).protocol !== 'https:' || !isNeedCache(url)) {
    return
  }
  var request = isCORSRequest(url) ? new Request(url, {mode: 'cors'}) : event.request
  event.respondWith(
    caches.match(request)
    .then((response) => {
      if (response) {
        return response
      }

      // 因为 event.request 流已经在 caches.match 中使用过一次，
      // 那么该流是不能再次使用的。我们只能得到它的副本，拿去使用。
      var fetchRequest = request.clone()

      // fetch 的通过信方式，得到 Request 对象，然后发送请求
      return fetch(fetchRequest)
        .then((httpRes) => {
          // 检查是否成功
          if(!httpRes || httpRes.status !== 200 || (httpRes.type !== 'basic' && httpRes.type !== 'cors')) {
            return httpRes
          }

          // 如果成功，该 response 一是要拿给浏览器渲染，而是要进行缓存。
          // 不过需要记住，由于 caches.put 使用的是文件的响应流，一旦使用，
          // 那么返回的 response 就无法访问造成失败，所以，这里需要复制一份。
          var responseToCache = httpRes.clone()
          caches.open(VERSION)
          .then((cache) => {
            cache.put(request, responseToCache)
          })

          return httpRes
        }
      )
    })
  )
})


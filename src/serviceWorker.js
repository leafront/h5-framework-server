
// 当前缓存版本的唯一标识符，用当前时间代替
var VERSION = "CACHE_VERSION"

// 当前缓存白名单，在新脚本的 install 事件里将使用白名单里的 key

var cacheFileList = [CONFIG]
self.addEventListener('install', function (event) {
  // 等待所有资源缓存完成时，才可以进行下一步
  event.waitUntil(
    Promise.all[
      caches.open(VERSION).then(function (cache) {
        // 要缓存的文件 URL 列表
        return cache.addAll(cacheFileList)
      }),
      caches.keys().then(function (cacheNames) {
        return Promise.all(
          cacheNames.map(function (cacheName) {
            // 不在白名单的缓存全部清理掉
            if (cacheName !== VERSION) {
              // 删除缓存
              self.skipWaiting()
              return caches.delete(cacheName)
            }
          })
        )
      })
    ]
  )
})

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          // 不在白名单的缓存全部清理掉
          if (cacheName !== VERSION) {
            // 删除缓存
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})

var isCORSRequest = function(url, host) {
  return url.indexOf(location.host) === -1
}

var isNeedCache = function(url) {
  var CACHE_HOST = ['assets.piaoniu.com','img.piaoniu.com']
  return CACHE_HOST.some(function(host) {
    return url.indexOf(host) !== -1
  })
}
self.addEventListener('fetch', function(event) {
  var url = event.request.url
  var requestUrl = new URL(url)
  // Ignore not GET https origin request.
  if (event.request.method !== 'GET' || requestUrl.protocol !== 'https:' || requestUrl.origin == location.origin || !isNeedCache(url)) {
    return
  }
  var request = isCORSRequest(url) ? new Request(url, {mode: 'cors'}) : url
  event.respondWith(
    caches.match(request)
    .then(function(response) {
      if (response) {
        return response
      }

      // 因为 event.request 流已经在 caches.match 中使用过一次，
      // 那么该流是不能再次使用的。我们只能得到它的副本，拿去使用。
      var fetchRequest = request.clone()

      // fetch 的通过信方式，得到 Request 对象，然后发送请求
      return fetch(fetchRequest).then(
        function(httpRes) {
          // 检查是否成功
          if(!httpRes || httpRes.status !== 200 || (httpRes.type !== 'basic' && httpRes.type !== 'cors')) {
            return httpRes
          }

          // 如果成功，该 response 一是要拿给浏览器渲染，而是要进行缓存。
          // 不过需要记住，由于 caches.put 使用的是文件的响应流，一旦使用，
          // 那么返回的 response 就无法访问造成失败，所以，这里需要复制一份。
          var responseToCache = httpRes.clone()
          caches.open(VERSION)
          .then(function(cache) {
            cache.put(request, responseToCache)
          })

          return httpRes
        }
      )
    })
  )
})


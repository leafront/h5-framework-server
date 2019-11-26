function clearStorage () {
  const currentTime = new Date().getTime()
  let cacheStorage = localStorage
  if (!utils.isLocalStorageSupported()) { 
    cacheStorage = window.name
  }
  if (cacheStorage) {
    Object.keys(cacheStorage).forEach((item) => {
      const cacheData = store.get(item,'local')
      if (cacheData && 
        cacheData.times
      ) {
        if (currentTime > cacheData.times) {
          store.remove(item,'local')
        }
      }
    })
  }
}

function request (url,{
  type,
  timeout,
  dataType = 'json',
  data = {},
  cache = false,
  expires = 5 * 60 * 1000,
  headers,
  hostPath,
  ignoreLogin = false
}){

  const options = {
    type,
    data,
    async: true,
    url: url,
    timeout,
    dataType,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Requested-With": "XMLHttpRequest",
      "Accept": "application/json"
    },
    hostPath
  }
  if (headers &&
    headers['Content-Type'] == 'application/json'
  ) {
    options.headers["Content-Type"] = headers["Content-Type"]
    options.data =  data ? JSON.stringify(data) : ""
  } else {
    options.data = utils.queryStringify(data)
  }

  let cacheUrl = url
  if (type == 'GET' && dataType == 'json') {
    cacheUrl =  options.data ?  url + '?' + options.data : url
    options.url =  cacheUrl
  }

  function httpRequest (resolve,reject) {

    ajax(options).then((results) => {
      const cacheData = {
        times: new Date().getTime() + expires,
        results
      }
      if (results && cache) {
        store.set(cacheUrl, cacheData,'local')
      }
      resolve(results)
    })
  }

  return new Promise((resolve, reject) => {
    const currentTime = new Date().getTime()
    const cacheData = store.get(cacheUrl,'local')
    clearStorage()
    if (cache && cacheData) {
      const getCacheTime = cacheData.times
      if (currentTime < getCacheTime) {
        resolve(cacheData.results)
      } else {
        store.remove(cacheUrl,'local')

        httpRequest(resolve,reject)
      }
    } else {
      store.remove(cacheUrl,'local')
      httpRequest (resolve,reject)

    }
  })
}
window.request = request

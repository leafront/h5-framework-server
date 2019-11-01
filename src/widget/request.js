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

  const errorCode = 99
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

  if (type == 'GET') {
    options.data.times = new Date().getTime()
  }
  let optionData = data

  if (headers &&
    headers['Content-Type'] == 'application/json'
  ) {
    options.headers["Content-Type"] = headers["Content-Type"]
    options.data = JSON.stringify(options.data)
  } else {
    options.data = utils.queryStringify(options.data)
    optionData = utils.queryStringify(optionData)
  }

  let cacheUrl = url
  if (type == 'GET' && dataType == 'json') {
    options.url =  options.data ?  url + '?' + options.data: url
    cacheUrl =  optionData ?  url + '?' + optionData : url
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

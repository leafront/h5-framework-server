import utils from '@/framework/utils'
import ajax from '@/framework/ajax'
import store from '@/framework/store'

function clearStorage = (times) {
  const storage = utils.isLocalStorageSupported() ? localStorage : window.name
  if (!storage) {
    return
  }
  Object.keys(storage).forEach((item) => {
    const data = store.get(item,'local')
    if (
      data && 
      data.times &&
      times > data.times
    ) {
      store.remove(item,'local')
    }
  })
}

function httpRequest ({times, expires, cacheUrl, options, resolve, reject}) {
  ajax(options).then((results) => {
    const data = {
      times: times + expires,
      results
    }
    if (results && cache) {
      store.set(cacheUrl, data,'local')
    }
    resolve(results)
  })
}

export default function request (url, {
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
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
    hostPath
  }
  if (headers &&
    headers['Content-Type'] == 'application/json'
  ) {
    options.headers['Content-Type'] = 'application/json'
    options.data =  data ? JSON.stringify(data) : ''
  } else {
    options.data = utils.queryStringify(data)
  }

  let cacheUrl = url
  if (
    type == 'GET' && 
    dataType == 'json'
  ) {
    cacheUrl =  options.data ?  url + '?' + options.data : url
    options.url =  cacheUrl
  }

  return new Promise((resolve, reject) => {
    const times = new Date().getTime()
    const data = store.get(cacheUrl, 'local')
    clearStorage(times)
    if (cache && data) {
      const cacheTime = data.times
      if (times < cacheTime) {
        resolve(data.results)
        return
      } 
    } 
    store.remove(cacheUrl, 'local')
    httpRequest ({times, expires, cacheUrl, options, resolve, reject})
  })
}

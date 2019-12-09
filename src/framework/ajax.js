/**
 * @param {Object} options
 * @returns {Promise}
 */
export default function ajax ({
  hostPath = location.origin,
  url,
  async = true,
  timeout = 30000,
  type,
  headers,
  dataType,
  data
}){
    
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest()
    xhr.open(type, hostPath + url, async)
    xhr.timeout = timeout
    for (var key in headers) {
      xhr.setRequestHeader(key, headers[key])
    }
    xhr.responseType = dataType

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
          resolve(xhr.response)
        } else {
          resolve({
            data:[],
            status: -500,
            message: '请求出错，请稍后再试'
          })
        }
      }
    }
    type == 'GET' ? xhr.send(null) : xhr.send(data)
  })
}

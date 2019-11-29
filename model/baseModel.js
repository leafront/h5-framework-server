var request = require('request-promise')
var querystring = require('querystring')
const API = 'https://m.piaoniu.com'

module.exports = {
  async get(ctx, {url, data, header = undefined}){
    const requestData = querystring.stringify(data)
    url = requestData == '' ? API + url : API + url + '?' + requestData
    const getCookies = ctx.cookies
    return new Promise((resolve,reject) => {
      request({
        method: 'GET',
        url: url
      }).then((res) =>{
        if (typeof res == 'object') {
          resolve(res)
        } else {
          try {
            res = JSON.parse(res)
            resolve(res)
          } catch (error) {
            reject(error)
          }
        }
      }).catch((err) =>{
        reject(err)
      })
    })
  }
}

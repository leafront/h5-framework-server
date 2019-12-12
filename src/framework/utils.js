const utils = {
  weixin () {
    return navigator.userAgent.indexOf('MicroMessenger') > -1
  },
  /**
   * @param  {String}  value
   * @return {String}  value
   */
  serialize(value) {
    return JSON.stringify(value)
  },
  /**
   * @param {Object} el
   * @param {String} html
   */
  append (el, html) {

    var divTemp = document.createElement("div")
    var nodes = null
    var fragment = document.createDocumentFragment()

    divTemp.innerHTML = html

    nodes = divTemp.childNodes

    for (var i = 0, length = nodes.length; i < length; i += 1) {

      fragment.appendChild(nodes[i].cloneNode(true))
    }

    el.appendChild(fragment)

    nodes = null
    fragment = null
  },
  /**
   * @param  {String} value
   * @return {String} value
   */
  deserialize(value) {
    if (typeof value != 'string' || value == '') return ''
    try {
      return JSON.parse(value)
    } catch (e) {
      return ''
    }
  },
  isLocalStorageSupported() {
    var testKey = 'test'
    var storage = window.sessionStorage
    try {
      storage.setItem(testKey, 'testValue')
      storage.removeItem(testKey)
      return true;
    } catch (error) {
      return false
    }
  },
  /**
   * @param fn {Function}   实际要执行的函数
   * @param delay {Number}  执行间隔，单位是毫秒（ms）
   * @return {Function}     返回一个“节流”函数
   */
  throttle (func, wait) {
    let lastTime = null
    let timeout = null
    return function () {
      let context = this
      let now = new Date()
      // 如果上次执行的时间和这次触发的时间大于一个执行周期，则执行
      if (now - lastTime - wait > 0) {
        // 如果之前有了定时任务则清除
        if (timeout) {
          clearTimeout(timeout)
          timeout = null
        }
        func.apply(context, arguments)
        lastTime = now
      } else if (!timeout) {
        timeout = setTimeout(() => {
          func.apply(context, arguments)
        }, wait)
      }
    }
  },
  /**
   * @param fn {Function}   实际要执行的函数
   * @param delay {Number}  执行间隔，单位是毫秒（ms）
   * @return {Function}     返回一个“节流”函数
   */
  debounce (func, wait) {
    let lastTime = null
    let timeout = null
    return function () {
      let context = this
      let now = new Date()
      // 判定不是一次抖动
      if (now - lastTime - wait > 0) {
        setTimeout(() => {
          func.apply(context, arguments)
        }, wait)
      } else {
        if (timeout) {
          clearTimeout(timeout)
          timeout = null
        }
        timeout = setTimeout(() => {
          func.apply(context, arguments)
        }, wait)
      }
      // 注意这里lastTime是上次的触发时间
      lastTime = now
    }
  },
  /**
   * @param {Object} obj
   * @returns {string} result
   */
  queryStringify (obj) {

    function toQueryPair(key,value) {
      if (value==='') {
        return key;
      }
      return key + '=' + encodeURIComponent(value==='' ? '' : String(value))
    }

    let result = []
    for (var key in obj) {

      key = encodeURIComponent(key)
      const values = obj[key]
      if (values && values.constructor == Array) {

        const queryValues = []
        for (let i = 0, len = values.length; i < len; i++) {
          queryValues.push(toQueryPair(key, values[i]))
        }
        result = result.concat(queryValues)

      } else {
        result.push(toQueryPair(key,values))
      }
    }

    return result.join('&')
  },
  /**
   * @param {String || null } text
   * @return {Object}
   */
  query (strName){
    const queryObj = Object.create(null)
    const query = location.search.substring(1) // Get query string
    const pairs = query.split("&") // Break at ampersand

    for (let i = 0; i < pairs.length; i++) {
      const pos = pairs[i].indexOf('=') // Look for "name=value"
      if (pos == -1) continue // If not found, skip
      const paramsName = pairs[i].substring(0, pos) // Extract the name
      let value = pairs[i].substring(pos + 1) // Extract the value
      value = decodeURIComponent(value) // Decode it, if needed
      queryObj[paramsName] = value // Store as a property
    }
    if (strName) {
      return queryObj[strName] // Return the object
    } else {
      return queryObj
    }
  },
  isPassive() {

    let supportsPassiveOption = false
    try {
      addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () {
          supportsPassiveOption = true
        }
      }));
    } catch(e) {}
    return supportsPassiveOption   //{passive: true} 就不会调用 preventDefault 来阻止默认滑动行为
  },
  setCookie (name, value, options) {
    var Days = (options && options.day) || 365
    var domain = (options && options.domain) || location.hostname
    var exp = new Date()
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
    document.cookie = name + "=" + window.encodeURIComponent(value) + ";expires=" + exp.toGMTString() + "; path=/; domain=" + domain
  },
  getCookie (name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
    if (arr = document.cookie.match(reg))
      return window.decodeURIComponent(arr[2])
    else {
      return null
    }
  },
  delCookie (name) {
    var exp = new Date()
    exp.setTime(exp.getTime() - 1)
    var cval = this.getCookie(name)
    if (cval != null) {
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + "; path=/; domain=" + location.hostname
    }
  },
  appViewFixed () {
    const appView = document.getElementById('app')
    if (appView.classList.contains('app_fixed')){
      appView.classList.remove('app_fixed')
    } else {
      appView.classList.add('app_fixed')
    }
  },
  trim (text) {
    return text.replace(/\s+/g, "")
  },
  loadScript (url, success) {
    const script = document.createElement("script")
    script.type = 'text/javascript'
    script.src =  url
    document.getElementsByTagName('head')[0].appendChild(script)
    script.onload = () => {
      success && success()
    }
  },
  /**
   * @param {String} res
   */
  appendScript (res) {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.appendChild(document.createTextNode(res))
    document.head.appendChild(script)
  }
}

export default utils
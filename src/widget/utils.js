const utils = {
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

    var divTemp = document.createElement("div"),

      nodes = null,

      fragment = document.createDocumentFragment();

    divTemp.innerHTML = html;

    nodes = divTemp.childNodes;

    for (var i = 0, length = nodes.length; i < length; i += 1) {

      fragment.appendChild(nodes[i].cloneNode(true));
    }

    el.appendChild(fragment);

    // 清除
    nodes = null;
    fragment = null;
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
  throttle(fn, threshhold) {
    // 记录上次执行的时间
    var last

    // 定时器
    var timer

    // 默认间隔为 250ms
    threshhold || (threshhold = 250)

    // 返回的函数，每过 threshhold 毫秒就执行一次 fn 函数
    return function () {

      // 保存函数调用时的上下文和参数，传递给 fn
      var context = this
      var args = arguments

      var now = +new Date()

      // 如果距离上次执行 fn 函数的时间小于 threshhold，那么就放弃
      // 执行 fn，并重新计时
      if (last && now < last + threshhold) {
        clearTimeout(timer)

        // 保证在当前时间区间结束后，再执行一次 fn
        timer = setTimeout(() => {
          last = now
          fn.apply(context, args)
        }, threshhold)

      // 在时间区间的最开始和到达指定间隔的时候执行一次 fn
      } else {
        last = now
        fn.apply(context, args)
      }
    }
  },
  /**
   * @param {Object} obj
   * @returns {string}
   *
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
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + "; path=/; domain=" + domain
  },
  getCookie (name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
    if (arr = document.cookie.match(reg))
      return unescape(arr[2])
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
  loadScript (url,success) {
    const script = document.createElement("script")
    script.type = 'text/javascript'
    script.src = config.staticPath + url
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
window.utils = utils
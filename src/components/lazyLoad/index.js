const lazyLoad = {
  ticking: false,
  timer: null,
  complete: false, 
  position: { // 只要其中一个位置符合条件，都会触发加载机制
    top: 0, // 元素距离顶部
    right: 0, // 元素距离右边
    bottom: 0, // 元素距离下面
    left: 0 // 元素距离左边
  },
  list: [],
  init (el, bingind, vnode) {
    this.list.push(el)
    this.scrollLoad()
  },
   /**
   * 滚动加载图片显示替换默认图片
   */
  scrollLoad () {
    if (!this.list.length && this.complete) {
      this.removeLazyLoad()
    } else {
      this.ticking = false
      this.list.forEach((el) => {
        if (el.dataset.LazyLoadImgState != 'success' && this.getClientRect(el, this.position)) {
          this.loadImg(el)
        }
      })
    }
  },
  scrollImg () {
    if(!this.ticking) {
      this.ticking = true
      this.timer = window.requestAnimationFrame(this.scrollLoad.bind(this))
    }
  },
  /**
   * @param {Object} el
   * @param {Object} options
   * @returns {Boolean}
   */
  getClientRect (el,options) {
    const bcr = el.getBoundingClientRect() //取得元素在可视区的位置
    const mw = el.offsetWidth //元素自身宽度
    const mh = el.offsetHeight //元素自身的高度
    const w = window.innerWidth //视窗的宽度
    const h = window.innerHeight //视窗的高度
    const boolX = (!((bcr.right - options.left) <= 0 && ((bcr.left + mw) - options.left) <= 0) && !((bcr.left + options.right) >= w && (bcr.right + options.right) >= (mw + w))) //上下符合条件
    const boolY = (!((bcr.bottom - options.top) <= 0 && ((bcr.top + mh) - options.top) <= 0) && !((bcr.top + options.bottom) >= h && (bcr.bottom + options.bottom) >= (mh + h))) //上下符合条件
    return el.width != 0 && el.height != 0 && boolX && boolY
  },
  /**
   * @param {Object} el
   * @param {Number} index
   */
  loadImg (el) { 
    const imgUrl = el.dataset.src
    el.dataset.LazyLoadImgState = 'start'
    if (imgUrl) {
      const img = new Image()
      img.src = imgUrl
      img.addEventListener('load', () => {
        setTimeout(() => {
          el.style.backgroundImage = 'url('+imgUrl+')'
          el.style.backgroundSize = '100% auto'
          delete el.dataset.src
          el.dataset.LazyLoadImgState = 'success'
          el.classList.add('ui-successImg')
          this.list.forEach((item, index) => {
            if (item == el) {
              this.list.splice(index, 1)
            }
          })
          if (!this.list.length) {
            this.complete = true
          }
        }, 310)
      }, false)

      img.addEventListener('error', () => {
        delete el.dataset.src
        el.dataset.LazyLoadImgState = 'error'
      }, false)
    } else {
      delete el.dataset.src
    }
  },
  start () {
    window.addEventListener('scroll', this.scrollImg.bind(this), utils.isPassive() ? {passive: true, capture: true} : true)
  },
  removeLazyLoad () {
    cancelAnimationFrame(this.timer)
    window.removeEventListener('scroll', this.scrollImg.bind(this), utils.isPassive() ? {passive: true, capture: true} : true)
  }
}
lazyLoad.start()

Vue.directive('lazy', {
  inserted (el, binding, vnode) {
    lazyLoad.init(el, binding, vnode)
  }
})

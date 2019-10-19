<template>
  <div class="lazyLoad">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['options','list'],
    data () {
      return {
        appView: null,
        ticking: false,
        timer: null,
        default: {
          render: 'client',
          scrollEle: 'appView',
          ele:'ui-lazyLoad-pic',
          horizontalEle: null,
          complete: true, //页面内所有数据图片加载完成后，是否自己销毁程序，true默认销毁，false不销毁
          position: { // 只要其中一个位置符合条件，都会触发加载机制
            top: 0, // 元素距离顶部
            right: 0, // 元素距离右边
            bottom: 0, // 元素距离下面
            left: 0 // 元素距离左边
          }
        }
      }
    },
    created () {
      Object.assign(this.default, this.options)
    },
    watch: {
      list () {
        if (this.default.render == 'client') {
          this.appView = document.getElementById(this.default.scrollEle)
          setTimeout(() => {
            this.startLoad()
          })
        }
      }
    },
    mounted () {
      if (this.default.render == 'server') {
        this.appView = document.getElementById(this.default.scrollEle)
        this.$nextTick(() => {
          this.startLoad()
        })
      }
    },
    methods: {
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
       * 滚动加载图片显示替换默认图片
       */
      scrollLoad () {
        const list = Array.prototype.slice.apply(this.appView.querySelectorAll('.' + this.default.ele + '[data-src]'))
        if (!list.length && this.default.complete) {
          this.removeLazyLoad()
        } else {
          this.ticking = false
          list.forEach((el) => {
            if (!el.dataset.LazyLoadImgState && this.getClientRect(el, this.default.position)) {
              this.loadImg(el)
            }
          })
        }
      },
      scrollImg () {
        if(!this.ticking) {
          this.ticking = true
          this.timer = requestAnimationFrame(this.realFunc)
        }
      },
      realFunc () {
        this.scrollLoad()
      },
      startLoad (){
        const horizontalEle = this.default.horizontalEle
        if (horizontalEle) {
          document.getElementById(this.default.horizontalEle).addEventListener('scroll', this.scrollImg, utils.isPassive() ? {passive: true} : false)
        }  
        window.addEventListener('scroll', this.scrollImg, utils.isPassive() ? {passive: true} : false)
        this.scrollLoad()
      },
      /**
       * @param {Object} el
       *
       *
       */
      loadImg(el) { //加载图片
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
      removeLazyLoad () {
        cancelAnimationFrame(this.timer)
        const horizontalEle = this.default.horizontalEle
        if (horizontalEle) {
          document.getElementById(this.default.horizontalEle).removeEventListener('scroll',this.scrollImg, utils.isPassive() ? {passive: true} : false)
        } 
        window.removeEventListener('scroll', this.scrollImg, utils.isPassive() ? {passive: true} : false)
      }
    },
    beforeDestroy () {
      this.removeLazyLoad()
    }
  }
</script>

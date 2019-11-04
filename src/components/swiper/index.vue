<template>
  <div class="slideshow-wrap" :class="{'ui-lazyLoad-pic': picLazyLoad}">
    <slot name="banner"></slot>
    <slot name="dot"></slot>
  </div>
</template>
<script>

export default {
  props:{
    index: {
      type: Number,
      default: 1
    },
    list:{
      type: Array,
      default:[]
    },
    step: {
      type: Number,
      default: 20
    },
    isAutoPlay: {
      type: Boolean,
      default: true
    },
    slideItem:{
      type: String,
      default: '.slideshow-item'
    },
    // 阻止页面上下滑动
    preventDefault: {
      type: Boolean,
      default: false
    },
    autoTime: {
      type: Number,
      default: 5000
    },
    itemWidth: {
      type: Number,
      default: 750
    },
    picLazyLoad: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      startTime: 0,
      itemLength: 0,
      wrapper: null,
      startX: 0,
      startY:0,
      endX: 0,
      endY:0,
      x:0,
      isValid: true,
      isCheck: false,
      autoPlayTimer: null
    }
  },
  methods: {
    touchstart (e) {
      var point = e.touches ? e.touches[0] : e
      this.startX = this.endX = point.pageX
      this.startY = this.endY = point.pageY
      this.isValid = true
      this.isCheck = false
      this.stopAutoPlay()
      this._start(e)
    },
    touchmove (e) {
      if (!this.isValid) return;
      var point = e.touches ? e.touches[0] : e
      this.endX = point.pageX
      this.endY = point.pageY

      var differX = this.endX - this.startX
      var differY = this.endY - this.startY
      if (!this.isCheck) {
        if (Math.abs(differY) > Math.abs(differX)) {
          this.isValid = false
          return
        }
        this.isCheck = true
      }
      e.preventDefault()
      this._move(e, differX)
    },
    touchend (e) {
      if (!this.isValid) return
      this._end()
    },
    init () {
      this.wrapper = document.querySelector(this.slideItem)
      this.startTime = new Date().getTime()
      this.itemLength = this.list.length - 2
      this.itemWidth = parseFloat(this.itemWidth)
      this.setWrapperPos(-this.index * this.itemWidth)
      this.startAutoPlay()
    },
    _start () {
      this.clearAnimate()
      const left = this.wrapper.style.transform
      // left可能有小数
      this.x = parseInt(left.match(/\(([-\.\d]+)px,/)[1], 10)

      // 控制快速滑动
      if (new Date().getTime() - this.startTime < 300) {
        this.isValid = false
      }
      if (this.preventDefault) {
        this.isCheck = true
      }
    },
    _move (e, differX) {
      this.setWrapperPos(this.x + differX)
    },
    _end () {
      const left = this.wrapper.style.transform
      const distance = -parseInt(left.match(/\(([-\.\d]+)px,/)[1], 10)
      const width = this.itemWidth
      if (this.startX > this.endX) {
        this.x = - Math.ceil(distance / width) * width
      } else {
        this.x = - Math.floor(distance / width) * width
      }
      this.wrapper.style.transition = '300ms ease-in'
      this.wrapper.style.WebkitTransition = '300ms ease-in'
      this.setWrapperPos(this.x)
      let index = Math.ceil(Math.abs(this.x / width))
      // 最后控制
      if (this.x >= 0) {
        index = this.itemLength
        setTimeout(() => {
          this.clearAnimate()
          this.setWrapperPos(-this.itemLength * width)
        }, 300)
        this.startTime = new Date().getTime();
      } else if (Math.abs(this.x) >= (this.itemLength +1) * width) {
        index = 1
        setTimeout(() => {
          this.clearAnimate()
          this.setWrapperPos(-width)
        }, 300)
        this.startTime = new Date().getTime()
      }
      this.$emit('toggleIndex', index)
      this.startAutoPlay()
    },
    setWrapperPos (x) {
      this.wrapper.style.transform = 'translate3d(' + x + 'px, 0, 0)'
      this.wrapper.style.WebkitTransform = 'translate3d(' + x + 'px, 0, 0)'
    },
    clearAnimate () {
      this.wrapper.style.transition =  'none'
      this.wrapper.style.WebkitTransition =  'none'
    },
    autoPlay () {
      let autoIndex = this.index
      autoIndex++
      this.$emit('toggleIndex', autoIndex)
      const x = -autoIndex * this.itemWidth
      if (autoIndex > this.itemLength) {
        this.$emit('toggleIndex', 1)
        setTimeout(() => {
          this.clearAnimate()
          this.setWrapperPos(-this.itemWidth)
        }, 310)
      }
      this.wrapper.style.cssText = 'transition:300ms ease-in; -webkit-transition:300ms ease-in; transform: translate3d(' + x + 'px, 0, 0); -webkit-transform:translate3d(' + x + 'px, 0, 0)'
    },
    startAutoPlay () {
      if (this.isAutoPlay && this.itemLength > 1) {
        this.stopAutoPlay()
        this.autoPlayTimer = setInterval(() => this.autoPlay(), this.autoTime)
      }
    },
    stopAutoPlay () {
      if (this.autoPlayTimer) {
        clearInterval(this.autoPlayTimer)
        this.autoPlayTimer = null
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
      this.$el.addEventListener('touchstart',(e) => {
        this.touchstart(e)
      }, false)
      this.$el.addEventListener('touchmove',(e) => {
        this.touchmove(e)
      },false)
      this.$el.addEventListener('touchend',(e) => {
        this.touchend(e)
      },false)
    })
  },
  destroyed () {
    clearInterval(this.autoPlayTimer)
  }
}
</script>
<style lang="scss">
  .slideshow-wrap {
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .slideshow-item {
    width: 20000px;
  }

  .slideshow-item li {
    width: 7.5rem;
    float: left;
  }

  .slideshow-item img {
    width: 100%;
  }

  .slideshow-dots{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    bottom: .15rem;
    li {
      width: .2rem;
      height: .04rem;
      border-radius: .03rem;
      background-color: #EAEAEA;
      margin-right:.14rem;
      &.active {
        background-color: #FF6900;
      }
    }

  }
</style>




<template>  
  <div class="page-view" id="app">
    <div class="scroll-view-wrapper">
      <div class="draw-outer-wrapper" ref="drawOuter">
        <div class="draw-luck-start" @click="startLuckDraw"></div>
        <div class="draw-outer" :class="{'active': isLuckDraw}">
          <div class="draw-inner">
            <div class="draw-inner-wrapper">
              <div class="draw-inner-item draw-inner-item1">
                <span class="cfff fs30">一等奖</span>
              </div>
              <div class="draw-inner-item draw-inner-item2">
                 <span class="cfff fs30">二等奖</span>
              </div>
              <div class="draw-inner-item draw-inner-item3">
                 <span class="cfff fs30">三等奖</span>
              </div>  
              <div class="draw-inner-item draw-inner-item4">
                 <span class="cfff fs30">四等奖</span>
              </div> 
              <div class="draw-inner-item draw-inner-item5">
                 <span class="cfff fs30">五等奖</span>
              </div>
              <div class="draw-inner-item draw-inner-item6">
                 <span class="cfff fs30">六等奖</span>
              </div>     
            </div>  
          </div>  
        </div>
      </div>    
    </div>
  </div>
</template>  

<style lang="scss">
  body{
  background: #fff;
}
.draw-outer-wrapper{
  position: relative;
  height: 7.1rem;
  margin: 2rem .2rem;
}
.draw-luck-start{
  background: url(imgPath/static/img/luck_draw_btn.png?v=201912171828) no-repeat;
  background-size: 100% auto;
  width: 1.79rem;
  height: 2.19rem;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -.895rem;
  margin-top: -1.095rem;
  transform: none;
  transition: none;
  z-index: 100;
}
.draw-outer{
  height: 7.1rem;
  background: url(imgPath/static/img/draw_outer.png?v=201912161609) no-repeat;
  background-size: 100% auto;
  padding: .4rem;
  display: flex;
  align-items: center;
  transform: rotate(0deg);
  position: absolute;
  left: 0;
  top: 0;
  &.active{
    transform: rotate(3300deg);
    transition: transform 6s linear;
  }
}
.draw-inner{
  width: 100%;
  height: 6.3rem;
  background: url(imgPath/static/img/draw_inner.png?v=201912161623) no-repeat;
  background-size: 100% auto;
  padding: .15rem;
}
.draw-inner-wrapper{
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  width: 6rem;
  height: 6rem;
  transform: rotate(0deg);
}
.draw-inner-item{
  position: absolute;
  width: 50%;
  height: 50%;
  top: 0;
  right: 0;
  transform-origin: 0% 100%;
  span{
    transform: skewY(30deg) rotate(30deg) translate(1.2rem, .7rem);
    position: absolute;
  }
}
.draw-inner-item1{
  transform: rotate(-30deg) skewY(-30deg);
  background: red;
}
.draw-inner-item2{
  transform: rotate(30deg) skewY(-30deg);
  background: green;
}
.draw-inner-item3{
  transform: rotate(90deg) skewY(-30deg);
  background: pink;
}
.draw-inner-item4{
  transform: rotate(150deg) skewY(-30deg);
  background: blue;
}
.draw-inner-item5{
  transform: rotate(210deg) skewY(-30deg);
  background: orange;
}
.draw-inner-item6{
  transform: rotate(270deg) skewY(-30deg);
  background: aqua;
}
</style>
<script type="text/javascript">

  export default {
    data () {
      return {
        isLuckDraw: false,
        isStopAnimate: false
      }
    },
    mounted () {
      this.$refs.drawOuter.addEventListener('transitionstart', () => {
        this.isStopAnimate = true
      })
      this.$refs.drawOuter.addEventListener('transitionend', () => {
        this.isStopAnimate = false
      })
    },
    methods: {
      startLuckDraw () {
        if (this.isStopAnimate) {
          return
        }
        this.isStopAnimate = true
        this.isLuckDraw = false
        setTimeout(() => {
          this.isLuckDraw = true
        }, 100)
      }
    }
  }
</script>

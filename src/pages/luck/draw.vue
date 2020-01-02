<template>  
  <div class="page-view" id="app">
    <div class="scroll-view-wrapper">
      <div class="draw-outer-wrapper" ref="drawOuter">
        <div class="draw-luck-start" @click="startLuckDraw"></div>
        <div class="draw-outer" :class="{'active': isLuckDraw}" :style="{'transform':'rotate('+rotateLuckDraw+'deg)'}">
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
  transform: rotate(0);
  position: absolute;
  left: 0;
  top: 0;
  backface-visibility: hidden;
  &.active{
    transition: transform 6s cubic-bezier(0.010, 0.845, 0.645, 0.960);
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
  transform: rotate(0deg) skewY(-30deg);
  background: red;
}
.draw-inner-item2{
  transform: rotate(60deg) skewY(-30deg);
  background: green;
}
.draw-inner-item3{
  transform: rotate(120deg) skewY(-30deg);
  background: pink;
}
.draw-inner-item4{
  transform: rotate(180deg) skewY(-30deg);
  background: blue;
}
.draw-inner-item5{
  transform: rotate(240deg) skewY(-30deg);
  background: orange;
}
.draw-inner-item6{
  transform: rotate(300deg) skewY(-30deg);
  background: aqua;
}
</style>
<script type="text/javascript">

  function showRandomRotate () {
    const rotateNum = Math.ceil(Math.random() * 5)
    return (8 + rotateNum) * 360
  }
  export default {
    data () {
      return {
        isLuckDraw: false,
        isStopAnimate: false,
        rotate: 60,
        rotateLuckDraw: 0
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
    create () {
      this.rotate = 360 / 6 //(6 根据后端配置的6个奖)
    },
    methods: {
      startLuckDraw () {
        if (this.isStopAnimate) {
          return
        }
        this.isStopAnimate = true
        this.isLuckDraw = false
        this.rotateLuckDraw = 0
        const luckDrawNumber = Math.floor(Math.random() * 5) //中奖的顺序 后端返回
        const randomRotate = showRandomRotate()
        setTimeout(() => {
          this.isLuckDraw = true
          this.rotateLuckDraw = randomRotate + (360 - luckDrawNumber * this.rotate + this.rotate / 2)
        }, 100)
      }
    }
  }
</script>

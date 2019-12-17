<template>  
  <div class="page-view" id="app">
    <div class="scroll-view-wrapper">
      <div class="draw-outer">
        <div class="draw-inner">
          <div class="draw-inner-wrapper">
            <div class="draw-inner-item draw-inner-item1">
              <span class="cfff fs30">一等奖</span>
            </div>
            <div class="draw-inner-item draw-inner-item2"></div>
            <div class="draw-inner-item draw-inner-item3"></div>  
            <div class="draw-inner-item draw-inner-item4"></div> 
            <div class="draw-inner-item draw-inner-item5"></div>
            <div class="draw-inner-item draw-inner-item6"></div>     
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
.draw-outer{
  margin: 2rem .2rem;
  height: 7.1rem;
  background: url(imgPath/static/img/draw_outer.png?v=201912161609) no-repeat;
  background-size: 100% auto;
  padding: .4rem;
  display: flex;
  align-items: center;
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
}
.draw-inner-item{
  position: absolute;
  width: 50%;
  height: 50%;
  top: 0;
  right: 0;
  transform-origin: 0% 100%;
  span{
    transform: skewY(30deg) rotate(30deg);
    transform-origin: 50% 50%;
    margin-top: 2rem;
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

      }
    },
    created () {

    },
    methods: {
     
    }
  }
</script>

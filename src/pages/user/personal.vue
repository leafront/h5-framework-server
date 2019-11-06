<template>
  <div class="pageView" id="app">
    <Header :title="title"></Header>
    <div class="scroll-view-wrapper">
      <div class="personal-info-wrapper">
        <div class="personal-info">
          <div class="personal-info-txt">
            <div class="personal-info-img"></div>
            <span class="cfff">登录</span>
          </div> 
          <div class="personal-info-center">
            <span class="cfff">个人主页</span>
            <i class="arrow-left"></i>
          </div>  
        </div>
        <div class="personal-menu cfff">
          <div class="personal-menu-item">
            <span class="fs30">0</span>
            <i>想看</i>
          </div>  
          <div class="personal-menu-item">
            <span class="fs30">0</span>
            <i>评论</i>
          </div>  
          <div class="personal-menu-item">
            <span class="fs30">0</span>
            <i>关注</i>
          </div> 
          <div class="personal-menu-item">
            <span class="fs30">0</span>
            <i>粉丝</i>
          </div> 
        </div>  
      </div>  
      <div class="personal-order-title p30 bgfff">
        <strong class="fs32">我的订单</strong>
        <div class="personal-order-arrow">
          <i class="c999">查看全部订单</i>
        </div>  
      </div>  
    </div>  
  </div>   
</template> 

<style lang="scss">
  body{
    background: #f6f7f9;
  }
  .personal-order-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: .9rem;
    strong{
      color: #262626;
    }
  }
  .personal-menu{
    height: 1rem;
    display: flex;
    align-items: center;
    .personal-menu-item{
      flex: 1;
      display: flex;  
      flex-direction: column;
      align-items: center;
    }
  }
  .personal-info-wrapper{
    background: linear-gradient(270deg, #ff5aa5 0%, #ff2661 100%);
  }
  .personal-info{
    padding: .66rem 0 .66rem .3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .personal-info-img{
    background: url(https://static.piaoniu.com/m/static/img/defaultAvatar.99f8eed.png);
    width: 1.12rem;
    height: 1.12rem;
    background-size: 1.12rem auto;
    border-radius: 50%;
  }
  .personal-info-txt{
    display: flex;
    span{
      padding-top: .12rem;
      font-size: .36rem;
      padding-left: .36rem;
    }
  }
  .personal-info-center{
    width: 1.6rem;
    height: .64rem;
    background: rgba(0, 0, 0, 0.13);
    border-top-left-radius: .32rem;
    border-bottom-left-radius: .32rem;
    padding-left: .25rem;
    display: flex;
    align-items: center;
    .arrow-left{
      width: .1rem;
      height: .2rem;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAWCAYAAADwza0nAAAAAXNSR0IArs4c6QAAAHZJREFUOBFjYACC////HwFiELgCxGIgMaIAULEoVBOQGsqaRYnyL0gRFj+PasYXesAAkwDiT0AMAifwqYXLARUyAfE8kA4g+ALEdnBJXAygolFNoMChX0BAbSMtnqCaVIHOBAHiIhekCQSAGhiBOB2I9SEihEkAd9hx9p/FrHcAAAAASUVORK5CYII=) no-repeat;
      background-size: .1rem .2rem;
      margin-left: .1rem;
      margin-top: .05rem;
    }
  }
</style>

<script type="text/javascript">

import Header from '@/components/header/index.vue' 

export default {
  data () {
    return {
      title: '个人中心'
    }
  },
  components: {
    Header
  },
  methods: {
    
  }
}

</script>  

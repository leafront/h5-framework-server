<template>
  <div class="ui-pageLoading">
    <i></i><span class="c9">努力加载中</span>
  </div>
</template>
<style lang="scss">
  @keyframes dotCarousel {
    0% {
        box-shadow: 99.84rem 0 0 -1px #ff6600,100.14rem 0 0 1px #ff6600,100.44rem 0 0 -1px #ff6600
    }

    50% {
        box-shadow: 100.44rem 0 0 -1px #ff6600,99.84rem 0 0 -1px #ff6600,100.14rem 0 0 1px #ff6600
    }

    100% {
        box-shadow: 100.14rem 0 0 1px #ff6600,100.44rem 0 0 -1px #ff6600,99.84rem 0 0 -1px #ff6600
    }
  }

  .ui-pageLoading{
    display: flex;
    padding: .15rem 0;
    justify-content: center;
    align-items: center;
    i{
      position: relative;
      left: -99.84rem;
      width: .2rem;
      height: .2rem;
      border-radius: 50%;
      background-color: #ff6600;
      color: #ff6600;
      box-shadow: 99.84rem 0 0 0 #ff6600,100.14rem 0 0 0 #ff6600,100.44rem 0 0 0 #ff6600;
      -webkit-box-shadow: 99.84rem 0 0 0 #ff6600,100.14rem 0 0 0 #ff6600,100.44rem 0 0 0 #ff6600;
      animation: dotCarousel 1s infinite linear;
    }
    span{
      padding-left: .6rem;
    }
  }
</style>


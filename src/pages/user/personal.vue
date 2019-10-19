<template>
  <div class="pageView" id="app">
    <Header :title="title" :backFn="backAction"></Header>
    <div class="scroll-view-wrapper">
      <div class="personal-info">
        <div class="personal-info-img">
        </div>  
      </div>  
    </div>  
  </div>   
</template> 

<style lang="scss">
  .personal-info{
    background: linear-gradient(270deg, #ff5aa5 0%, #ff2661 100%);
    padding: .74rem .3rem 0;
  }
  .personal-info-img{
    background: url(https://static.piaoniu.com/m/static/img/defaultAvatar.99f8eed.png);
    width: 1.12rem;
    height: 1.12rem;
    background-size: 1.12rem auto;
  }
</style>

<script type="text/javascript">

export default {
  data () {
    return {
      title: '我的'
    }
  },
  methods: {
    backAction () {
      location.replace('/')
    }
  }
}

</script>  

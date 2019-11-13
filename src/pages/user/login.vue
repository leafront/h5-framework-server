<template>  
  <div class="pageView" id="app">
    <div class="scroll-view-wrapper">
      <DownloadApp></DownloadApp>
      <div class="user-login-close" @click="pageAction">
        <span></span>
      </div>
      <div class="user-login-title pb30">
        <span class="c262626">手机快捷登录</span>
      </div> 
      <div class="user-login-form">
        <div class="user-login-form-item">
          <input type="tel" class="fs30 user-form-phone" placeholder="请输入手机号" />
        </div>
        <div class="user-login-form-item">
          <input type="tel" class="fs30 user-form-code" placeholder="验证码" />
          <div class="user-form-code-btn">
            <i></i>
            <span class="fs28">获取验证码</span>
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
  .user-login-form{
    padding: 0 .3rem;
  }
  .user-login-form-item{
    height: .94rem;
    border-bottom: .01rem solid #ddd;
    display: flex;
    input {
      flex: 1;
      height: 100%;
      padding: .1rem 0;
    }
  }
  .user-form-code-btn{
    padding: .15rem 0;
    display: flex;
    span{
      width: 1.92rem;
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
      color: #ff2661;
    }
    i{
      width: .01rem;
      height: 100%;
      background: #ddd;
    }
  }
  .user-login-close{
    padding: .3rem;
    display: inline-block;
    span{
      position: relative;
      width: .44rem;
      height: .44rem;
      display: block;
      &:before,&:after{
        content: '';
        display: block;
        width: .44rem;
        height: .02rem;
        position: absolute;
        left: 50%;
        top: 50%;
        background: #9a9a9a;
      }
      &:before{
        transform: translateX(-50%) rotate(45deg);
      }
      &:after{
        transform: translateX(-50%) rotate(-45deg)
      }
    }
  }
  .user-login-title{
    display: flex;
    justify-content: center;
    span{
      font-size: .44rem;
    }
  }
</style>
<script type="text/javascript">

  import DownloadApp from '@/components/downloadApp/index.vue'

  export default {
    data () {
      return {

      }
    },
    components: {
      DownloadApp
    },
    methods: {
      pageAction () {
        const redirect = utils.query('redirect')
        if (redirect) {
          location.href = redirect
        } else {
          history.back()
        }
      }
    }
  }
</script>

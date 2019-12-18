<template>  
  <div class="page-view" id="app">
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
          <input type="tel" autocomplete="off" v-model.trim="phone" maxlength="11" class="fs30 user-form-phone" placeholder="请输入手机号" />
        </div>
        <div class="user-login-form-item">
          <input type="tel" autocomplete="off" maxlength="6" v-model.trim="code" class="fs30 user-form-code" placeholder="验证码" />
          <div class="user-form-code-btn" @click="sendLoginCode">
            <i></i>
            <span class="fs28">获取验证码</span>
          </div>  
        </div>
        <div class="user-login-submit" @click="loginAction">
          <button class="fs34 cfff">登录</button>
        </div>  
      </div> 
    </div>
  </div>
</template>  

<style lang="scss">
.user-login-submit{
  margin-top: .64rem;
  border-radius: .06rem;
  height: .9rem;
  button{
    width: 100%;
    height: 100%;
    background: #ff2661;
    opacity: .6;
    &:active{
      background:red;
    }
  }
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
  import * as Model from '@/model/user/personal'

  export default {
    data () {
      return {
        phone: '',
        code: ''
      }
    },
    components: {
      DownloadApp
    },
    created () {
      const deviceId = utils.getCookie('dvid')
      if (deviceId) {
        return
      }
      Model.setDeviceId({
        type: "GET"
      }).then((result) => {
        const dvid = result.dvid
        utils.setCookie('dvid', dvid)
      })
    },
    methods: {
      pageAction () {
        const redirect = utils.query('redirect')
        if (redirect) {
          location.href = redirect
        } else {
          history.back()
        }
      },
      sendLoginCode () {
        const { phone } = this
        Model.sendLoginCode({
          type: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            "ua": phone
          }
        }).then((result) => {
          const success = result.success
          if (success) {
            this.$showToast('发送成功')
          } 
        })
      },
      loginAction () {
        this.$showLoading()
      }
    }
  }
</script>

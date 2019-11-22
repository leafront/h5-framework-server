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
          <input pattern="\d*" maxlength="11" class="fs30 user-form-phone" placeholder="请输入手机号" />
        </div>
        <div class="user-login-form-item">
          <input pattern="\d*" maxlength="6" class="fs30 user-form-code" placeholder="验证码" />
          <div class="user-form-code-btn">
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
<script type="text/javascript">

  import DownloadApp from '@/components/downloadApp/index.vue'

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
    methods: {
      pageAction () {
        const redirect = utils.query('redirect')
        if (redirect) {
          location.href = redirect
        } else {
          history.back()
        }
      },
      loginAction () {
        this.$showLoading()
      }
    }
  }
</script>

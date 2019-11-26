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
          <input type="tel" v-model.trim="phone" maxlength="11" class="fs30 user-form-phone" placeholder="请输入手机号" />
        </div>
        <div class="user-login-form-item">
          <input type="tel" maxlength="6" v-model.trim="code" class="fs30 user-form-code" placeholder="验证码" />
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
            this.$toast('发送成功')
          } 
        })
      },
      loginAction () {
        this.$showLoading()
      }
    }
  }
</script>

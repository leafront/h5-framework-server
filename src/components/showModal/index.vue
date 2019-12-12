<template>
  <div class="ui-dialog">
    <div class="ui-dialog-mask"></div>
    <div class="ui-dialog-container">
      <div class="ui-dialog__bd">
       {{content}}
      </div>
      <div class="ui-dialog__ft">
        <span  v-show="!showCancel" class="ui-dialog__btn ui-dialog__btn_default" @click="cancelCallback">
          {{cancelText}}
        </span>
        <span class="ui-dialog__btn" @click="successCallback">
          {{confirmText}}
        </span>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">

  export default {
    props: {
      content: {
        type: String,
        default: ''
      },
      showCancel: {
        type: Boolean,
        default: false
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      confirmText: {
        type: String,
        default: '确定'
      },
      success: {
        type: Function,
        default: () => {}
      },
      cancel: {
        type: Function,
        default: () => {}
      }
    },
    methods: {
      successCallback () {
        this.success()
      },
      cancelCallback () {
        this.cancel()
      }
    }
  }

</script>  


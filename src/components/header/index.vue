<template>
  <div class="ui-header" :class="{'ui-header-border':isBorder}" v-if="!isWeixin">
    <div class="ui-header-back" @click="pageAction">
      <svg class="ui-header-back_btn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M877.216 491.808" p-id="6683" fill="#666666"></path>
        <path d="M758.528 949.984c12.512-12.512 13.248-31.872 2.048-43.776L384.096 529.696c-16.16-15.328-16.096-19.328 0-35.424L760.576 117.824c11.232-11.872 10.464-31.264-2.048-43.776-12.736-12.736-32.608-13.44-44.448-1.632L295.872 490.592C290.72 495.744 288.416 502.464 288 509.376l0 5.248c0.448 6.944 2.752 13.632 7.872 18.784l418.176 418.176C725.92 963.392 745.824 962.688 758.528 949.984z" p-id="6684" fill="#666666">
        </path>
      </svg>
    </div>
    <h4 class="ui-header-title">{{title}}</h4>
    <slot></slot>
  </div>
</template>

<script type="text/javascript">

export default {
  data () {
    return {
      isWeixin: utils.weixin()
    }
  },
  props: {
    backAction: {
      default: null,
      type: Function
    },
    title: {
      default:'',
      type: String
    },
    isBorder: {
      default: true,
      type: Boolean
    }
  },
  methods: {
    pageAction () {
      if (this.backAction && typeof this.backAction == 'function') {
        this.backAction()
      } else {
        if (history.length == 1 || document.referrer == "") {
          location.href = '/'
        } else {
          history.back()
        }
      }
    }
  }
}
</script>

<template>
  <div class="ui-header" :class="{'ui-header-border':isBorder}" v-if="!isWeixin">
    <div class="ui-header-back" @click="pageAction">
      <div class="ui-header-back_btn">
      </div>
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

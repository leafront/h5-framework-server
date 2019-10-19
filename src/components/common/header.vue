<template>
  <div class="ui-header" :class="{'ui-header-border':isBorder}"  v-if="showHeader">
    <div class="ui-header-back" @click="backAction">
      <div class="ui-header-back_btn">
      </div>
    </div>
    <h4 class="ui-header-title">{{title}}</h4>
    <slot></slot>
  </div>
</template>

<script type="text/javascript">

  export default {
    props: {
      backFn: {
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
      },
      isShowHeader: {
        default: false,
        type: Boolean
      }
    },
    computed: {
      showHeader () {
       if (utils.isApp() || utils.weixin() || utils.nativeQQ()) {
          return false
        } else {
          return this.isShowHeader || true
        }
      }
    },
    methods: {
      backAction () {
        if (this.backFn && typeof this.backFn == 'function') {
          this.backFn()
        } else {
          this.$router.back()
        }
      }
    }
  }

</script>

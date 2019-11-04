<template>
  <div class="ui-header" :class="{'ui-header-border':isBorder}">
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
    }
  },
  methods: {
    backAction () {
      if (this.backFn && typeof this.backFn == 'function') {
        this.backFn()
      } else {
        history.back()
      }
    }
  }
}
</script>
<style lang="scss">
  .ui-header ~ .scroll-view-wrapper {
    padding-top: .88rem;
  }
  .ui-header {
    width: 100%;
    height: 0.88rem;
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    background: #fff;
  }

  .ui-header.ui-header-border {
    border-bottom: 0.01rem solid #ddd;
  }
  .ui-header .ui-header-back {
    height: 0.88rem;
    padding: 0 0.3rem 0 0.3rem;
    display: flex;
    align-items: center;
  }
  .ui-header .ui-header-title {
    height: 0.88rem;
    display: flex;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    font-size: 0.34rem;
    color: #525252;
    text-align: center;
  }
  .ui-header-back_btn{
    position:relative;
    width: .22rem;
    height: .38rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAmCAMAAAD3EJukAAAAeFBMVEUAAABdXVdwcHBcXFZcXFdeXlhpaV1mZmZcXFZdXVZcXFZdXVdcXFddXVZcXFddXVdhYVxhYV5cXFddXVddXVdcXFddXVZeXlheXlddXVhhYVtgYFpiYl5dXVZcXFZdXVZdXVldXVdfX1hfX1ddXVheXlhcXFxcXFYBhSemAAAAJ3RSTlMA+QXntisPC/Lt19PNxr+tGRXi3aCZkFVMRSYeE/WmiT86NTGDfSLEMjqiAAAAnklEQVQoz5XIRxLCMBAEQDnLlnPOEZj//xDfd1wFfWwlzAapXD+GKdhGZBNUudjg3kluilKu7cIZf90Mjsc2lKtWhJfcGvqU20AfbJddbgtrkLvRfcHq5b5hdXI9IFNEB2z0LbTs++dv2A8Lava7xmqTPzQy9mcIl/11f0Dec5D+82OJxCf/KRGznyrEM/k8gin4Rzn5wiBRxOzW6sEXnZ8Nd7qVyNEAAAAASUVORK5CYII=) no-repeat;
    background-size: .22rem auto;
  }
</style>

<template>
  <div class="pageView">
    <AppHeader :title="title" :isBorder="isBorder"></AppHeader>
    <div class="scroll-view-wrapper visibility">
      <div class="svip_error">
        <img src="./images/error.png"/>
      </div>
    </div>
  </div>
</template>

<style  lang="scss">
  .svip_error{
    margin-top: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #61b8ff;

    img {
      vertical-align: top;
      width: 5.82rem;
      height:auto;
    }
  }
</style>

<script type="text/javascript">

  import AppHeader from '@/components/common/header'

  export default {
    data () {
      return {
        title: '页面找不到',
        isBorder: true
      }
    },
    components: {
      AppHeader
    }
  }

</script>

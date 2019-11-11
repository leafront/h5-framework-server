<template>  
  <div class="pageView" id="app">
    <div class="scroll-view-wrapper">
      <DownloadApp></DownloadApp>
    </div>
  </div>
</template>  
<script type="text/javascript">

  import DownloadApp from '@/components/downloadApp/index.vue'

  export default {
    data () {
      return {

      }
    },
    components: {
      DownloadApp
    }
  }
</script>

<template functional>
  <div class="ui-toast-mask">
    <div class="ui-toast">
      <span>{{props.text}}</span>
    </div>
  </div>
</template> 

<script type="text/javascript">

  export default {
    props: {
      text: {
        type: String,
        default: ''
      }
    }
  }

</script>  
const Toast = {
  installed: false,
  install (Vue, options) {
    if (Toast.installed) {
      return
    }
    Vue.prototype.$toast = (toast) => {

      if (document.querySelector('.ui-toast-mask')) {
        return
      }
      const uiToast = document.getElementById('ui-toast')
      const tpl = `
       <div class="ui-toast-mask" id="ui-toast">
         <div class="ui-toast">
          <span>${toast}</span>
         </div>
       </div>  
      `
      utils.append(document.body, tpl)
      setTimeout(() => {
        uiToast.parentNode.removeChild(uiToast)
      }, 2000)

      Toast.installed = true
    }
  }
}

window.Toast = Toast

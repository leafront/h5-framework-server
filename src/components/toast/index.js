const Toast = {
  installed: false,
  install (Vue, options) {
    if (Toast.installed) {
      return
    }
    Vue.prototype.$toast = (toast) => {

      if (document.getElementById('ui-toast')) {
        return
      }
      const tpl = '<div class="ui-toast-mask" id="ui-toast"><div class="ui-toast"><span>'+ toast +'</span></div></div>'
      utils.append(document.body, tpl)
      const uiToast = document.getElementById('ui-toast')
      setTimeout(() => {
        uiToast.parentNode.removeChild(uiToast)
      }, 2000)
      Toast.installed = true
    }
  }
}

window.Vue.use(Toast)

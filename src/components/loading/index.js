const Loading = {
  installed: false,
  install (Vue) {
    if (Loading.installed) {
      return
    }
    Vue.prototype.$showLoading = () => {

      // 如果页面有showLoading则不继续执行
      if (document.getElementById('showLoading')) {
        return
      } 
      // 1、创建构造器，定义好提示信息的模板
      const tpl = `
        <div class="ui-showLoading" id="ui-showLoading">
          <div class="ui-showLoading-cont">
            <i></i><p class="cfff font">正在加载中</p>
          </div>
        </div>
      `
      utils.append(document.body, tpl)
      const uiShowLoading = document.getElementById('ui-showLoading')
      uiShowLoading.addEventListener('touchmove', function(e) {
        if (!utils.isPassive()) {
          e.preventDefault()
        }
        e.stopPropagation()
      },utils.isPassive() ? {passive: true} : false)
      Loading.installed = true
    }

    Vue.prototype.$hideLoading = () => {
      if (uiShowLoading) {
        uiShowLoading.parentNode.removeChild(uiShowLoading)
      }
    }
  }
}

window.Loading = Loading  

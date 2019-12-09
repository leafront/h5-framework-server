export default {
  installed: false,
  install (Vue) {
    if (this.installed) {
      return
    }
    Vue.prototype.$showLoading = () => {

      if (document.getElementById('showLoading')) {
        return
      } 
      const tpl = '<div class="ui-showLoading" id="ui-showLoading"><div class="ui-showLoading-cont"><svg class="ui-showLoading-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><rect x="46.5" y="40" width="7" height="20" rx="5" ry="5" fill="#fff" transform="rotate(0 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="0.8s" begin="0s" repeatCount="indefinite"></animate></rect><rect x="46.5" y="40" width="7" height="20" rx="5" ry="5" fill="#fff" transform="rotate(30 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="0.8s" begin="0.06666666666666667s" repeatCount="indefinite"></animate></rect><rect x="46.5" y="40" width="7" height="20" rx="5" ry="5" fill="#fff" transform="rotate(60 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="0.8s" begin="0.13333333333333333s" repeatCount="indefinite"></animate></rect><rect x="46.5" y="40" width="7" height="20" rx="5" ry="5" fill="#fff" transform="rotate(90 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="0.8s" begin="0.20000000000000004s" repeatCount="indefinite"></animate></rect><rect x="46.5" y="40" width="7" height="20" rx="5" ry="5" fill="#fff" transform="rotate(120 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="0.8s" begin="0.26666666666666666s" repeatCount="indefinite"></animate></rect><rect x="46.5" y="40" width="7" height="20" rx="5" ry="5" fill="#fff" transform="rotate(150 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="0.8s" begin="0.3333333333333333s" repeatCount="indefinite"></animate></rect><rect x="46.5" y="40" width="7" height="20" rx="5" ry="5" fill="#fff" transform="rotate(180 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="0.8s" begin="0.4000000000000001s" repeatCount="indefinite"></animate></rect><rect x="46.5" y="40" width="7" height="20" rx="5" ry="5" fill="#fff" transform="rotate(210 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="0.8s" begin="0.46666666666666673s" repeatCount="indefinite"></animate></rect><rect x="46.5" y="40" width="7" height="20" rx="5" ry="5" fill="#fff" transform="rotate(240 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="0.8s" begin="0.5333333333333333s" repeatCount="indefinite"></animate></rect><rect x="46.5" y="40" width="7" height="20" rx="5" ry="5" fill="#fff" transform="rotate(270 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="0.8s" begin="0.6s" repeatCount="indefinite"></animate></rect><rect x="46.5" y="40" width="7" height="20" rx="5" ry="5" fill="#fff" transform="rotate(300 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="0.8s" begin="0.6666666666666666s" repeatCount="indefinite"></animate></rect><rect x="46.5" y="40" width="7" height="20" rx="5" ry="5" fill="#fff" transform="rotate(330 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="0.8s" begin="0.7333333333333334s" repeatCount="indefinite"></animate></rect></svg><p class="cfff font">正在加载中</p></div></div>'
      utils.append(document.body, tpl)
      const uiShowLoading = document.getElementById('ui-showLoading')
      uiShowLoading.addEventListener('touchmove', (e) => {
        e.stopPropagation()
      }, utils.isPassive() ? {passive: true} : false)
      this.installed = true
    }

    Vue.prototype.$hideLoading = () => {
      if (uiShowLoading) {
        uiShowLoading.parentNode.removeChild(uiShowLoading)
      }
    }
  }
}
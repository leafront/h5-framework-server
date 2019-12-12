import loadingComponent from '@/components/loading/index.vue'
const LoadingConstructor = Vue.extend(loadingComponent)

export default {
  install (Vue) {
    let vm = null
    Vue.prototype.$showLoading = () => {
      vm = new LoadingConstructor({
        el : document.createElement('div')
      })
      document.body.appendChild(vm.$el)
      vm.$el.addEventListener('touchmove', (e) => {
        e.stopPropagation()
      }, utils.isPassive() ? {passive: true} : false)
    }

    Vue.prototype.$hideLoading = () => {
      document.body.removeChild(vm.$el)
      vm = null
    }
  }
}
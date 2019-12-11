import loadingComponent from '@/components/loading/index.vue'
const LoadingConstructor = Vue.extend(loadingComponent)

export default {
  install (Vue) {
    let vm = null
    const body = document.body
    Vue.prototype.$showLoading = () => {
      vm = new LoadingConstructor({
        el : document.createElement('div')
      })
      body.appendChild(vm.$el)
      vm.$el.addEventListener('touchmove', (e) => {
        e.stopPropagation()
      }, utils.isPassive() ? {passive: true} : false)
    }

    Vue.prototype.$hideLoading = () => {
      body.removeChild(vm.$el)
      vm = null
    }
  }
}
import ShowTostComponent from '@/components/showToast/index.vue'
const ShowToastConstructor = Vue.extend(ShowTostComponent)

export default {
  install (Vue, options) {
    Vue.prototype.$showToast = (text) => {
      let isClick = true
      let vm = new ShowToastConstructor({
        el : document.createElement('div'),
        propsData: {
          text
        }
      })
      if (!isClick) {
        return
      }
      document.body.appendChild(vm.$el)
      isClick = false
      setTimeout(() => {
        document.body.removeChild(vm.$el)
        vm = null
        isClick = true
      }, 2000)
    }
  }
}

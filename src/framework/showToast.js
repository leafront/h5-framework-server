import ShowTostComponent from '@/components/showToast/index.vue'
const ShowToastConstructor = Vue.extend(ShowTostComponent)
const body = document.body

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
      body.appendChild(vm.$el)
      isClick = false
      setTimeout(() => {
        body.removeChild(vm.$el)
        vm = null
        isClick = true
      }, 2000)
    }
  }
}

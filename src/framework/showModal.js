import ShowModalComponent from '@/components/showModal/index.vue'
const ShowModalConstructor = Vue.extend(ShowModalComponent)
const body = document.body

export default {
  install (Vue, options) {
    let vm = null
    Vue.prototype.$showModal = ({
      content,
      cancelText,
      confirmText,
      showCancel,
      success
    }) => {
      vm = new ShowModalConstructor({
        el : document.createElement('div'),
        propsData: {
          content,
          cancelText,
          confirmText,
          showCancel,
          success: () => {
            success()
            body.removeChild(vm.$el)
            vm = null
          },
          cancel: () => {
            body.removeChild(vm.$el)
            vm = null
          }
        }
      })
      body.appendChild(vm.$el)
    }
  }
}

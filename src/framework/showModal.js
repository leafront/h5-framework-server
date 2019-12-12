import ShowModalComponent from '@/components/showModal/index.vue'
const ShowModalConstructor = Vue.extend(ShowModalComponent)

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
            document.body.removeChild(vm.$el)
            vm = null
          },
          cancel: () => {
            document.body.removeChild(vm.$el)
            vm = null
          }
        }
      })
      body.appendChild(vm.$el)
    }
  }
}

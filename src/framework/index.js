import '@/framework/polyfill'
import '@/framework/skeleton'
import utils from '@/framework/utils'
import ajax from '@/framework/ajax'
import store from '@/framework/store'
import request from '@/framework/request'
import scale from '@/framework/scale'
import loading from '@/framework/loading'
import showToast from '@/framework/showToast' 
import showModal from '@/framework/showModal'

window.utils = utils
window.ajax = ajax
window.store = store
window.request = request
window.Vue.use(loading)  
window.Vue.use(showToast)
window.Vue.use(showModal)
scale.init()



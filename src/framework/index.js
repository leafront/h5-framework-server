import utils from '@/framework/utils'
import ajax from '@/framework/ajax'
import store from '@/framework/store'
import request from '@/framework/request'
import loading from '@/framework/loading'
import showToast from '@/framework/showToast' 
import showModal from '@/framework/showModal'
import defer from '@/framework/defer'
import '@/framework/polyfill'
import '@/framework/skeleton'
import '@/framework/hack'

window.utils = utils
window.store = store
window.request = request
window.defer = defer
window.Vue.use(loading)  
window.Vue.use(showToast)
window.Vue.use(showModal)



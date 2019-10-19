import App from './index.vue'
import filter from '../../filter'

Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})
new Vue({
  el: '#app',
  render: h => h(App)
})

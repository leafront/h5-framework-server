import Index from './index.vue'

Object.keys(window.filter).forEach(key => {
  Vue.filter(key, filter[key])
})

new Vue({
  el: '#app',
  render: h => h(Index)
})

Vue.directive('skeleton', {
  bind (el, binding, vnode) {
    const pic = binding.value
    if (!pic) {
      return
    }
    const img = new Image()
    img.src = pic
    img.addEventListener('load', () => {
      el.style.backgroundImage = 'url('+pic+')'
      el.style.backgroundColor = 'transparent'
    }, false)
  }
})

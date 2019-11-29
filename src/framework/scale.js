const scale = {
  init () {
    document.addEventListener("DOMContentLoaded", function () {
      document.addEventListener('touchstart', (event) => {
        if (event.touches.length > 1 ){
          event.preventDefault()
        }
      }, utils.isPassive() ? {
        passive: false,
        capture: true
      } : true)
      var lastTouchEnd = 0
      document.addEventListener('touchend', (event) => {
        var now = (new Date()).getTime()
        if (now - lastTouchEnd <= 300) {
          event.preventDefault()
        }
        lastTouchEnd = now
      }, utils.isPassive() ? {
        passive: false,
        capture: true
      } : true)
      document.addEventListener('gesturestart', (event) =>  {
        event.preventDefault()
      }, utils.isPassive() ? {
        passive: false,
        capture: true
      } : true)
    })

    document.getElementById('app').addEventListener('touchmove', () =>  {
      event.stopPropagation()
      event.preventDefault()
    }, utils.isPassive() ? {
      passive: false
    } : false)
  }
}
export default scale
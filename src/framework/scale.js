const scale = {
  init () {
    document.addEventListener("DOMContentLoaded", function () {
      document.addEventListener('touchstart', (event) => {
        if (event.touches.length > 1 ){
          event.preventDefault()
        }
      }, false)
      var lastTouchEnd = 0
      document.addEventListener('touchend', (event) => {
        var now = (new Date()).getTime()
        if (now - lastTouchEnd <= 300) {
          event.preventDefault()
        }
        lastTouchEnd = now
      }, false)
      document.addEventListener('gesturestart', (event) =>  {
        event.preventDefault()
      }, false)
    })

    document.getElementById('app').addEventListener('touchmove', () =>  {
      event.stopPropagation()
      event.preventDefault()
    }, false)
  }
}
export default scale
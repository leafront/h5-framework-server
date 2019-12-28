function stopPageEnlarge() { // 处理iphone safari 双指放大和单击两次放大的问题
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

  document.getElementById('app').addEventListener('touchmove', (event) =>  {
    event.stopPropagation()
    event.preventDefault()
  }, false)
}

function changePageScroll () { // 处理iphone safari 输入框键盘抬起没有返回原来的位置
  let scrollTop = 0  
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.scroll-view-wrapper').addEventListener('focusin', (event) => {
      if (event.target.nodeName.toLowerCase() == 'input') {
        scrollTop = document.scrollingElement.scrollTop
      }
    }, false)
    document.querySelector('.scroll-view-wrapper').addEventListener('focusout', (event) => {
      if (event.target.nodeName.toLowerCase() == 'input') {
        document.scrollingElement.scrollTo(0, scrollTop)
      }
    }, false)
  })
}
stopPageEnlarge()
changePageScroll()
Vue.filter('httpsImg', (text) => {
	if (!text) {
    return text
  }
  const pattern = /http:\/\//
  return text.replace(pattern,'https://')
})

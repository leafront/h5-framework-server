Vue.filter('httpsImg', (text) => {
	if (!text) {
    return text
  }
  return text.replace(/http:\/\//, 'https://')
})

const httpsImg = (text) =>{
  if (!text) {
    return text
  }
  const pattern = /http:\/\//
  return text.replace(pattern,'https://')
}

window.filter ={
  httpsImg
}

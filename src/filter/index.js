const price = (value) => {
  if (!value || isNaN(value)) {
    value = '0'
  }
  return parseFloat(value).toFixed(2)
}

const httpsImg = (text) =>{
  if (!text) {
    return text
  }
  const pattern = /http:\/\//
  return text.replace(pattern,'https://')
}

export default { price, httpsImg }

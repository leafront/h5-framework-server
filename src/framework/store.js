import utils from '@/framework/utils'

function getStorageType (type) {
  type = type == 'local' ? 'localStorage': 'sessionStorage'
  return window[type]
}
var store = Object.create(null)

if (utils.isLocalStorageSupported()) {
  store.set = (key, val, type) =>  {
    const storage = getStorageType(type)
    if (typeof val == 'object') {
      storage[key] = utils.serialize(val)
    } else {
      storage[key] = val
    }
  }
  store.get = (key, type) => {
    const storage = getStorageType(type)
    return utils.deserialize(storage[key])
  }
  store.remove = (key,type) => {
    const storage = getStorageType(type)
    delete storage[key]
  }
  store.clear = (type) => {
    const storage = getStorageType(type)
    storage.clear()
  }
} else {
  var windowStorage = Object.create(null)
  store.set = (key, val) => {
    if (window.name) {
      windowStorage = utils.deserialize(window.name)
    } 
    windowStorage[key] = val
    window.name = utils.serialize(windowStorage)
  }
  store.get = (key) => {
    if (window.name) {
      return utils.deserialize(window.name)[key]
    } else {
      return ''
    }
  }
  store.remove = (key) => {
    windowStorage = utils.deserialize(window.name)
    delete windowStorage[key]
    window.name = utils.serialize(windowStorage)
  }
  store.clear = () => {
    window.name = ''
  }
}

export default store


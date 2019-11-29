import utils from '@/framework/utils'

function getStorageType (storageType) {
  storageType = storageType == 'local' ? 'localStorage': 'sessionStorage'
  return window[storageType]
}
const store = {}

if (utils.isLocalStorageSupported()) {
  store.set = function (key, val,storageType) {
    const storage = getStorageType(storageType)
    if (typeof val == 'object') {
      storage[key] = utils.serialize(val)
    } else {
      storage[key] = val
    }
  }
  store.get = function (key,storageType) {
    const storage = getStorageType(storageType)
    return utils.deserialize(storage[key])
  }
  store.remove = function (key,storageType) {
    const storage = getStorageType(storageType)
    delete storage[key]
  }
  store.clear = function (storageType) {
    const storage = getStorageType(storageType)
    storage.clear()
  }
} else {
	let windowStorage = {}
	store.set = function (key, val) {
		if (window.name) {
			windowStorage = utils.deserialize(window.name)
		} else {
			windowStorage = {}
		}
		windowStorage[key] = val
		window.name = utils.serialize(windowStorage)
	}
	store.get = function (key) {
		if (window.name) {
			return utils.deserialize(window.name)[key]
		} else {
			return null
		}
	}
	store.remove = function (key) {
		windowStorage = utils.deserialize(window.name)
		delete windowStorage[key]
		window.name = utils.serialize(windowStorage)
	}
	store.clear = function () {
		window.name = ''
	}
}

export default store


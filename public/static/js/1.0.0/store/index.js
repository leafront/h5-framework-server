!function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function r(e){return e="local"==e?"localStorage":"sessionStorage",window[e]}var e={};if(utils.isLocalStorageSupported())e.set=function(e,n,o){var i=r(o);"object"==(void 0===n?"undefined":t(n))?i[e]=utils.serialize(n):i[e]=n},e.get=function(e,n){var o=r(n);return utils.deserialize(o[e])},e.remove=function(e,n){delete r(n)[e]},e.clear=function(e){r(e).clear()};else{var o={};e.set=function(e,n){(o=window.name?utils.deserialize(window.name):{})[e]=n,window.name=utils.serialize(o)},e.get=function(e){return window.name?utils.deserialize(window.name)[e]:null},e.remove=function(e){delete(o=utils.deserialize(window.name))[e],window.name=utils.serialize(o)},e.clear=function(){window.name=""}}window.store=e}();

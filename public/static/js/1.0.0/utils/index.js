!function(){"use strict";var e={serialize:function(e){return JSON.stringify(e)},append:function(e,t){var n=document.createElement("div"),i=null,r=document.createDocumentFragment();n.innerHTML=t;for(var o=0,a=(i=n.childNodes).length;o<a;o+=1)r.appendChild(i[o].cloneNode(!0));e.appendChild(r),r=i=null},deserialize:function(e){if("string"!=typeof e||""==e)return"";try{return JSON.parse(e)}catch(e){return""}},isLocalStorageSupported:function(){var e="test",t=window.sessionStorage;try{return t.setItem(e,"testValue"),t.removeItem(e),!0}catch(e){return!1}},throttle:function(i,r){var o,a;return r=r||250,function(){var e=this,t=arguments,n=+new Date;o&&n<o+r?(clearTimeout(a),a=setTimeout(function(){o=n,i.apply(e,t)},r)):(o=n,i.apply(e,t))}},queryStringify:function(e){function t(e,t){return""===t?e:e+"="+encodeURIComponent(""===t?"":String(t))}var n=[];for(var i in e){var r=e[i=encodeURIComponent(i)];if(r&&r.constructor==Array){for(var o=[],a=0,c=r.length;a<c;a++)o.push(t(i,r[a]));n=n.concat(o)}else n.push(t(i,r))}return n.join("&")},query:function(e){for(var t=Object.create(null),n=location.search.substring(1),i=n.split("&"),r=0;r<i.length;r++){var o=i[r].indexOf("=");if(-1!=o){var a=i[r].substring(0,o),c=i[r].substring(o+1);c=decodeURIComponent(c),t[a]=c}}return e?t[e]:t},isPassive:function(){var e=!1;try{addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){e=!0}}))}catch(e){}return e},setCookie:function(e,t,n){var i=n&&n.day||365,r=n&&n.domain||location.hostname,o=new Date;o.setTime(o.getTime()+24*i*60*60*1e3),document.cookie=e+"="+escape(t)+";expires="+o.toGMTString()+"; path=/; domain="+r},getCookie:function(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null},delCookie:function(e){var t=new Date;t.setTime(t.getTime()-1);var n=this.getCookie(e);null!=n&&(document.cookie=e+"="+n+";expires="+t.toGMTString()+"; path=/; domain="+location.hostname)},appViewFixed:function(){var e=document.getElementById("app");e.classList.contains("app_fixed")?e.classList.remove("app_fixed"):e.classList.add("app_fixed")},trim:function(e){return e.replace(/\s+/g,"")},loadScript:function(e,t){var n=document.createElement("script");n.type="text/javascript",n.src=config.staticPath+e,document.getElementsByTagName("head")[0].appendChild(n),n.onload=function(){t&&t()}},appendScript:function(e){var t=document.createElement("script");t.type="text/javascript",t.appendChild(document.createTextNode(e)),document.head.appendChild(t)}};window.utils=e}();

!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=23)}([function(t,e,n){"use strict";function i(t,e,n,i,r,o,s,a){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=u):r&&(u=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=function(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(n," */")}(i),o=i.sources.map(function(t){return"/*# sourceURL=".concat(i.sourceRoot).concat(t," */")});return[n].concat(o).concat([r]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(var s=0;s<t.length;s++){var a=t[s];null!=a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="(".concat(a[2],") and (").concat(n,")")),e.push(a))}},e}},function(t,e,n){var i,r,o,s={},a=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),u=(o={},function(t,e){if("function"==typeof t)return t();if(void 0===o[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}o[t]=n}return o[t]}),c=null,l=0,f=[],h=n(3);function d(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=s[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(w(i.parts[o],e))}else{var a=[];for(o=0;o<i.parts.length;o++)a.push(w(i.parts[o],e));s[i.id]={id:i.id,refs:1,parts:a}}}}function p(t,e){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function m(t,e){var n=u(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=f[f.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=u(t.insertAt.before,n);n.insertBefore(e,r)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);0<=e&&f.splice(e,1)}function y(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=n.nc;i&&(t.attrs.nonce=i)}return b(e,t.attrs),m(t,e),e}function b(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function w(t,e){var n,i,r,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var s=l++;n=c=c||y(e),i=T.bind(null,n,s,!1),r=T.bind(null,n,s,!0)}else r=t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),m(t,e),e}(e),i=function(t,e,n){var i=n.css,r=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(i=h(i)),r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(e),i=function(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),function(){v(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var i=[],r=0;r<n.length;r++){var o=n[r];(a=s[o.id]).refs--,i.push(a)}for(t&&d(p(t,e),e),r=0;r<i.length;r++){var a;if(0===(a=i[r]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete s[a.id]}}}};var g,x=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function T(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,n){var i=n(11);"string"==typeof i&&(i=[[t.i,i,""]]);n(2)(i,{hmr:!0,transform:void 0,insertInto:void 0}),i.locals&&(t.exports=i.locals)},,,,,,function(t,e,n){"use strict";var i=n(4);n.n(i).a},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".slideshow-wrap{overflow:hidden;position:relative;width:100%}.slideshow-item{width:20000px}.slideshow-item li{width:7.5rem;float:left}.slideshow-item img{width:100%}.slideshow-dots{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:absolute;left:0;bottom:.15rem}.slideshow-dots li{width:.2rem;height:.04rem;border-radius:.03rem;background-color:#EAEAEA;margin-right:.14rem}.slideshow-dots li.active{background-color:#FF6900}\n",""])},,,,,,,,,,,,function(t,e,n){"use strict";function i(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"slideshow-wrap",class:{"ui-lazyLoad-pic":t.picLazyLoad}},[t._t("banner"),t._v(" "),t._t("dot")],2)}n.r(e),i._withStripped=!0;var r={props:{index:{type:Number,default:1},list:{type:Array,default:[]},step:{type:Number,default:20},isAutoPlay:{type:Boolean,default:!0},slideItem:{type:String,default:".slideshow-item"},preventDefault:{type:Boolean,default:!1},autoTime:{type:Number,default:5e3},itemWidth:{type:Number,default:750},picLazyLoad:{type:Boolean,default:!0}},data:function(){return{startTime:0,itemLength:0,wrapper:null,startX:0,startY:0,endX:0,endY:0,x:0,isValid:!0,isCheck:!1,autoPlayTimer:null}},methods:{touchstart:function(t){var e=t.touches?t.touches[0]:t;this.startX=this.endX=e.pageX,this.startY=this.endY=e.pageY,this.isValid=!0,this.isCheck=!1,this.stopAutoPlay(),this._start(t)},touchmove:function(t){if(this.isValid){var e=t.touches?t.touches[0]:t;this.endX=e.pageX,this.endY=e.pageY;var n=this.endX-this.startX,i=this.endY-this.startY;if(!this.isCheck){if(Math.abs(i)>Math.abs(n))return void(this.isValid=!1);this.isCheck=!0}t.preventDefault(),this._move(t,n)}},touchend:function(){this.isValid&&this._end()},init:function(){this.wrapper=document.querySelector(this.slideItem),this.startTime=(new Date).getTime(),this.itemLength=this.list.length-2,this.itemWidth=parseFloat(this.itemWidth),this.setWrapperPos(-this.index*this.itemWidth),this.startAutoPlay()},_start:function(){this.clearAnimate();var t=this.wrapper.style.transform;this.x=parseInt(t.match(/\(([-\.\d]+)px,/)[1],10),(new Date).getTime()-this.startTime<300&&(this.isValid=!1),this.preventDefault&&(this.isCheck=!0)},_move:function(t,e){this.setWrapperPos(this.x+e)},_end:function(){var t=this,e=this.wrapper.style.transform,n=-parseInt(e.match(/\(([-\.\d]+)px,/)[1],10),i=this.itemWidth;this.startX>this.endX?this.x=-Math.ceil(n/i)*i:this.x=-Math.floor(n/i)*i,this.wrapper.style.transition="300ms ease-in",this.wrapper.style.WebkitTransition="300ms ease-in",this.setWrapperPos(this.x);var r=Math.ceil(Math.abs(this.x/i));0<=this.x?(r=this.itemLength,setTimeout(function(){t.clearAnimate(),t.setWrapperPos(-t.itemLength*i)},300),this.startTime=(new Date).getTime()):Math.abs(this.x)>=(this.itemLength+1)*i&&(r=1,setTimeout(function(){t.clearAnimate(),t.setWrapperPos(-i)},300),this.startTime=(new Date).getTime()),this.$emit("toggleIndex",r),this.startAutoPlay()},setWrapperPos:function(t){this.wrapper.style.transform="translate3d("+t+"px, 0, 0)",this.wrapper.style.WebkitTransform="translate3d("+t+"px, 0, 0)"},clearAnimate:function(){this.wrapper.style.transition="none",this.wrapper.style.WebkitTransition="none"},autoPlay:function(){var t=this,e=this.index;e++,this.$emit("toggleIndex",e);var n=-e*this.itemWidth;e>this.itemLength&&(this.$emit("toggleIndex",1),setTimeout(function(){t.clearAnimate(),t.setWrapperPos(-t.itemWidth)},310)),this.wrapper.style.cssText="transition:300ms ease-in; -webkit-transition:300ms ease-in; transform: translate3d("+n+"px, 0, 0); -webkit-transform:translate3d("+n+"px, 0, 0)"},startAutoPlay:function(){var t=this;this.isAutoPlay&&1<this.itemLength&&(this.stopAutoPlay(),this.autoPlayTimer=setInterval(function(){return t.autoPlay()},this.autoTime))},stopAutoPlay:function(){this.autoPlayTimer&&(clearInterval(this.autoPlayTimer),this.autoPlayTimer=null)}},mounted:function(){var t=this;this.$nextTick(function(){t.init(),t.$el.addEventListener("touchstart",function(e){t.touchstart(e)},!1),t.$el.addEventListener("touchmove",function(e){t.touchmove(e)},!1),t.$el.addEventListener("touchend",function(e){t.touchend(e)},!1)})},destroyed:function(){clearInterval(this.autoPlayTimer)}},o=(n(10),n(0)),s=Object(o.a)(r,i,[],!1,null,null,null);s.options.__file="src/components/swiper/Swiper.vue";var a=s.exports;Vue.component("Swiper",a)}]);
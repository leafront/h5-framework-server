!function(){"use strict";var e={data:function(){return{index:1,wrapperWidth:750,itemWidth:750,itemHeight:"2.08rem"}},props:{bannerList:{type:Array,default:function(){return[]}}},computed:{list:function(){var e=Object.assign([],this.bannerList);if(e&&e.length){var t=e[e.length-1],i=e[0];e.unshift(i),e.push(t)}return e}},created:function(){var e=.92*document.documentElement.clientWidth;this.wrapperWidth=e,this.itemWidth=e},methods:{pageAction:function(e){e&&(location.href=e)},toggleIndex:function(e){this.index=e}}};function t(e,t,i,s,r,a,n,o,m,c){"boolean"!=typeof n&&(m=o,o=n,n=!1);var d,l="function"==typeof i?i.options:i;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,r&&(l.functional=!0)),s&&(l._scopeId=s),a?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,m(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=d):t&&(d=n?function(e){t.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,o(e))}),d)if(l.functional){var h=l.render;l.render=function(e,t){return d.call(t),h(e,t)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,d):[d]}return i}var m,c="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function i(e){return function(e,t){return function(e,t){var i=c?t.media||"default":e,s=d[i]||(d[i]={ids:new Set,styles:[]});if(!s.ids.has(e)){s.ids.add(e);var r=t.source;if(t.map&&(r+="\n/*# sourceURL="+t.map.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),s.element||(s.element=document.createElement("style"),s.element.type="text/css",t.media&&s.element.setAttribute("media",t.media),void 0===m&&(m=document.head||document.getElementsByTagName("head")[0]),m.appendChild(s.element)),"styleSheet"in s.element)s.styles.push(r),s.element.styleSheet.cssText=s.styles.filter(Boolean).join("\n");else{var a=s.ids.size-1,n=document.createTextNode(r),o=s.element.childNodes;o[a]&&s.element.removeChild(o[a]),o.length?s.element.insertBefore(n,o[a]):s.element.appendChild(n)}}}(e,t)}}var d={};var s=t({render:function(){var i=this,e=i.$createElement,s=i._self._c||e;return s("Swiper",{style:{height:i.itemHeight},attrs:{list:i.list,preventDefault:i.preventDefault,index:i.index,itemWidth:i.wrapperWidth},on:{toggleIndex:i.toggleIndex}},[s("ul",{staticClass:"slideshow-item",style:{height:i.itemHeight},attrs:{slot:"banner"},slot:"banner"},i._l(i.list,function(e){return s("li",{style:{width:i.itemWidth+"px"},on:{click:function(){return i.pageAction(e.url)}}},[s("img",{style:{width:i.itemWidth+"px",height:i.itemHeight},attrs:{src:e.poster}})])}),0),i._v(" "),s("ul",{staticClass:"slideshow-dots",attrs:{slot:"dot"},slot:"dot"},i._l(i.bannerList,function(e,t){return s("li",{class:{active:t==i.index-1}})}),0)])},staticRenderFns:[]},void 0,e,void 0,!1,void 0,!1,void 0,void 0,void 0),r=t({render:function(){var e=this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ui-pageLoading"},[t("i"),t("span",{staticClass:"c9"},[this._v("努力加载中")])])}]},function(e){e&&e("data-v-17524b22_0",{source:"@keyframes dotCarousel{0%{box-shadow:99.84rem 0 0 -1px #f60,100.14rem 0 0 1px #f60,100.44rem 0 0 -1px #f60}50%{box-shadow:100.44rem 0 0 -1px #f60,99.84rem 0 0 -1px #f60,100.14rem 0 0 1px #f60}100%{box-shadow:100.14rem 0 0 1px #f60,100.44rem 0 0 -1px #f60,99.84rem 0 0 -1px #f60}}.ui-pageLoading{display:flex;padding:.15rem 0;justify-content:center;align-items:center}.ui-pageLoading i{position:relative;left:-99.84rem;width:.2rem;height:.2rem;border-radius:50%;background-color:#f60;color:#f60;box-shadow:99.84rem 0 0 0 #f60,100.14rem 0 0 0 #f60,100.44rem 0 0 0 #f60;-webkit-box-shadow:99.84rem 0 0 0 #f60,100.14rem 0 0 0 #f60,100.44rem 0 0 0 #f60;animation:dotCarousel 1s infinite linear}.ui-pageLoading span{padding-left:.6rem}",map:void 0,media:void 0})},{},void 0,!1,void 0,!1,i,void 0,void 0),a=window.__NUXT__,n=a.navList,o=a.bannerList,l=a.operating,h=a.hotTicket,p=a.discountTicket,v=t({render:function(){var i=this,e=i.$createElement,s=i._self._c||e;return s("div",{staticClass:"pageView",attrs:{id:"app"}},[s("div",{staticClass:"scroll-view-wrapper"},[s("DownloadApp"),i._v(" "),s("div",{staticClass:"top-bar"},[i._m(0),i._v(" "),i._m(1),i._v(" "),s("div",{staticClass:"top-bar-user",on:{click:function(){return i.pageAction("/user/personal")}}},[s("i")])]),i._v(" "),s("div",{staticClass:"home-banner"},[s("Banner",{attrs:{bannerList:i.bannerList}})],1),i._v(" "),s("div",{staticClass:"home-nav"},i._l(i.navList,function(e,t){return s("div",{staticClass:"home-nav-item"},[s("div",{staticClass:"home-nav-item-pic ui-lazyLoad-pic"},[s("img",4<=t?{attrs:{src:i._f("httpsImg")(e.poster)},on:{load:function(e){return i.loadImg(e)}}}:{attrs:{src:i._f("httpsImg")(e.poster)}})]),i._v(" "),s("p",{staticClass:"c4 fs26"},[i._v(i._s(e.name))])])}),0),i._v(" "),s("div",{staticClass:"home-operating"},i._l(i.operating,function(e){return s("div",{staticClass:"home-operating-item"},[s("div",{staticClass:"operating-item-txt"},[s("h2",{staticClass:"operating-item-title",style:{backgroundImage:"url("+e.title+")"}}),i._v(" "),s("p",[i._v(i._s(e.subTitle))])]),i._v(" "),s("div",{staticClass:"operating-item-pic ui-lazyLoad-pic"},[s("img",{attrs:{src:e.poster},on:{load:function(e){return i.loadImg(e)}}})])])}),0),i._v(" "),i._m(2),i._v(" "),s("div",{staticClass:"home-activities"},[i._m(3),i._v(" "),s("div",{staticClass:"home-ticket"},[s("div",{staticClass:"home-ticket-wrapper",attrs:{id:"hot-ticket-wrapper"}},[i._l(i.hotTicket,function(e){return s("div",{staticClass:"home-ticket-item"},[s("div",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"home-ticker-pic ui-lazyLoad-pic",attrs:{"data-src":e.poster}}),i._v(" "),s("div",{staticClass:"home-ticket-watch"},[s("span",{staticClass:"cfff"},[i._v(i._s(1e4<e.wantWatchNum?parseInt(e.wantWatchNum/1e4)+"万":e.wantWatchNum))]),i._v(" "),s("i")]),i._v(" "),s("div",{staticClass:"home-ticket-info"},[s("p",{staticClass:"fs28 ui-ellipsis"},[i._v(i._s(e.properName))]),i._v(" "),s("div",{staticClass:"home-ticket-price"},[s("strong",[i._v("￥"+i._s(e.salePrice))]),i._v(" "),s("span",{staticClass:"c9"},[i._v("起")])])])])}),i._v(" "),i._m(4)],2)]),i._v(" "),i._m(5),i._v(" "),s("div",{staticClass:"home-ticket"},[s("div",{staticClass:"home-ticket-wrapper",attrs:{id:"discount-ticket-wrapper"}},[i._l(i.discountTicket,function(e){return s("div",{staticClass:"home-ticket-item"},[s("div",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"home-ticker-pic ui-lazyLoad-pic",attrs:{"data-src":e.poster}}),i._v(" "),s("div",{staticClass:"home-ticket-watch"},[s("span",{staticClass:"cfff"},[i._v(i._s(1e4<e.wantWatchNum?parseInt(e.wantWatchNum/1e4)+"万":e.wantWatchNum))]),i._v(" "),s("i")]),i._v(" "),s("div",{staticClass:"home-ticket-info"},[s("p",{staticClass:"fs28 ui-ellipsis"},[i._v(i._s(e.properName))]),i._v(" "),s("div",{staticClass:"home-ticket-price"},[s("strong",[i._v("￥"+i._s(e.salePrice))]),i._v(" "),s("span",{staticClass:"c9"},[i._v("起")])])])])}),i._v(" "),i._m(6)],2)])]),i._v(" "),i._m(7),i._v(" "),i._m(8),i._v(" "),s("div",{staticClass:"home-guess-like",attrs:{id:"guress-like-scroll"}},[i._m(9),i._v(" "),s("div",{staticClass:"home-guress-list"},i._l(i.list,function(e){return i.list&&i.list.length?s("div",{staticClass:"home-guress-item"},[s("div",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"home-guress-item-pic ui-lazyLoad-pic",attrs:{"data-src":e.recommendContent.poster}}),i._v(" "),s("div",{staticClass:"home-guress-item-info ui-bottom-line"},[s("h3",{staticClass:"c3 fs30 ui-ellipsis"},[i._v("[上海]"+i._s(e.recommendContent.properName))]),i._v(" "),s("div",{staticClass:"home-guress-item-times c9 ui-ellipsis"},[s("span",[i._v(i._s(e.recommendContent.timeRange))]),i._v(" "),s("strong",[i._v("|")]),i._v(" "),s("span",[i._v(i._s(e.recommendContent.venueName))])]),i._v(" "),s("div",{staticClass:"home-guress-item-score"},[s("span",{staticClass:"c9"},[i._v(i._s(e.recommendContent.rank?"评分":"暂无评分"))]),s("strong",[i._v(i._s(e.recommendContent.rank))])]),i._v(" "),s("div",{staticClass:"home-gress-item-price"},[s("strong",[i._v(i._s(e.recommendContent.lowPrice))]),s("span",{staticClass:"c9"},[i._v("元起")])]),i._v(" "),e.recommendContent.desc?s("div",{staticClass:"home-gress-item-des"},[s("p",{staticClass:"c9"},[i._v(i._s(e.recommendContent.desc))])]):i._e()])]):i._e()}),0)]),i._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:i.showLoading,expression:"showLoading"}],staticClass:"home-pageLoading"},[s("PageLoading",{attrs:{showLoading:i.showLoading}})],1)],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"top-bar-city"},[t("span",{staticClass:"fs28"},[this._v("上海")]),this._v(" "),t("i")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"top-bar-search"},[t("i"),this._v(" "),t("span",{staticClass:"c9 fs30"},[this._v("搜索明星、演出、场馆")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home-server"},[i("h4",[e._v("服务保障")]),e._v(" "),i("div",{staticClass:"home-server-item"},[i("span",{staticClass:"c9"},[e._v("无票赔付")]),e._v(" "),i("span",{staticClass:"c9"},[e._v("出票保真")]),e._v(" "),i("span",{staticClass:"c9"},[e._v("配送保障")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home-hot-title"},[i("h3",[e._v("近期热门")]),e._v(" "),i("div",{staticClass:"home-title-all"},[i("p",{staticClass:"fs24 c9"},[e._v("全部")]),e._v(" "),i("div",{staticClass:"ui-right-arrow"})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home-ticket-item-more"},[t("div",{staticClass:"home-ticket-item-more-wrapper"},[t("div",{staticClass:"home-ticket-item-dot"},[t("span"),t("span"),t("span")]),this._v(" "),t("p",{staticClass:"c3"},[this._v("查看更多")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home-hot-title"},[i("h3",[e._v("折扣专区")]),e._v(" "),i("div",{staticClass:"home-title-all"},[i("p",{staticClass:"fs28 c9"},[e._v("全部")]),e._v(" "),i("div",{staticClass:"ui-right-arrow"})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home-ticket-item-more"},[t("div",{staticClass:"home-ticket-item-more-wrapper"},[t("div",{staticClass:"home-ticket-item-dot"},[t("span"),t("span"),t("span")]),this._v(" "),t("p",{staticClass:"c3"},[this._v("查看更多")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home-advert ui-lazyLoad-pic"},[t("img",{attrs:{src:"https://img.piaoniu.com/banner/b5cbe1866115f85b91f3eca09dcbe1d103d92a5b.jpg"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home-advert-more"},[t("p",{staticClass:"fs28"},[this._v("更多精彩内容待你发现")]),this._v(" "),t("div",{staticClass:"ui-right-arrow"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home-guess-like-title"},[t("h3",[this._v("猜你喜欢")])])}]},function(e){e&&e("data-v-7a2ef68e_0",{source:'body{background:#fff}.home-pageLoading{padding-top:.12rem}.home-advert{margin:.64rem .28rem .16rem}.home-advert img{width:100%;height:1.8rem}.home-gress-item-des{padding:.18rem 0;border-top:.01rem solid #e0e0e0}.home-guress-item{display:flex;justify-content:space-between}.home-guress-item:last-child .home-guress-item-info{border-bottom:0}.home-guress-item-pic{width:1.5rem;height:2rem}.home-guress-item-info{width:5.06rem}.home-guress-item-info h3{font-weight:600}.home-gress-item-price{padding-bottom:.2rem}.home-gress-item-price strong{font-size:.36rem;color:#ff2661;padding-right:.08rem}.home-guress-item-times{padding-top:.18rem}.home-guress-item-times strong{padding:0 .1rem}.home-guress-item-score{padding-top:.12rem;padding-bottom:.12rem}.home-guress-item-score strong{color:#ffb02e;font-weight:700;padding-left:.1rem}.home-guess-like-title h3{font-size:.36rem;color:#565656}.home-guess-like{padding:.68rem .3rem .3rem}.home-guress-item{padding-top:.3rem}.home-advert-more{display:flex;align-items:center;height:.8rem;justify-content:center;margin:.48rem .28rem 0;border:.01rem solid #f5f5f5;border-radius:.08rem}.home-advert-more p{color:#262626}.home-advert-more .ui-right-arrow{margin-left:.1rem}.home-ticket-info p{padding-top:.14rem;padding-bottom:.06rem;color:#262626}.home-ticket-price{display:flex}.home-ticket-price strong{color:#ff2661}.home-ticket-price span{transform:scale(.8);transform-origin:left bottom;margin-left:.04rem}.home-ticket-item-more{width:2.32rem;flex-shrink:0;padding-right:.28rem}.home-ticket-item-more-wrapper{display:flex;flex-direction:column;justify-content:center;align-items:center;background:#eaebee;height:2.74rem}.home-ticket-item-dot{display:flex;padding-bottom:.1rem}.home-ticket-item-dot span{border-radius:50%;width:.18rem;height:.18rem;background:#bebfc4;margin-right:.1rem}.home-ticket-item-dot span:last-child{margin-right:0}.home-ticket-wrapper{display:flex;overflow-x:auto;overflow-y:hidden;padding:.18rem .28rem .3rem;transform:translateY(.3rem);margin-top:-.48rem;-webkit-overflow-scrolling:touch}.home-ticket-wrapper .home-ticket-item{margin-right:.2rem;flex-shrink:0;margin-right:.2rem;width:2.04rem;position:relative}.home-ticket-watch{background:rgba(0,0,0,.55);position:absolute;left:0;top:0;width:.8rem;display:flex;flex-direction:column;align-items:center;padding:.05rem 0}.home-ticker-pic{height:2.74rem;background-size:cover}.home-ticket{overflow:hidden}.home-hot-title{padding:0 .28rem .32rem;margin-top:.64rem;display:flex;justify-content:space-between;align-items:center}.home-hot-title h3{color:#565656;font-size:.36rem;font-weight:700}.home-title-all{display:flex}.home-title-all .ui-right-arrow{margin-left:.05rem}.home-server{margin:.4rem .32rem 0;padding:0 .16rem;height:.64rem;background:rgba(245,245,245,.53);display:flex;justify-content:space-between;align-items:center;border-radius:.04rem}.home-server-item{display:flex}.home-server-item span{padding:0 .2rem;position:relative}.home-server-item span:after{content:"";display:block;position:absolute;top:.04rem;right:0;width:.02rem;height:.24rem;background:#e6e6e6}.home-server-item span:last-child{padding-right:0}.home-server-item span:last-child:after{display:none}.top-bar{height:.88rem;display:flex}.top-bar-city{padding:0 .32rem;height:100%;display:flex;align-items:center}.top-bar-city span{color:#262626}.top-bar-city i{display:block;width:.12rem;height:.12rem;border-left:.02rem solid #262626;border-bottom:.02rem solid #262626;transform:rotate(-45deg);transform-origin:center center;position:relative;top:-.03rem;margin-left:.12rem}.home-operating{padding:.44rem .32rem 0;display:flex;justify-content:space-between}.home-operating-item{width:48%;height:1.36rem;box-shadow:0 .04rem .12rem 0 rgba(0,0,0,.07);border-radius:.12rem;padding-left:.24rem;display:flex;justify-content:space-between}.operating-item-txt{padding-top:.16rem}.operating-item-pic{width:1.6rem;height:1.18rem}.operating-item-pic img{width:100%;height:100%}.operating-item-title{width:1.6rem;height:.28rem;background-repeat:no-repeat;background-size:contain;margin-bottom:.07rem}.top-bar-search{margin:.1rem 0;background:#f5f5f5;display:flex;align-items:center;padding-left:.3rem;flex:1;border-radius:.32rem}.top-bar-search i{width:.34rem;height:.34rem;background:url(/static/img/home_sprite.png?v=version) no-repeat -.49rem -.11rem;background-size:2rem auto}.top-bar-search span{padding-left:.1rem}.top-bar-user{width:1.14rem;display:flex;align-items:center;justify-content:center}.top-bar-user i{width:.38rem;height:.41rem;background:url(/static/img/home_sprite.png?v=version) .02rem -.04rem no-repeat;background-size:2rem auto}.home-banner{padding:.3rem .3rem 0}.home-banner-pic{height:2.08rem}.home-nav{padding:0 .32rem;display:flex;flex:1;flex-wrap:wrap}.home-nav-item{width:20%;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-top:.44rem}.home-nav-item .home-nav-item-pic{width:.68rem;height:.68rem;border-radius:50%;position:relative}.home-nav-item .home-nav-item-pic img{width:100%;height:100%}.home-nav-item p{margin-top:.2rem}',map:void 0,media:void 0})},{data:function(){return{navList:n,bannerList:o,operating:l,hotTicket:h,discountTicket:p,pageView:!0,list:[],showLoading:!0,isScrollLoad:!0,pageIndex:1,pageTotal:0}},components:{Banner:s,PageLoading:r},methods:{loadImg:function(e){e.currentTarget.style.backgroundColor="#fff"},pageAction:function(e){location.href=e},getRecommendsList:function(){var i=this,s=this.pageIndex;(function(e){return request("/api/v2/home/recommends",e)})({type:"GET",data:{pageIndex:s,pageSize:10}}).then(function(e){var t=e.data;e&&t.length&&(1<s?(i.isScrollLoad=!0,i.list=i.list.concat(t||[])):i.list=t||[],i.pageTotal=e.totalNum),s!=Math.ceil(e.totalNum/e.pageSize)&&t.length||(i.showLoading=!1)})},scrollLoadList:function(){var e=this,t=window.innerHeight,i=document.documentElement.scrollTop||document.body.scrollTop,s=document.querySelector(".scroll-view-wrapper").offsetHeight-50;this.isScrollLoad&&(this.isScrollLoad=!1,this.timer=window.requestAnimationFrame(function(){s<=t+i&&e.list.length<e.pageTotal?(e.pageIndex+=1,e.getRecommendsList()):e.isScrollLoad=!0}))}},created:function(){this.getRecommendsList(),window.addEventListener("scroll",this.scrollLoadList,!!utils.isPassive()&&{passive:!0})},beforeDestroy:function(){window.cancelAnimationFrame(this.timer),window.removeEventListener("scroll",this.scrollLoadList,!!utils.isPassive()&&{passive:!0})}},void 0,!1,void 0,!1,i,void 0,void 0);Object.keys(window.filter).forEach(function(e){Vue.filter(e,filter[e])}),new Vue({el:"#app",render:function(e){return e(v)}})}();

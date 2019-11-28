<template>  
  <div class="pageView" id="app">
    <div class="scroll-view-wrapper">
      <DownloadApp></DownloadApp>
      <div class="top-bar">
        <div class="top-bar-city">
          <span class="fs28">上海</span>
          <i></i>
        </div>  
        <div class="top-bar-search">
          <svg t="1574850639786" class="icon" viewBox="0 0 1025 1024" xmlns="http://www.w3.org/2000/svg" p-id="2321">
            <path d="M786.526717 741.354961C854.696182 662.757733 895.951115 560.184449 895.951115 447.975557 895.951115 200.565489 695.38561 0 447.975557 0 200.565505 0 0 200.565489 0 447.975557 0 695.385626 200.565505 895.951115 447.975557 895.951115 560.143357 895.951115 662.682626 854.726372 741.268611 786.60159L969.314056 1014.647016C981.684069 1027.017029 1002.126281 1027.199073 1014.622368 1014.702978 1027.205585 1002.119763 1027.093431 981.921653 1014.566403 969.394653L786.526717 741.354961 786.526717 741.354961 786.526717 741.354961 786.526717 741.354961 786.526717 741.354961 786.526717 741.354961 786.526717 741.354961ZM447.975557 831.954606C235.909784 831.954606 63.996508 660.04133 63.996508 447.975557 63.996508 235.909784 235.909784 63.996508 447.975557 63.996508 660.04133 63.996508 831.954606 235.909784 831.954606 447.975557 831.954606 660.04133 660.04133 831.954606 447.975557 831.954606L447.975557 831.954606 447.975557 831.954606 447.975557 831.954606 447.975557 831.954606 447.975557 831.954606 447.975557 831.954606Z" p-id="2322" fill="#666666">
            </path>
          </svg>
          <span class="c9 fs30">搜索明星、演出、场馆</span>
        </div>
        <div class="top-bar-user" @click="pageAction('/user/personal')">
          <svg t="1574850997866" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="7991" w>
            <path d="M512 496c-124.8 0-224-99.2-224-224s99.2-224 224-224 224 99.2 224 224-99.2 224-224 224z m0-384c-89.6 0-160 70.4-160 160s70.4 160 160 160 160-70.4 160-160-70.4-160-160-160zM880 976h-736C99.2 976 64 940.8 64 896c0-156.8 150.4-384 384-384h128c233.6 0 384 227.2 384 384 0 44.8-35.2 80-80 80zM448 576C256 576 128 768 128 896c0 9.6 6.4 16 16 16h736c9.6 0 16-6.4 16-16 0-128-128-320-320-320h-128z" p-id="7992" fill="#333333">
            </path> 
          </svg>
        </div>   
      </div>  
      <div class="home-banner">
        <Banner :bannerList="bannerList"></Banner>
      </div>
      <div class="home-nav">
        <div class="home-nav-item" v-for="(item, index) in navList">
          <div class="home-nav-item-pic ui-lazyLoad-pic">
            <img v-if="index >= 4" :src="item.poster|httpsImg" @load="loadImg($event)"/>
            <img v-else :src="item.poster|httpsImg"/>
          </div>
          <p class="c4 fs26">{{item.name}}</p>
        </div>  
      </div> 
      <div class="home-operating">
        <div class="home-operating-item" v-for="item in operating">
          <div class="operating-item-txt">
            <h2 class="operating-item-title" :style="{'backgroundImage': 'url('+item.title+')'}"></h2>
            <p>{{item.subTitle}}</p>
          </div>  
          <div class="operating-item-pic ui-lazyLoad-pic" >
            <img :src="item.poster" @load="loadImg($event)"/>
          </div>  
        </div>   
      </div> 
      <div class="home-server">
        <h4>服务保障</h4>
        <div class="home-server-item">
          <span class="c9">无票赔付</span>
          <span class="c9">出票保真</span>
          <span class="c9">配送保障</span>
        </div>
      </div> 
      <div class="home-activities">
        <div class="home-hot-title">
          <h3>近期热门</h3>
          <div class="home-title-all">
            <p class="fs28 c9">全部</p>
            <div class="ui-right-arrow"></div>
          </div>  
        </div>  
        <div class="home-ticket">
          <div class="home-ticket-wrapper" id="hot-ticket-wrapper">
            <div class="home-ticket-item" v-for="item in hotTicket">
              <div class="home-ticker-pic ui-lazyLoad-pic" v-lazy :data-src="item.poster"></div>
              <div class="home-ticket-watch">
                <span class="cfff">{{ item.wantWatchNum > 10000 ? parseInt(item.wantWatchNum / 10000) + '万': item.wantWatchNum}}</span>
                <i></i>
              </div>  
              <div class="home-ticket-info">
                <p class="fs28 ui-ellipsis">{{item.properName}}</p>
                <div class="home-ticket-price">
                  <strong>￥{{item.salePrice}}</strong>
                  <span class="c9">起</span>
                </div>  
              </div>  
            </div>  
            <div class="home-ticket-item-more">
              <div class="home-ticket-item-more-wrapper">
                <div class="home-ticket-item-dot"><span></span><span></span><span></span></div>
                <p class="c3">查看更多</p>
              </div>  
            </div>
          </div>  
        </div>   
        <div class="home-hot-title">
          <h3>折扣专区</h3>
          <div class="home-title-all">
            <p class="fs28 c9">全部</p>
            <div class="ui-right-arrow"></div>
          </div>  
        </div> 
        <div class="home-ticket">
          <div class="home-ticket-wrapper" id="discount-ticket-wrapper">
            <div class="home-ticket-item" v-for="item in discountTicket">
              <div class="home-ticker-pic ui-lazyLoad-pic" v-lazy :data-src="item.poster"></div>  
              <div class="home-ticket-watch">
                <span class="cfff">{{ item.wantWatchNum > 10000 ? parseInt(item.wantWatchNum / 10000) + '万': item.wantWatchNum}}</span>
                <i></i>
              </div>  
              <div class="home-ticket-info">
                <p class="fs28 ui-ellipsis">{{item.properName}}</p>
                <div class="home-ticket-price">
                  <strong>￥{{item.salePrice}}</strong>
                  <span class="c9">起</span>
                </div>  
              </div>  
            </div>
            <div class="home-ticket-item-more">
              <div class="home-ticket-item-more-wrapper">
                <div class="home-ticket-item-dot"><span></span><span></span><span></span></div>
                <p class="c3">查看更多</p>
              </div>  
            </div>
          </div>  
        </div>
      </div> 
      <div class="home-advert ui-lazyLoad-pic">
        <img src="https://img.piaoniu.com/banner/b5cbe1866115f85b91f3eca09dcbe1d103d92a5b.jpg"/>
      </div> 
      <div class="home-advert-more">
        <p class="fs28">更多精彩内容待你发现</p>
        <div class="ui-right-arrow"></div>
      </div> 
      <div class="home-guess-like" id="guress-like-scroll">
        <div class="home-guess-like-title">
          <h3>猜你喜欢</h3>
        </div>
        <div class="home-guress-list">
          <div class="home-guress-item" v-for="item in list" v-if="list && list.length">
            <div class="home-guress-item-pic ui-lazyLoad-pic" v-lazy :data-src="item.recommendContent.poster"></div>  
            <div class="home-guress-item-info ui-bottom-line">
              <h3 class="c3 fs30 ui-ellipsis">[上海]{{item.recommendContent.properName}}</h3>
              <div class="home-guress-item-times c9 ui-ellipsis">
                <span>{{item.recommendContent.timeRange}}</span>
                <strong>|</strong>
                <span>{{item.recommendContent.venueName}}</span>
              </div>
              <div class="home-guress-item-score">
                <span class="c9">{{item.recommendContent.rank ? '评分' : '暂无评分'}}</span><strong>{{item.recommendContent.rank}}</strong>
              </div> 
              <div class="home-gress-item-price">
                <strong>{{item.recommendContent.lowPrice}}</strong><span class="c9">元起</span>
              </div>
              <div class="home-gress-item-des" v-if="item.recommendContent.desc">
                <p class="c9">{{item.recommendContent.desc}}</p>
              </div>  
            </div>  
          </div>  
        </div>
      </div>
      <div class="home-pageLoading" v-show="showLoading">
        <PageLoading :showLoading="showLoading"></PageLoading>   
      </div>     
    </div>   
  </div>
</template>

<script type="text/javascript">

import Banner from './banner.vue'
import PageLoading from '@/components/common/pageLoading.vue'
import DownloadApp from '@/components/downloadApp/index.vue'
import * as Model from '@/model/index'

const { navList, bannerList, operating, hotTicket, discountTicket } = window.__NUXT__

export default {
  data () {
    return {
      navList,
      bannerList,
      operating,
      hotTicket,
      discountTicket,
      pageView: true,
      list: [],
      showLoading: true,
      isScrollLoad: true,
      pageIndex: 1,
      pageTotal: 0
    }
  },
  components: {
    Banner,
    PageLoading,
    DownloadApp
  },
  methods: {
    loadImg (event) {
      event.currentTarget.style.backgroundColor = '#fff'
    },
    pageAction (url) {
      location.href = url
    },
    getRecommendsList () {
      const { pageIndex } = this
      Model.getRecommendsList({
        type: 'GET',
        data: {
          pageIndex,
          pageSize: 10
        }
      }).then((result) => {
        const data = result.data
        if (result && data.length){
          if (pageIndex > 1) {
            this.isScrollLoad = true
            this.list = this.list.concat(data || [])
          } else {
            this.list = data || []
          }
          this.pageTotal = result.totalNum
        }
        if (pageIndex == Math.ceil(result.totalNum / result.pageSize) || !data.length) {
          this.showLoading = false
        }
      })
    },
    /**
    * 获取猜你喜欢列表
    */
    scrollLoadList () {
      const winHeight = window.innerHeight 
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const scrollViewHeight = document.querySelector('.scroll-view-wrapper').offsetHeight - 50
      const realFunc = () => {
        if (winHeight + scrollTop >= scrollViewHeight && this.list.length < this.pageTotal) {
          this.pageIndex += 1
          this.getRecommendsList()
        } else {
          this.isScrollLoad = true
        }
      }
      if (this.isScrollLoad) {
        this.isScrollLoad = false
        this.timer = window.requestAnimationFrame(realFunc)
      }
    }
  },
  created () {
    this.getRecommendsList()
    window.addEventListener('scroll', this.scrollLoadList, utils.isPassive() ? {passive: true, capture: true} : true)
  },
  beforeDestroy () {
    window.cancelAnimationFrame(this.timer)
    window.removeEventListener('scroll', this.scrollLoadList, utils.isPassive() ? {passive: true, capture: true} : true)
  }
}
</script>


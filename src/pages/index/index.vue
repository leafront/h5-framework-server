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
          <i></i>
          <span class="c9 fs30">搜索明星、演出、场馆</span>
        </div>
        <div class="top-bar-user" @click="pageAction('/user/personal')">
          <i class="ui-lazyLoad-bgcolor" v-skeleton="'imgPath/static/img/home_sprite.png?v=201911231702'"></i>
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
            <p class="fs24 c9">全部</p>
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


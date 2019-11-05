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
          <i></i>
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
    window.addEventListener('scroll', this.scrollLoadList, utils.isPassive() ? {passive: true} : false)
  },
  beforeDestroy () {
    window.cancelAnimationFrame(this.timer)
    window.removeEventListener('scroll', this.scrollLoadList, utils.isPassive() ? {passive: true} : false)
  }
}
</script>

<style lang="scss">
body{
  background: #fff;
}
.home-pageLoading{
  padding-top: .12rem;
}
.home-advert{
  margin: .64rem .28rem .16rem;
  img{
    width: 100%;
    height: 1.8rem;
  }
}
.home-gress-item-des{
  padding: .18rem 0;
  border-top: .01rem solid #e0e0e0;
}
.home-guress-item{
  display: flex;
  justify-content: space-between;
  &:last-child{
    .home-guress-item-info{
      border-bottom: 0;
    }
  }
}
.home-guress-item-pic{
  width: 1.5rem;
  height: 2rem;
}
.home-guress-item-info{
  width: 5.06rem;
  h3{
    font-weight: 600;
  }
}
.home-gress-item-price{
  padding-bottom: .2rem;
  strong{
    font-size: .36rem;
    color: #ff2661;
    padding-right: .08rem;
  }
}
.home-guress-item-times{
  padding-top: .18rem;
  strong{
    padding: 0 .1rem;
  }
}
.home-guress-item-score{
  padding-top: .12rem;
  padding-bottom: .12rem;
  strong{
    color: #ffb02e;
    font-weight: 700;
    padding-left: .1rem;
  }
}
.home-guess-like-title{
  h3{
    font-size: .36rem;
    color: #565656;
  }
}
.home-guess-like{
  padding: .68rem .3rem .3rem;
}
.home-guress-list{
  
}
.home-guress-item{
  padding-top: .3rem;
}
.home-advert-more{
  display: flex;
  align-items: center;
  height: .8rem;
  justify-content: center;
  margin: .48rem .28rem 0;
  border: .01rem solid #f5f5f5;
  border-radius: .08rem;
  p{
    color: #262626;
  }
  .ui-right-arrow{
    margin-left: .1rem;
  }
}
.home-ticket-info{
  p{
    padding-top: .14rem;
    padding-bottom: .06rem;
    color: #262626;
  }
}
.home-ticket-price{
  display: flex;
  strong{
    color: #ff2661;
  }
  span{
    transform: scale(.8);
    transform-origin: left bottom;
    margin-left: .04rem;
  }
}
.home-ticket-item-more{
  width: 2.32rem;
  flex-shrink: 0;
  padding-right: .28rem;
}
.home-ticket-item-more-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eaebee;
  height: 2.74rem;
}
.home-ticket-item-dot{
  display: flex;
  padding-bottom: .1rem;
  span{
    border-radius: 50%;
    width: .18rem;
    height: .18rem;
    background: #bebfc4;
    margin-right: .1rem;
    &:last-child{
      margin-right: 0;
    }
  }
}
.home-ticket-wrapper{
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  padding: .18rem .28rem .3rem;
  transform:translateY(.3rem);
  margin-top: -.48rem;
  -webkit-overflow-scrolling: touch;
  .home-ticket-item{
    margin-right: .2rem;
    flex-shrink:0;
    margin-right: .2rem;
    width: 2.04rem;
    position: relative;
  }
}
.home-ticket-watch{
  background: rgba(0,0,0,.55);
  position: absolute;
  left: 0;
  top: 0;
  width: .8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .05rem 0;
}
.home-ticker-pic{
  height: 2.74rem;
  background-size: cover;
}
.home-ticket{
  overflow: hidden;
}
.home-hot-title{
  padding: 0 .28rem .32rem;
  margin-top: .64rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3{
    color: #565656;
    font-size: .36rem;
    font-weight: 700;
  }
}
.home-title-all{
  display: flex;
  .ui-right-arrow{
    margin-left: .05rem;
  }
}
.home-server{
  margin: .4rem .32rem 0;
  padding: 0 .16rem;
  height: .64rem;
  background: hsla(0,0%,96%,.53);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: .04rem;
}
.home-server-item{
  display: flex;
  span{
    padding: 0 .2rem;
    position: relative;
    &:after{
      content: '';
      display: block;
      position: absolute;
      top: .04rem;
      right: 0;
      width: .02rem;
      height: .24rem;
      background: #e6e6e6;
    }
    &:last-child{
      padding-right: 0;
      &:after{
        display: none;
      }
    }
  }
}
.top-bar {
  height: .88rem;
  display: flex;
}
.top-bar-city {
  padding: 0 .32rem;
  height: 100%;
  display: flex;
  align-items: center;
  span{
    color: #262626;
  }
  i {
    display: block;
    width: .12rem;
    height: .12rem;
    border-left: .02rem solid #262626;
    border-bottom: .02rem solid #262626;
    transform: rotate(-45deg);
    transform-origin: center center;
    position: relative;
    top: -.03rem;
    margin-left: .12rem;
  }
}
.home-operating{
  padding: .44rem .32rem 0;
  display: flex;
  justify-content: space-between;
}
.home-operating-item{
  width: 48%;
  height: 1.36rem;
  box-shadow: 0 .04rem .12rem 0 rgba(0,0,0,.07);
  border-radius: .12rem;
  padding-left: .24rem;
  display: flex;
  justify-content: space-between;
}
.operating-item-txt{
  padding-top: .16rem;
}
.operating-item-pic{
  width: 1.6rem;
  height: 1.18rem;
  img {
    width:100%;
    height: 100%;
  }
}
.operating-item-title{
  width: 1.6rem;
  height: .28rem;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: .07rem;
}
.top-bar-search{
  margin: .1rem 0;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  padding-left: .3rem;
  flex: 1;
  border-radius: .32rem;
  i{
    width: .34rem;
    height: .34rem;
    background: url(/static/img/home_sprite.png?v=version) no-repeat -.49rem -.11rem;
    background-size: 2rem auto;
  }
  span{
    padding-left: .1rem;
  }
}
.top-bar-user{
  width: 1.14rem;
  display: flex;
  align-items: center;
  justify-content: center;
  i{
    width: .38rem;
    height: .41rem;
    background: url(/static/img/home_sprite.png?v=version) .02rem -.04rem no-repeat;
    background-size: 2rem auto;
  }
}
.home-banner {
  padding: .3rem .3rem 0;
}
.home-banner-pic {
  height: 2.08rem;
}
.home-nav {
  padding: 0 .32rem;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
}
.home-nav-item {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: .44rem;
  .home-nav-item-pic{
    width: .68rem;
    height: .68rem;
    border-radius: 50%;
    position: relative;
    img{
      width: 100%;
      height: 100%;
    }
  }
  p{
    margin-top: .2rem;
  }
}
</style>

<template>  
  <div class="page-view" id="app">
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
              <div class="home-ticker-pic ui-lazyLoad-pic" :style="{'backgroundImage': 'url('+item.poster+')','backgroundSize': '100% auto'}"></div>
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
        <div class="home-ticket" v-if="defer(10)">
          <div class="home-ticket-wrapper" id="discount-ticket-wrapper">
            <div class="home-ticket-item" v-for="item in discountTicket">
              <div class="home-ticker-pic ui-lazyLoad-pic" :style="{'backgroundImage': 'url('+item.poster+')','backgroundSize': '100% auto'}"></div>  
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
      <div class="home-advert ui-lazyLoad-pic" v-if="defer(10)">
        <img src="https://img.piaoniu.com/banner/b5cbe1866115f85b91f3eca09dcbe1d103d92a5b.jpg"/>
      </div> 
      <div class="home-advert-more" v-if="defer(10)">
        <p class="fs28">更多精彩内容待你发现</p>
        <div class="ui-right-arrow"></div>
      </div>
      <div class="home-guess-like" v-if="defer(10)">
        <div class="home-guess-like-title">
          <h3>猜你喜欢</h3>
        </div>
        <List></List>   
      </div>    
    </div>   
  </div>
</template>

<script type="text/javascript">
  import Banner from './banner.vue'
  import DownloadApp from '@/components/downloadApp/index.vue'
  import List from './list.vue'

  const { navList, bannerList, operating, hotTicket, discountTicket } = window.__NUXT__

  export default {
    data () {
      return {
        navList: Object.freeze(navList),
        bannerList: bannerList,
        operating: Object.freeze(operating),
        hotTicket: Object.freeze(hotTicket),
        discountTicket: Object.freeze(discountTicket)
      }
    },
    components: {
      Banner,
      DownloadApp,
      List
    },
    mixins: [
      defer()
    ],
    methods: {
      loadImg (event) {
        event.currentTarget.style.backgroundColor = '#fff'
      },
      pageAction (url) {
        location.href = url
      }
    }
  }
</script>

<style src="../../styles/swiper/index.scss" lang="scss">
</style>
<style lang="scss">
.home-advert{
  margin: .64rem .28rem .16rem;
  img{
    width: 100%;
    height: 1.8rem;
  }
}
.home-guess-like{
  padding: .68rem .3rem .3rem;
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
    margin-top: .01rem;
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
  .icon{
    width: .34rem;
    height: .34rem;
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
  .icon{
    width: .4rem;
    height: .4rem;
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


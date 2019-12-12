<template>
  <div class="pageView" id="app">
    <Header :title="title"></Header>
    <div class="scroll-view-wrapper">
      <div class="personal-info-wrapper">
        <div class="personal-info">
          <div class="personal-info-txt" @click="pageAction">
            <div class="personal-info-img"></div>
            <span class="cfff">登录</span>
          </div> 
          <div class="personal-info-center">
            <span class="cfff">个人主页</span>
            <div class="ui-right-arrow"></div>
          </div>  
        </div>
        <div class="personal-menu cfff">
          <div class="personal-menu-item">
            <span class="fs30">0</span>
            <i>想看</i>
          </div>  
          <div class="personal-menu-item">
            <span class="fs30">0</span>
            <i>评论</i>
          </div>  
          <div class="personal-menu-item">
            <span class="fs30">0</span>
            <i>关注</i>
          </div> 
          <div class="personal-menu-item">
            <span class="fs30">0</span>
            <i>粉丝</i>
          </div> 
        </div>  
      </div>  
      <div class="personal-order-title p30 bgfff">
        <strong class="fs32 c262626">我的订单</strong>
        <div class="personal-order-arrow">
          <i class="c9 fs28">查看全部订单</i>
          <div class="personal-ui-right-arrow ui-right-arrow">
          </div>  
        </div>  
      </div>  
      <div class="personal-order-status bgfff">
        <div class="personal-order-status-item">
          <i class="icon1 ui-lazyLoad-pic" v-skeleton="'imgPath/static/img/order_status_icon.png?v=201911231702'"></i>
          <span>待付款</span>
        </div>
        <div class="personal-order-status-item">
          <i class="icon2 ui-lazyLoad-bgcolor" v-skeleton="'imgPath/static/img/order_status_icon.png?v=201911231702'"></i>
          <span>待发货</span>
        </div> 
        <div class="personal-order-status-item">
          <i class="icon3 ui-lazyLoad-bgcolor" v-skeleton="'imgPath/static/img/order_status_icon.png?v=201911231702'"></i>
          <span>待收货</span>
        </div>   
      </div>
      <div class="personal-discount mt20 bgfff">
        <div class="personal-discount-item">
          <i class="fs32">0</i>
          <span>优惠券</span>
        </div>  
        <div class="personal-discount-item">
          <i class="fs32">0</i>
          <span>礼品卡</span>
        </div> 
      </div>
      <div class="personal-welfare-title p30 bgfff">
        <span class="fs32 c262626">我的福利</span>
      </div>
      <div class="personal-invite bgfff">
        <div class="personal-invite-item">
          <i class="icon1 ui-lazyLoad-bgcolor"  v-skeleton="'imgPath/static/img/user_discount_icon.png?v=201911271618'"></i>
          <div class="personal-invite-info">
            <span class="c262626 fs28">邀请好友</span>
            <p class="c9 fs22">返10元现金</p>
          </div>
        </div>  
        <div class="personal-invite-item">
          <i class="icon2 ui-lazyLoad-bgcolor"  v-skeleton="'imgPath/static/img/user_discount_icon.png?v=201911271618'"></i>
          <div class="personal-invite-info">
            <span class="c262626 fs28">圈圈俱乐部</span>
            <p class="c9 fs22">达人专属奖励</p>
          </div>  
        </div>  
      </div>    
      <div class="personal-nav bgfff">
        <div class="personal-nav-item p30">
          <span class="fs28 c262626">地址管理</span>
          <div class="personal-ui-right-arrow ui-right-arrow"></div>  
        </div> 
        <div class="personal-nav-item p30">
          <span class="fs28 c262626">帮助与客服</span>
          <div class="personal-ui-right-arrow ui-right-arrow"></div>  
        </div> 
        <div class="personal-nav-item p30">
          <span class="fs28 c262626">卖家招募</span>
          <div class="personal-ui-right-arrow ui-right-arrow"></div>  
        </div>
        <div class="personal-nav-item p30">
          <span class="fs28 c262626">关于我们</span>
          <div class="personal-ui-right-arrow ui-right-arrow"></div>  
        </div>
        <div class="personal-nav-item p30">
          <span class="fs28 c262626">联系我们</span>
          <div class="personal-ui-right-arrow ui-right-arrow"></div>  
        </div>
      </div>
      <div class="personal-logout">
        <span class="fs32 cfff">退出登录</span>
      </div>  
    </div>  
  </div>   
</template> 

<style lang="scss">
.personal-logout{
  height: .88rem;
  color: #ff2661;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: .4rem;
  background: #ff2661;
}
.personal-nav{
  margin-top: .2rem;
}
.personal-nav-item{
  height: .88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: .01rem solid #ddd;
  &:last-child{
    border-bottom: 0;
  }
}
.personal-invite{
  display: flex;
  height: 1.58rem;
  .personal-invite-item{
    flex: 1;
    display: flex;
    align-items: center;
    i{
      width: 1rem;
      height: 1rem;
      margin-left: .3rem;
      background-size: 2.26rem auto;
      border-radius: 50%;
      &.icon1{
        background-position: -.04rem -.05rem;
      }
      &.icon2{
        background-position: -1.16rem -.07rem;
      }
    }
  }
  .personal-invite-info{
    padding-left: .3rem;
    p{
      padding-top: .1rem;
    }
  }
}
.personal-welfare-title{
  height: .78rem;
  display: flex;
  align-items: center;
  margin-top: .2rem;
  border-bottom: .01rem solid #ddd;
}
.personal-discount{
  display: flex;
  height: 1.4rem;
  .personal-discount-item{
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    i{
      color: #ff2661;
      padding-bottom: .15rem;
    }
  }
}
.personal-ui-right-arrow {
  width: .24rem;
  height: .32rem
}
.personal-ui-right-arrow:before,.personal-ui-right-arrow:after {
  width: .18rem;
  height: .02rem;
}
.scroll-view-wrapper{
  background: #f6f7f9;
}
.personal-order-title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: .9rem;
  border-bottom: .01rem solid #ddd;
}
.personal-menu{
  height: 1rem;
  display: flex;
  align-items: center;
  .personal-menu-item{
    flex: 1;
    display: flex;  
    flex-direction: column;
    align-items: center;
  }
}
.personal-info-wrapper{
  background: linear-gradient(270deg, #ff5aa5 0%, #ff2661 100%);
}
.personal-info{
  padding: .66rem 0 .66rem .3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.personal-info-img{
  background: url(imgPath/static/img/user_pic.png?v=201911231702) #f0f0f0;
  width: 1.12rem;
  height: 1.12rem;
  background-size: 1.12rem auto;
  border-radius: 50%;
}
.personal-info-txt{
  display: flex;
  span{
    padding-top: .12rem;
    font-size: .36rem;
    padding-left: .36rem;
  }
}
.personal-info-center{
  width: 1.6rem;
  height: .64rem;
  background: rgba(0, 0, 0, 0.13);
  border-top-left-radius: .32rem;
  border-bottom-left-radius: .32rem;
  padding-left: .25rem;
  display: flex;
  align-items: center;
  .ui-right-arrow{
    margin-left: .05rem;
    &:after,&:before{
      background: #fff;
    }
  }
}
.personal-order-arrow{
  display: flex;
  align-items: center;
  i{
    padding-right: .1rem;
    padding-top: .03rem;
  }
}
.personal-order-status{
  display: flex;
  height: 1.36rem;
  .personal-order-status-item{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    i{
      width: .48rem;
      height: .48rem;
      background-size: 1.54rem auto;
      margin-bottom: .15rem;
      &.icon1{
        background-position: -.01rem 0;
      }
      &.icon2{
         background-position: -.53rem -.05rem;
      }
      &.icon3{
         background-position: -1.05rem -.04rem;
      }
    }

  }
}
</style>

<script type="text/javascript">

  import Header from '@/components/header/index.vue'
  
  export default {
    data () {
      return {
        title: '个人中心',
        scrollTop: 0
      }
    },
    components: {
      Header
    },
    methods: {
      pageAction () {
        location.href = '/user/login'
      }
    }
  }
</script>  

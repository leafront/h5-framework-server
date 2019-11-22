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
            <i class="arrow-left"></i>
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
          <div class="ui-right-arrow">
          </div>  
        </div>  
      </div>  
      <div class="personal-order-status bgfff">
        <div class="personal-order-status-item">
          <i class="icon1"></i>
          <span>待付款</span>
        </div>
        <div class="personal-order-status-item">
          <i class="icon2"></i>
          <span>待发货</span>
        </div> 
        <div class="personal-order-status-item">
          <i class="icon3"></i>
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
          <i class="icon1"></i>
          <div class="personal-invite-info">
            <span class="c262626 fs28">邀请好友</span>
            <p class="c9 fs22">返10元现金</p>
          </div>
        </div>  
        <div class="personal-invite-item">
          <i class="icon2"></i>
          <div class="personal-invite-info">
            <span class="c262626 fs28">圈圈俱乐部</span>
            <p class="c9 fs22">达人专属奖励</p>
          </div>  
        </div>  
      </div>    
      <div class="personal-nav bgfff">
        <div class="personal-nav-item p30">
          <span class="fs28 c262626">地址管理</span>
          <div class="ui-right-arrow"></div>  
        </div> 
        <div class="personal-nav-item p30">
          <span class="fs28 c262626">帮助与客服</span>
          <div class="ui-right-arrow"></div>  
        </div> 
        <div class="personal-nav-item p30">
          <span class="fs28 c262626">卖家招募</span>
          <div class="ui-right-arrow"></div>  
        </div>
        <div class="personal-nav-item p30">
          <span class="fs28 c262626">关于我们</span>
          <div class="ui-right-arrow"></div>  
        </div>
        <div class="personal-nav-item p30">
          <span class="fs28 c262626">联系我们</span>
          <div class="ui-right-arrow"></div>  
        </div>
      </div>
      <div class="personal-logout">
        <span class="fs32 cfff">退出登录</span>
      </div>  
    </div>  
  </div>   
</template> 

<script type="text/javascript">

import Header from '@/components/header/index.vue' 

export default {
  data () {
    return {
      title: '个人中心'
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

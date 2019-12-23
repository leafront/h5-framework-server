<template>
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
  	<div class="home-pageLoading" v-show="showLoading">
    	<PageLoading :showLoading="showLoading"></PageLoading>   
  	</div> 
	</div>
</template>

<style lang="scss">
	.home-pageLoading{
	  padding-top: .12rem;
	}
	.home-gress-item-des{
  padding: .18rem 0;
  border-top: .01rem solid #e0e0e0;
}
.home-guress-item{
  display: flex;
  justify-content: space-between;
  padding-top: .3rem;
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
</style>

<script type="text/javascript">
	import utils from 'utils'
	import PageLoading from '@/components/common/pageLoading.vue'
	import * as Model from '@/model/index'

	export default {
		data () {
			return {
				list: [],
	      showLoading: true,
	      isScrollLoad: true,
	      pageIndex: 1,
	      pageTotal: 0
			}
		},
		components: {
			PageLoading
		},
		methods: {
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
	      const scrollTop = document.scrollingElement.scrollTop
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
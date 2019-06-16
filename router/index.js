var router = require('koa-router')()
const {
  delay
} = require('../common/index')

router.get('/', async (ctx,next) => {
	await delay(120)
	await ctx.render('server',{
		data: {
			navList: [{
			    "name": "演唱会",
			    "poster": "http://assets.piaoniu.com/home/icons/category-live-large.png",
			    "schema": "piaoniu://category_home?categoryId=1"
			  },
			  {
			    "name": "话剧歌剧",
			    "poster": "http://assets.piaoniu.com/home/icons/category-drama-large.png",
			    "schema": "piaoniu://category_home?categoryId=2"
			  },
			  {
			    "name": "休闲展览",
			    "poster": "http://assets.piaoniu.com/home/icons/category-exibition-large.png",
			    "schema": "piaoniu://category_home?categoryId=5"
			  },
			  {
			    "name": "体育赛事",
			    "poster": "http://assets.piaoniu.com/home/icons/category-sports-large.png",
			    "schema": "piaoniu://category_home?categoryId=8"
			  },
			  {
			    "name": "音乐会",
			    "poster": "http://assets.piaoniu.com/home/icons/category-concert-large.png",
			    "schema": "piaoniu://category_home?categoryId=3"
			  },
			  {
			    "name": "儿童亲子",
			    "poster": "http://assets.piaoniu.com/home/icons/category-child-small-v2.png",
			    "schema": "piaoniu://category_home?categoryId=4"
			  },
			  {
			    "name": "戏曲综艺",
			    "poster": "http://assets.piaoniu.com/home/icons/category-xiqu-small-v2.png",
			    "schema": "piaoniu://category_home?categoryId=7"
			  },
			  {
			    "name": "舞蹈芭蕾",
			    "poster": "http://assets.piaoniu.com/home/icons/category-dance-small.png",
			    "schema": "piaoniu://category_home?categoryId=6"
			  },
			  {
			    "name": "旅游玩乐",
			    "poster": "http://assets.piaoniu.com/home/icons/category-travel-small.png",
			    "schema": "piaoniu://category_home?categoryId=9"
			  },
			  {
			    "name": "更多精彩",
			    "poster": "http://assets.piaoniu.com/home/icons/category-play-small-v2.png",
			    "schema": "piaoniu://category_home"
			  }
			],
			bannerList: [{
		    "logBannerId": 29207,
		    "logBannerType": "场景导购",
		    "poster": "https://img.piaoniu.com/misc/bc1a796db62f09eaf7f5b95bf8c5f6cac2a26bc9.png",
		    "url": "https://m.piaoniu.com/campaign/scene-guide/?themeId=12&channel=zn_banner_sh_ztjh_12"
			  },
			  {
			    "logBannerId": 29001,
			    "logBannerType": "链接",
			    "poster": "https://img.piaoniu.com/misc/232469fb030b95d717a593902c8c30d11bb1f450.jpg",
			    "url": "/activity/91114?channel=zn_banner_sh_91114"
			  },
			  {
			    "logBannerId": 29005,
			    "logBannerType": "链接",
			    "poster": "https://img.piaoniu.com/misc/98635779987f566cdbd71762525d314922d55271.jpg",
			    "url": "/activity/93848?channel=zn_banner_sh_93848"
			  },
			  {
			    "logBannerId": 29432,
			    "logBannerType": "链接",
			    "poster": "https://img.piaoniu.com/misc/ef1a4f2428a7cd794be3a6faf7849d5784f21b12.png",
			    "url": "/activity/71174?channel=zn_banner_yc_71174"
			  },
			  {
			    "logBannerId": 29436,
			    "logBannerType": "链接",
			    "poster": "https://img.piaoniu.com/misc/a5b62793514ac150b1498df3168694e70353c3d4.png",
			    "url": "/activity/85613?channel=zn_banner_sh_85613"
			  },
			  {
			    "logBannerId": 29510,
			    "logBannerType": "链接",
			    "poster": "https://img.piaoniu.com/misc/5585dcd7f05ea617eb4adaf5ed99f5ae118fa3b3.png",
			    "url": "/activity/91319?channel=zn_banner_sh_91319"
			  },
			  {
			    "logBannerId": 29522,
			    "logBannerType": "链接",
			    "poster": "https://img.piaoniu.com/misc/e24df0d7cbcae0cd2a18e2f20fb91af9a7dcb5f4.png",
			    "url": "/activity/96356?channel=zn_banner_sh_96356"
			  }
			]
		}
	})
})

module.exports = router
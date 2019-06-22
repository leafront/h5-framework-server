var router = require('koa-router')()
const {
  delay
} = require('../common/index')

router.get('/', async (ctx,next) => {
	await delay(200)
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
		  }, {
		    "logBannerId": 29001,
		    "logBannerType": "链接",
		    "poster": "https://img.piaoniu.com/misc/232469fb030b95d717a593902c8c30d11bb1f450.jpg",
		    "url": "/activity/91114?channel=zn_banner_sh_91114"
		  }, {
		    "logBannerId": 29005,
		    "logBannerType": "链接",
		    "poster": "https://img.piaoniu.com/misc/98635779987f566cdbd71762525d314922d55271.jpg",
		    "url": "/activity/93848?channel=zn_banner_sh_93848"
		  }, {
		    "logBannerId": 29432,
		    "logBannerType": "链接",
		    "poster": "https://img.piaoniu.com/misc/ef1a4f2428a7cd794be3a6faf7849d5784f21b12.png",
		    "url": "/activity/71174?channel=zn_banner_yc_71174"
		  }, {
		    "logBannerId": 29436,
		    "logBannerType": "链接",
		    "poster": "https://img.piaoniu.com/misc/a5b62793514ac150b1498df3168694e70353c3d4.png",
		    "url": "/activity/85613?channel=zn_banner_sh_85613"
		  }, {
		    "logBannerId": 29510,
		    "logBannerType": "链接",
		    "poster": "https://img.piaoniu.com/misc/5585dcd7f05ea617eb4adaf5ed99f5ae118fa3b3.png",
		    "url": "/activity/91319?channel=zn_banner_sh_91319"
		  }, {
		    "logBannerId": 29522,
		    "logBannerType": "链接",
		    "poster": "https://img.piaoniu.com/misc/e24df0d7cbcae0cd2a18e2f20fb91af9a7dcb5f4.png",
		    "url": "/activity/96356?channel=zn_banner_sh_96356"
		  }],
			operating: [{
	      "logOpPositionId": 7983,
	      "title": "https://assets.piaoniu.com/home/op1-title-v2@3x.png",
	      "subTitle": "林俊杰0元看",
	      "poster": "https://img.piaoniu.com/misc/9d529c2a11bffb583d784edb5cf6532531bbcd4e.png",
	      "backgroundText": "https://assets.piaoniu.com/home/op1-bgtext@3x.png",
	      "schema": "https://m.piaoniu.com/taro/index.html?channel=zn_yyw_sh_bawangpiao"
	   	}, {
		      "logOpPositionId": 8370,
		      "title": "https://assets.piaoniu.com/home/op2-title@3x.png",
		      "subTitle": "限时限量抢",
		      "poster": "https://img.piaoniu.com/misc/5cb38fda616ebbccc7ef463f58b788d3526b96e7.png",
		      "backgroundText": "https://assets.piaoniu.com/home/op2-bgtext@3x.png",
		      "schema": "https://m.piaoniu.com/category-home.html?lowestPrice=0&highestPrice=150&channel=zn_yyw_sh_100"
		  }],
	  	hotTicket: [{
		    "id": 96356,
		    "wantWatchNum": 31291,
		    "poster": "https://img.piaoniu.com/poster/3300e87f8c596844bbb7cc9064f8a1d2bdef61a2.jpg",
		    "lowPrice": 42,
		    "properName": "中超联赛第14轮上海上港VS北京人和"
		  },
		  {
		    "id": 91043,
		    "wantWatchNum": 167531,
		    "poster": "https://img.piaoniu.com/poster/ffd545ee235ca221bb0421aac095b02d496b3675.jpg",
		    "lowPrice": 536,
		    "properName": "许巍上海演唱会"
		  },
		  {
		    "id": 92807,
		    "wantWatchNum": 22154,
		    "poster": "https://img.piaoniu.com/poster/a1d85e20cb96e611c28f2ab0b93534a530469a57.jpg",
		    "lowPrice": 56,
		    "properName": "第十五届中国国际动漫游戏博览会"
		  },
		  {
		    "id": 96865,
		    "wantWatchNum": 2912,
		    "poster": "https://img.piaoniu.com/poster/e7b7e5ee59b4f452b60cd417595c81e7101740bd.jpg",
		    "lowPrice": 30,
		    "properName": "炎夏之爱"
		  },
		  {
		    "id": 93848,
		    "wantWatchNum": 128218,
		    "poster": "https://img.piaoniu.com/poster/88867c5a9e0e471eb702bd645cd9ab5d03134d24.jpg",
		    "lowPrice": 402,
		    "properName": "林峯上海演唱会"
		  },
		  {
		    "id": 95534,
		    "wantWatchNum": 5375,
		    "poster": "https://img.piaoniu.com/poster/6e690575a32b1e4bc4f5f12def801d7847c7d51e.jpg",
		    "lowPrice": 3,
		    "properName": "中国超级跑车锦标赛上海站（纸质票）"
		  },
		  {
		    "id": 73692,
		    "wantWatchNum": 101608,
		    "poster": "https://img.piaoniu.com/poster/7a3d2989365d22fb74ec8ab972f215d4592c8d1a.jpg",
		    "lowPrice": 119,
		    "properName": "谋杀启事"
		  },
		  {
		    "id": 91114,
		    "wantWatchNum": 217767,
		    "poster": "https://img.piaoniu.com/poster/1f6bdc52bd97f5a3348342409868981b63b4cacb.jpg",
		    "lowPrice": 1133,
		    "properName": "许嵩上海演唱会"
		  },
		  {
		    "id": 88706,
		    "wantWatchNum": 101615,
		    "poster": "https://img.piaoniu.com/poster/c0d06e1380a2dc6533321421dcf36d34eb137e59.jpg",
		    "lowPrice": 147,
		    "properName": "白夜行"
		  },
		  {
		    "id": 91108,
		    "wantWatchNum": 21201,
		    "poster": "https://img.piaoniu.com/poster/65c25a16ace94570bd63f54236b4c7c7f47917df.jpg",
		    "lowPrice": 39,
		    "properName": "国家地理经典影像盛宴2.0"
		  }]
		}
	})
})

module.exports = router



















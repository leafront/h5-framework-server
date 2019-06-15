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
			]
		}
	})
})

module.exports = router
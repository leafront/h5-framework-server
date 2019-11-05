const router = require('koa-router')()
const {
  staticPath,
  imgPath
} = require('../config/index')
router.get('/personal', async (ctx,next) => {
  await ctx.render('user/personal',{
  	staticPath,
  	imgPath,
  	data: {

  	}
  })
})

module.exports = router
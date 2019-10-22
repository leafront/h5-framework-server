const router = require('koa-router')()
const {
  staticPath,
  hostPath,
  imgPath
} = require('../config/index')
router.get('/personal', async (ctx,next) => {
  await ctx.render('user/personal',{
  	staticPath,
  	hostPath,
  	imgPath,
  	data: {

  	}
  })
})

module.exports = router
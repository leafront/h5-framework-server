const router = require('koa-router')()
const {
  staticPath
} = require('../config/index')
router.get('/personal', async (ctx,next) => {
  await ctx.render('user/personal',{
  	staticPath,
  	data: {

  	}
  })
})

module.exports = router
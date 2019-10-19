const router = require('koa-router')()
const {
  staticPath,
  hostPath
} = require('../config/index')
router.get('/personal', async (ctx,next) => {
  await ctx.render('user/personal',{
  	staticPath,
  	hostPath,
  	data: {
  		
  	}
  })
})

module.exports = router
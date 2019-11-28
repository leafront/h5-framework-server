const router = require('koa-router')()
router.get('/personal', async (ctx, next) => {
  await ctx.render('user/personal',{
  })
})

router.get('/login', async (ctx, next) => {
  await ctx.render('user/login',{
   
  })
})

module.exports = router
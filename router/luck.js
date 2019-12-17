const router = require('koa-router')()
router.get('/draw', async (ctx, next) => {
  await ctx.render('luck/draw')
})
module.exports = router
const router = require('koa-router')()
const {
  staticPath,
  imgPath
} = require('../config/index')
router.get('/personal', async (ctx, next) => {
  await ctx.render('user/personal',{
    staticPath
  })
})

router.get('/login', async (ctx, next) => {
  await ctx.render('user/login',{
    staticPath
  })
})

module.exports = router
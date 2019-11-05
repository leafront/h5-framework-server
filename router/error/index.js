var router = require('koa-router')();

router.get('/404', async (ctx,next) => {

	await ctx.render('error/404')

})

router.get('/500', async (ctx,next) => {

	await ctx.render('error/500')


})

module.exports = router;

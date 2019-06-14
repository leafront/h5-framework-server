var koa = require('koa')
var app = new koa()
var server = require('koa-static')
var render = require('koa-ejs')
var Router = require('koa-router')
var koaBody = require('koa-body')
var views = require('koa-views')
var cors = require('koa2-cors')
var router = new Router()
var error = require('./router/error/index')
var index = require('./router/index')
app.use(koaBody())
//set ejs
app.use(views(__dirname + '/views',{
	extension:'html'
}))
app.use(async (ctx, next) => {
	try {
		await next();
		if (ctx.status == 404) {
			//ctx.redirect('/error/404?path='+ctx.url);
		}
	} catch (err) {
		console.log(err)
		if (err.statusCode == 403 || err.statusCode == 404) {
			//ctx.redirect('/error/404?path='+ctx.url);
		} else if (err.statusCode == 500) {
			//ctx.redirect('/error/500?path='+ctx.url);
		} else {
			//ctx.redirect('/error/500?path='+ctx.url);
		}
	}
})

router.use('/',index.routes())
router.use('/error',error.routes())
app.use(router.routes())
app.listen(3000);

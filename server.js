var koa = require('koa')
var app = new koa()
var server = require('koa-static')
var render = require('koa-ejs')
var Router = require('koa-router')
var path = require('path')
var router = new Router()
var error = require('./router/error/index')
var index = require('./router/index')
app.use(server(__dirname + '/public'))
//set ej
render(app, {
  root: path.join(__dirname,  process.env.NODE_ENV == 'production' ? 'views' : 'templates'),
  layout: false,
  viewExt: 'html',
  cache: false,
  debug: false
})
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

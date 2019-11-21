var koa = require('koa')
var app = new koa()
var server = require('koa-static')
var render = require('koa-ejs')
var Router = require('koa-router')
var path = require('path')
var conditional = require('koa-conditional-get')
var etag = require('koa-etag')
var router = new Router()
var error = require('./router/error/index')
var index = require('./router/index')
var user = require('./router/user')

app.use(conditional())
app.use(etag())
app.use(server(__dirname + '/public'))
//set ejs
render(app, {
  root: path.join(__dirname,  process.env.NODE_ENV == 'production' ? 'views' : 'templates'),
  layout: false,
  viewExt: 'html',
  cache: true,
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
router.use('/user', user.routes())
router.use('/error',error.routes())
app.use(router.routes())
app.listen(3000);

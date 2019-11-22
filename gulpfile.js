var gulp = require('gulp')
var sass = require('gulp-sass')
var replace = require('gulp-replace')
var htmlmin = require('gulp-htmlmin')
var autoprefixer = require('gulp-autoprefixer')
var inject = require('gulp-inject')

var time = process.env.time

var css = {
  "reset": "1.0.6/reset.css",
  "main": "1.0.6/main.css",
  "ui-toast": "1.0.6/ui-toast.css",
  "ui-showLoading": "1.0.6/ui-showLoading.css",
  "ui-dialog": "1.0.6/ui-dialog.css"
}

var js = {
  "vue": "2.6.10/index.js",
  "polyfill": "1.0.0/polyfill/index.js",
  "utils": "1.0.0/utils/index.js",
  "ajax": "1.0.1/ajax/index.js",
  "store": "1.0.0/store/index.js",
  "request": "1.0.0/request/index.js",
  "scale": "1.0.5/scale/index.js",
  "filter": "1.0.0/filter/index.js",
  "lazyLoad": "1.0.0/lazyLoad/index.js",
  "loading": "1.0.1/loading/index.js",
  "toast": "1.0.0/toast/index.js",
  "showModal": "1.0.0/showModal/index.js"
}

gulp.task('sass', function () {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(autoprefixer({
      overrideBrowserslist: [    
        "> 1%",
        "ios >= 7.1"
      ],
      cascade: false,
      remove: true
    }))
    .pipe(replace(/v=version\b/g, 'v=' + time))
    .pipe(replace(/imgPath\b/g, '//m.img.whqietu.com'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/static/css'))
})

gulp.task('inject:cssjs', function () {
  var list = ['index','user/personal','user/login']
  list.forEach((item) => {
    const dir = item.split('/').length > 1 ? item.split('/')[0] + '/' : ''
    console.log(dir,item)
    gulp.src(`./templates/${item}.html`)
      .pipe(
        inject(gulp.src([`./public/static/css/${item}.css`,`./public/static/js/${item}.js`]), {
          starttag: '<!-- inject:FileContent:{{ext}} -->',
          endtag: '<!-- endinject -->',
          transform: function (filePath, file) {
            if (filePath.slice(-4) === '.css'){
              return '<style>' + file.contents.toString('utf8') + '</style>'
            }
            if (filePath.slice(-3) === '.js'){
              return '<script type="text/javascript">\n' + file.contents.toString('utf8') + '</script>'
            }
          }
        })
      )
      .pipe(htmlmin({        
          removeComments: true,//清除HTML注释
          collapseWhitespace: true,//压缩HTML
          removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
          removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
          removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
          minifyJS: true,//压缩页面JS
          minifyCSS: true//压缩页面CSS
      }))
      .pipe(gulp.dest(`./views/${dir}`))
    })
})
gulp.task('cssjs:version', function () {
  return gulp.src('./templates/**/*.html')
    .pipe(replace(/1.0.5\/reset.css\b/g, css['reset']))
    .pipe(replace(/1.0.5\/main.css\b/g, css['main']))
    .pipe(replace(/1.0.5\/ui-toast.css\b/g, css['ui-toast']))
    .pipe(replace(/1.0.5\/ui-showLoading.css\b/g, css['ui-showLoading']))
    .pipe(replace(/1.0.5\/ui-dialog.css\b/g, css['ui-dialog']))
    .pipe(replace(/2.6.10\/index.js\b/g, js['vue']))
    .pipe(replace(/1.0.0\/polyfill\/index.js\b/g, js['polyfill']))
    .pipe(replace(/1.0.0\/utils\/index.js\b/g, js['utils']))
    .pipe(replace(/1.0.0\/ajax\/index.js\b/g, js['ajax']))
    .pipe(replace(/1.0.0\/store\/index.js\b/g, js['store']))
    .pipe(replace(/1.0.0\/request\/index.js\b/g, js['request']))
    .pipe(replace(/1.0.4\/scale\/index.js\b/g, js['scale']))
    .pipe(replace(/1.0.0\/filter\/index.js\b/g, js['filter']))
    .pipe(replace(/1.0.0\/lazyLoad\/index.js\b/g, js['lazyLoad']))
    .pipe(replace(/1.0.0\/loading\/index.js\b/g, js['loading']))
    .pipe(replace(/1.0.0\/toast\/index.js\b/g, js['toast']))
    .pipe(replace(/1.0.0\/showModal\/index.js\b/g, js['showModal']))
    .pipe(gulp.dest('./templates/'))
})

gulp.task('sw:version', function () {
  return gulp.src('./src/serviceWorker.js')
    .pipe(replace(/1.0.1\/reset.css\b/g, css['reset']))
    .pipe(replace(/1.0.1\/main.css\b/g, css['main']))
    .pipe(replace(/1.0.1\/ui-toast.css\b/g, css['ui-toast']))
    .pipe(replace(/1.0.1\/ui-showLoading.css\b/g, css['ui-showLoading']))
    .pipe(replace(/1.0.1\/ui-dialog.css\b/g, css['ui-dialog']))
    .pipe(replace(/2.6.10\/index.js\b/g, js['vue']))
    .pipe(replace(/1.0.0\/polyfill\/index.js\b/g, js['polyfill']))
    .pipe(replace(/1.0.0\/utils\/index.js\b/g, js['utils']))
    .pipe(replace(/1.0.0\/ajax\/index.js\b/g, js['ajax']))
    .pipe(replace(/1.0.0\/store\/index.js\b/g, js['store']))
    .pipe(replace(/1.0.0\/request\/index.js\b/g, js['request']))
    .pipe(replace(/1.0.4\/scale\/index.js\b/g, js['scale']))
    .pipe(replace(/1.0.0\/filter\/index.js\b/g, js['filter']))
    .pipe(replace(/1.0.0\/lazyLoad\/index.js\b/g, js['lazyLoad']))
    .pipe(replace(/1.0.0\/loading\/index.js\b/g, js['loading']))
    .pipe(replace(/1.0.0\/toast\/index.js\b/g, js['toast']))
    .pipe(replace(/1.0.0\/showModal\/index.js\b/g, js['showModal']))
    .pipe(gulp.dest('./src/'))
})
gulp.task('html', function () {
  return gulp.src('./templates/**/*.html')
    .pipe(replace(/v=version\b/g, 'v=' + time))
    .pipe(replace(/\/static\/js\b/g, '//m.static.whqietu.com/static/js'))
    .pipe(replace(/\/static\/img\b/g, '//m.img.whqietu.com/static/img'))
    .pipe(gulp.dest('./views/'))
})

gulp.task('sass:watch', function () {
  gulp.watch('./src/styles/**/*.scss', ['sass'])
})







var gulp = require('gulp')
var sass = require('gulp-sass')
var replace = require('gulp-replace')
var htmlmin = require('gulp-htmlmin')
var autoprefixer = require('gulp-autoprefixer')

var time = process.env.time

var css = {
  "reset": "1.0.0/reset.css",
  "main": "1.0.0/main.css",
  "ui-toast": "1.0.0/ui-toast.css",
  "ui-showLoading": "1.0.0/ui-showLoading.css",
  "ui-dialog": "1.0.0/ui-dialog.css"
}

var js = {
  "vue": "2.5.2/index.js",
  "polyfill": "1.0.0/polyfill/index.js",
  "utils": "1.0.0/utils/index.js",
  "ajax": "1.0.0/ajax/index.js",
  "store": "1.0.0/store/index.js",
  "request": "1.0.0/request/index.js",
  "scale": "1.0.0/scale/index.js",
  "filter": "1.0.0/filter/index.js",
  "lazyLoad": "1.0.0/lazyLoad/index.js",
  "loading": "1.0.0/loading/index.js",
  "toast": "1.0.0/loading/index.js",
  "showModal": "1.0.0/showModal/index.js"
}

gulp.task('sass', function () {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(autoprefixer({
      overrideBrowserslist: [    
        "> 1%",
        "not ie <= 12",
        "Android >= 4.4",
        "ios >= 6"
      ],
      cascade: false,
      remove: true
    }))
    .pipe(replace(/v=version\b/g, 'v=' + time))
    .pipe(replace(/\/static\b/g, '//m.img.whqietu.com/static'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/static/css'))
})
gulp.task('cssjs:version', function () {
  return gulp.src('./templates/**/*.html')
    .pipe(replace(/1.0.0\/reset.css\b/g, css['reset']))
    .pipe(replace(/1.0.0\/main.css\b/g, css['main']))
    .pipe(replace(/1.0.0\/ui-toast.css\b/g, css['ui-toast']))
    .pipe(replace(/1.0.0\/ui-showLoading.css\b/g, css['ui-showLoading']))
    .pipe(replace(/1.0.0\/ui-dialog.css\b/g, css['ui-dialog']))
    .pipe(replace(/2.5.2\/index.js\b/g, js['vue']))
    .pipe(replace(/1.0.0\/polyfill\/index.js\b/g, js['polyfill']))
    .pipe(replace(/1.0.0\/utils\/index.js\b/g, js['utils']))
    .pipe(replace(/1.0.0\/ajax\/index.js\b/g, js['ajax']))
    .pipe(replace(/1.0.0\/store\/index.js\b/g, js['store']))
    .pipe(replace(/1.0.0\/request\/index.js\b/g, js['request']))
    .pipe(replace(/1.0.0\/scale\/index.js\b/g, js['scale']))
    .pipe(replace(/1.0.0\/filter\/index.js\b/g, js['filter']))
    .pipe(replace(/1.0.0\/lazyLoad\/index.js\b/g, js['lazyLoad']))
    .pipe(replace(/1.0.0\/loading\/index.js\b/g, js['loading']))
    .pipe(replace(/1.0.0\/toast\/index.js\b/g, js['toast']))
    .pipe(replace(/1.0.0\/showModal\/index.js\b/g, js['showModal']))
    .pipe(gulp.dest('./templates/'))
})
gulp.task('html', function () {
  return gulp.src('./templates/**/*.html')
    .pipe(htmlmin({        
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    }))
    .pipe(replace(/v=version\b/g, 'v=' + time))
    .pipe(replace(/\/static\/js\b/g, '//m.static.whqietu.com/static/js'))
    .pipe(replace(/\/static\/img\b/g, '//m.img.whqietu.com/static/img'))
    .pipe(gulp.dest('./views/'))
})
gulp.task('default')






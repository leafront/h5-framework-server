var gulp = require('gulp')
var sass = require('gulp-sass')
var replace = require('gulp-replace')
var htmlmin = require('gulp-htmlmin')
var autoprefixer = require('gulp-autoprefixer')
var inject = require('gulp-inject')
var rev = require('gulp-rev-hash')
var banner = require('gulp-banner')
var config = require('./config/index')
var css = {
  "h5-framework": "h5-framework/"+config.css.framework+"/index.css"
}
var js = {
  "vue": "vue/"+config.js.vue+"/index.js",
  "h5-framework": "h5-framework/"+config.js.framework+"/index.js",
  "filter": "filter/"+config.js.filter+"/index.js",
  "lazyLoad": "lazyLoad/"+config.js.lazyLoad+"/index.js"
}

var comment = '/*!\n' +
  ` * h5-framework.css  v${config.css.framework} \n` +
  ` * Copyright(c) 2018-${new Date().getFullYear()} leafront \n` +
  ' * Released under the MIT License.\n' +
  ' */\n'

gulp.task('sass', function () {
  return gulp.src('./src/styles/h5-framework/index.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: [    
        "> 1%",
        "ios >= 7.1"
      ],
      cascade: false,
      remove: true
    }))
    .pipe(replace(/imgPath\b/g, '//m.img.whqietu.com'))
    .pipe(banner(comment))
    .pipe(gulp.dest('./public/static/css/h5-framework/' + config.css.framework))
})

gulp.task('html', function () {
  gulp.src(`./templates/**/*.html`)
    .pipe(rev({
      assetsDir: 'public'
    })) 
    .pipe(replace(/staticPath\b/g, '//m.static.whqietu.com'))  
    .pipe(replace(/\/static\b/g, '//m.static.whqietu.com/static'))
    .pipe(replace(/imgPath\b/g, '//m.img.whqietu.com/static')) 
    .pipe(replace(/\$imagPath\b/g, '//m.img.whqietu.com'))
    .pipe(replace(/cssVersion\b/g, config.css.framework)) 
    .pipe(replace(/vueVersion\b/g, config.js.vue)) 
    .pipe(replace(/jsVersion\b/g, config.js.framework)) 
    .pipe(replace(/filterVersion\b/g, config.js.filter))
    .pipe(replace(/lazyLoadVersion\b/g, config.js.lazyLoad))  
    .pipe(htmlmin({        
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: false,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: false, //删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    }))
    .pipe(gulp.dest(`./views/`))
})

gulp.task('sass:watch', function () {
  gulp.watch('./src/styles/**/*.scss', ['sass'])
})







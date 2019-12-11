var gulp = require('gulp')
var sass = require('gulp-sass')
var replace = require('gulp-replace')
var htmlmin = require('gulp-htmlmin')
var autoprefixer = require('gulp-autoprefixer')
var inject = require('gulp-inject')
var rev = require('gulp-rev-hash')
var banner = require('gulp-banner')

var cssVersion = '1.0.0'
var css = {
  "h5-framework": "h5-framework/"+cssVersion+"/index.css"
}

var js = {
  "vue": "vue/2.6.10/index.js",
  "h5-framework": "h5-framework/1.0.2/index.js",
  "filter": "filter/1.0.1/index.js",
  "lazyLoad": "lazyLoad/1.0.0/index.js"
}

var comment = '/*!\n' +
  ` * h5-framework.css  v${cssVersion} \n` +
  ` * Copyright(c) 2018-${new Date().getFullYear()} leafront \n` +
  ' * Released under the MIT License.\n' +
  ' */\n'
gulp.task('sass', function () {
  return gulp.src('./src/styles/h5-framework/index.scss')
    .pipe(autoprefixer({
      overrideBrowserslist: [    
        "> 1%",
        "ios >= 7.1"
      ],
      cascade: false,
      remove: true
    }))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  //.pipe(replace(/v=version\b/g, 'v=' + time))
    .pipe(replace(/imgPath\b/g, '//m.img.whqietu.com'))
    .pipe(banner(comment))
    .pipe(gulp.dest('./public/static/css/h5-framework/' + cssVersion))
})

gulp.task('inject:cssjs', function () {
  var list = ['index','user/personal','user/login']
  list.forEach((item) => {
    const arr = item.split('/')
    const dir = arr.length > 1 ? arr.slice(0, arr.length - 1).join('/') + '/' : ''
    gulp.src(`./templates/${item}.html`)
      .pipe(rev({
        assetsDir: 'public'
      }))
      //.pipe(replace(/v=version\b/g, 'v=' + time))  
      .pipe(replace(/staticPath\b/g, '//m.static.whqietu.com'))  
      .pipe(replace(/\/static\b/g, '//m.static.whqietu.com/static'))
      .pipe(replace(/imgPath\b/g, '//m.img.whqietu.com/static')) 
      .pipe(replace(/\$imagPath\b/g, '//m.img.whqietu.com')) 
      // .pipe(
      //   inject(gulp.src(`./public/static/css/${item}.css`), {
      //     starttag: '<!-- inject:FileContent:{{ext}} -->',
      //     endtag: '<!-- endinject -->',
      //     transform: function (filePath, file) {
      //       if (filePath.slice(-4) === '.css'){
      //         return '<style>' + file.contents.toString('utf8') + '</style>'
      //       }
      //       if (filePath.slice(-3) === '.js'){
      //         return '<script type="text/javascript">\n' + file.contents.toString('utf8') + '</script>'
      //       }
      //     }
      //   })
      // )
      .pipe(htmlmin({        
          removeComments: true,//清除HTML注释
          collapseWhitespace: true,//压缩HTML
          removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
          removeScriptTypeAttributes: false,//删除<script>的type="text/javascript"
          removeStyleLinkTypeAttributes: false, //删除<style>和<link>的type="text/css"
          minifyJS: true,//压缩页面JS
          minifyCSS: true//压缩页面CSS
      }))
      .pipe(gulp.dest(`./views/${dir}`))
    })
})
gulp.task('cssjs:version', function () {
  return gulp.src('./templates/**/*.html')
    .pipe(replace(/h5-framework\/1.0.0\/index.css\b/g, css['h5-framework']))
    .pipe(replace(/h5-framework\/1.0.2\/index.js\b/g, js['h5-framework']))
    .pipe(replace(/vue\/2.6.10\/index.js\b/g, js['vue']))
    .pipe(replace(/filter\/1.0.0\/index.js\b/g, js['filter']))
    .pipe(replace(/lazyLoad\/1.0.0\/index.js\b/g, js['lazyLoad']))
    .pipe(gulp.dest('./templates/'))
})

gulp.task('sass:watch', function () {
  gulp.watch('./src/styles/**/*.scss', ['sass'])
})







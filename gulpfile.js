var gulp = require('gulp')
var sass = require('gulp-sass')
var replace = require('gulp-replace')
var htmlmin = require('gulp-htmlmin')
var autoprefixer = require('gulp-autoprefixer')

var date = new Date()
var year = date.getFullYear()
var month = date.getMonth() + 1
var theDate = date.getDate()
var hours = date.getHours()
var minutes = date.getMinutes()
var seconds = date.getSeconds()

var dataString = [
  year,
  month >= 10 ? month :'0' + month,
  theDate >= 10 ? theDate :'0' + theDate,
  hours >= 10 ? hours : '0' + hours,
  minutes >= 10 ? minutes : '0' + minutes,
  seconds >= 10 ? seconds : '0' + seconds
].join('')

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
    .pipe(replace(/v=version\b/g, 'v=' + dataString))
    .pipe(replace(/\/static\b/g, 'https://img.whqietu.com/static'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/static/css'))
})

gulp.task('html', function () {
return gulp.src('./templates/**/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(replace(/v=version\b/g, 'v=' + dataString))
  .pipe(gulp.dest('./views/'))

})
gulp.task('default')






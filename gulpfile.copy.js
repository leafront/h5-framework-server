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

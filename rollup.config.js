import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs' 
import {uglify} from 'rollup-plugin-uglify'
import {minify} from 'uglify-js'
import vue from 'rollup-plugin-vue' 
import buble from 'rollup-plugin-buble'
import alias from 'rollup-plugin-alias'
import postcss from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace'
import autoprefixer from 'autoprefixer'
import path from 'path'

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

const pathName = 'public/static/js/'
const config = [{
  input: 'src/serviceWorker.js',
  output: {
    format: 'iife',
    file: 'public/serviceWorker.js'
  },
  plugins: [
    resolve(),
    babel({
      exclude: '**/node_modules/**'
    }),
    uglify({}, minify)
  ]
}]
const files = {
  '1.0.0/utils/index.js':'src/widget/utils.js',
  '1.0.1/polyfill/index.js': 'src/widget/polyfill.js',
  '1.0.0/ajax/index.js': 'src/widget/ajax.js',
  '1.0.0/store/index.js': 'src/widget/store.js',
  '1.0.0/request/index.js': 'src/widget/request.js',
  '1.0.0/validate/index.js': 'src/widget/validate.js',
  '1.0.0/filter/index.js': 'src/widget/filter.js',
  '1.0.0/loading/index.js': 'src/components/loading/index.js',
  '1.0.0/showModal/index.js': 'src/components/showModal/index.js',
  '1.0.0/toast/index.js': 'src/components/toast/index.js',
  '1.0.0/lazyLoad/index.js': 'src/components/lazyLoad/index.js',
  //'1.0.0/swiper/index.js': 'src/components/swiper/index.js',
 // '1.0.0/downloadApp/index.js': 'src/components/downloadApp/index.js',
 // '1.0.0/header/index.js': 'src/components/header/index.js',
  'user/personal.js': 'src/pages/user/personal.js',
  'index.js': 'src/pages/index/index.js',

}

Object.keys(files).forEach((item) => {
  const configItem = {
    input: files[item],
    output: {
      format: 'iife',
      file: pathName + item
    },
    plugins: [
      alias({
        resolve: [".js", ".vue"],
        entries: [{ 
          find:'@', 
          replacement: path.resolve(__dirname, 'src') 
        }]
      }),
      replace({ 
        imgPath: process.env.NODE_ENV == 'production' ? 'https://img.whqietu.com/static/img' : '/static/img',
        version: dataString
      }),
      commonjs(),
      vue({
        template: {
          isProduction: process.env.NODE_ENV == 'production' ? true : false,
          compilerOptions: {
             preserveWhitespace: false
          },
          optimizeSSR: false
        },
        style: {
          postcssPlugins: [autoprefixer]
        }
      }),
      resolve(),
      babel({
        exclude: '**/node_modules/**'
      }),
      postcss({
        plugins: [autoprefixer]
      }),
      buble()
    ]
  }
  if (process.env.NODE_ENV == 'production') {
    configItem.plugins.push(uglify({}, minify))
  }
  config.push(configItem)
})

export default config

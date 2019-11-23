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


const time = process.env.time
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
    replace({ 
      staticPath: process.env.NODE_ENV == 'production' ? '//m.static.whqietu.com' : '',
      imgPath: process.env.NODE_ENV == 'production' ? '//m.img.whqietu.com' : '',
      version: time
    }),
    uglify({}, minify)
  ]
}]
const files = {
  '1.0.1/utils/index.js':'src/widget/utils.js',
  '1.0.0/polyfill/index.js': 'src/widget/polyfill.js',
  '1.0.1/ajax/index.js': 'src/widget/ajax.js',
  '1.0.0/store/index.js': 'src/widget/store.js',
  '1.0.0/request/index.js': 'src/widget/request.js',
  '1.0.0/validate/index.js': 'src/widget/validate.js',
  '1.0.0/filter/index.js': 'src/widget/filter.js',
  '1.0.5/scale/index.js': 'src/widget/scale.js',
  '1.0.1/loading/index.js': 'src/components/loading/index.js',
  '1.0.0/showModal/index.js': 'src/components/showModal/index.js',
  '1.0.0/toast/index.js': 'src/components/toast/index.js',
  '1.0.0/lazyLoad/index.js': 'src/components/lazyLoad/index.js',
  //'1.0.0/swiper/index.js': 'src/components/swiper/index.js',
 // '1.0.0/downloadApp/index.js': 'src/components/downloadApp/index.js',
  // '1.0.0/header/index.js': 'src/components/header/index.js',
  'user/personal.js': 'src/pages/user/personal.js',
  'index.js': 'src/pages/index/index.js',
  'user/login.js': 'src/pages/user/login.js'

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
        imgPath: process.env.NODE_ENV == 'production' ? '//m.img.whqietu.com' : '',
        version: time
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

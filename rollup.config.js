import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs' 
import {uglify} from 'rollup-plugin-uglify'
import vue from 'rollup-plugin-vue' 
import buble from 'rollup-plugin-buble'
import alias from 'rollup-plugin-alias'
import postcss from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace'
import autoprefixer from 'autoprefixer'
import typescript from 'rollup-plugin-typescript2'
import path from 'path'
var config = require('./config/index')

const time = process.env.time
const pathName = 'public/static/js/'
const frameworkVersion = config.js.framework
const plugins = [
  alias({
    resolve: [".js", ".vue"],
    entries: [{ 
      find:'@', 
      replacement: path.resolve(__dirname, 'src') 
    }]
  }),
  commonjs(),
  typescript({
    typescript: require('typescript'),
    objectHashIgnoreUnknownHack: true,
    exclude: [ "*.d.ts", "**/*.d.ts", ".vue" ]
  }),
  replace({ 
    imgPath: process.env.NODE_ENV == 'production' ? '//m.img.whqietu.com' : '',
    staticPath: process.env.NODE_ENV == 'production' ? '//m.static.whqietu.com' : '',
  }),
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
  buble(),
  uglify({
    output: {
      comments: function(node, comment) {
        if (comment.type === "comment2") {
          // multiline comment
          return /License/i.test(comment.value)
        }
        return false
      },
      beautify: process.env.NODE_ENV == 'production' ? false : true
    },
    compress: {
      drop_console: process.env.NODE_ENV == 'production' ? true : false
    },
    warnings: false
  })
]

const config = [{
  input: 'src/serviceWorker.js',
  output: {
    format: 'iife',
    file: 'public/serviceWorker.js',
    banner: '/*!' + '\n' +
    ' * serviceWorker.js LastModifyTime: '+ time +'\n'+
    ` * Copyright(c) 2018-${new Date().getFullYear()} leafront`+'\n'+
    ' * Released under the MIT License.\n' +
    ' */\n'
  },
  plugins
}, {
  input: 'src/framework/index.js',
  output: {
    format: 'iife',
    file: `public/static/js/h5-framework/${frameworkVersion}/index.js`,
    banner: '/*!\n' +
    ` * h5-framework.js  v${frameworkVersion} \n` +
    ` * Copyright(c) 2018-${new Date().getFullYear()} leafront \n` +
    ' * Released under the MIT License.\n' +
    ' */'
  },
  plugins,
  // globals: {
  //   vue: 'Vue'
  // }
}]
const files = {
  'filter/'+config.js.filter+'/index.js': 'src/widget/filter.js',
  'lazyLoad/'+config.js.lazyLoad+'/index.js': 'src/components/lazyLoad/index.js',
  'user/personal.js': 'src/pages/user/personal.js',
  'index.js': 'src/pages/index/index.js',
  'user/login.js': 'src/pages/user/login.js',
  'luck/draw.js': 'src/pages/luck/draw.js'
}

Object.keys(files).forEach((item) => {
  const configItem = {
    input: files[item],
    output: {
      format: 'iife',
      file: pathName + item,
      banner: '/*!' + '\n' +
      ` * ${item} \n` +
      ` * Copyright(c) 2018-${new Date().getFullYear()} leafront`+'\n'+
      ' * Released under the MIT License.\n' +
      ' */'
    },
    plugins,
    // globals: {
    //   Vue: 'vue'
    // }
  }
  config.push(configItem)
})

export default config

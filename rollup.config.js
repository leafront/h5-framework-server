import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import {uglify} from 'rollup-plugin-uglify' 
const pathName = 'public/static/js/'
const config = []
const files = {
  '1.0.0/utils/index.js':'src/widget/utils.js',
  '1.0.0/polyfill/index.js': 'src/widget/polyfill.js',
  '1.0.0/ajax/index.js': 'src/widget/ajax.js',
  '1.0.0/store/index.js': 'src/widget/store.js',
  '1.0.0/request/index.js': 'src/widget/request.js',
  '1.0.0/validate/index.js': 'src/widget/validate.js',
  '1.0.0/filter/index.js': 'src/widget/filter.js',
  '1.0.0/loading/index.js': 'src/components/loading/index.js',
  '1.0.0/showModal/index.js': 'src/components/showModal/index.js',
  '1.0.0/toast/index.js': 'src/components/toast/index.js',
  '1.0.0/lazyLoad/index.js': 'src/components/lazyLoad/index.js',
}

Object.keys(files).forEach((item) => {
  config.push({
    input: files[item],
    output: {
      format: 'iife',
      file: pathName + item
    },
    plugins: [
      resolve(),
      babel({
        exclude: '**/node_modules/**'
      }),
      uglify()
    ]
  })
})

export default config

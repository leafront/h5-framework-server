const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
module.exports = {
  entry: {
  '1.0.0/utils/index':'./src/widget/utils.js',
  '1.0.0/polyfill/index': './src/widget/polyfill.js',
  '1.0.0/ajax/index': './src/widget/ajax.js',
  '1.0.0/store/index': './src/widget/store.js',
  '1.0.0/request/index': './src/widget/request.js',
  '1.0.0/validate/index': './src/widget/validate.js',
  '1.0.0/filter/index': './src/widget/filter.js',
  '1.0.0/loading/index': './src/components/loading/index.js',
  '1.0.0/showModal/index': './src/components/showModal/index.js',
  '1.0.0/toast/index': './src/components/toast/index.js',
  '1.0.0/lazyLoad/index': './src/components/lazyLoad/index.js',
  '1.0.0/swiper/index': './src/components/swiper/index.js',
  '1.0.0/downloadApp/index': './src/components/downloadApp/index.js',
  '1.0.0/header/index': './src/components/header/index.js',
  'user/personal': './src/pages/user/personal.js',
  'index': './src/pages/index/index.js',
  },
  output: {
    path: path.resolve(__dirname, './public/static/js'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
    },{
      test: /\.(png|jpg|gif)$/i,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      }]
    }]
  },
  resolve:{
    extensions:['*','.js','.json','.scss','.css'],
    alias: {
     '@': path.resolve('src')
    }
  },
  plugins: [
    new UglifyJsPlugin({
      parallel: 4,
      uglifyOptions: {
        output: {
          comments: false,
          beautify: true
        },
        compress: {},
        warnings: false
      },
      cache: true
    }),
    new VueLoaderPlugin()
  ]
}


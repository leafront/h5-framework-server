const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
module.exports = {
  entry: {
    '1.0.0/swiper/index': './src/components/swiper/index.js',
    '1.0.0/downloadApp/index': './src/components/downloadApp/index.js',
    '1.0.0/header/index': './src/components/header/index.js',
    'index': './src/pages/index/index.js',
    'user/personal': './src/pages/user/personal.js'
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


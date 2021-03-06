const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  devtool: 'eval-source-map',
  // entry: [
  //   'react-hot-loader/patch',//热模块替换
  //   'webpack-hot-middleware/client?reload=true',//自动刷新，注掉这个浏览器将不自动刷新
  //   path.resolve('src/index.js'),
  // ],
  entry: {
    test: ['react-hot-loader/patch',//热模块替换
      'webpack-hot-middleware/client?reload=true',//自动刷新，注掉这个浏览器将不自动刷新
    ],
    app: [
      // 'react-hot-loader/patch',//热模块替换
      // 'webpack-hot-middleware/client?reload=true',//自动刷新，注掉这个浏览器将不自动刷新
      'babel-polyfill',
      path.resolve('src/index.js'),
    ],
    vendor: [
      'react',
      'react-dom',
      'redux',
    ],
  },
  output: {
    // filename: '[name].js',
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:3000/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        // Don't use .babelrc in `yarn link`-ed dependency's directory and use in current direction instead
        loader: 'babel-loader?babelrc=false&extends=' + path.resolve(__dirname, '.babelrc')
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      minify: true,
      filename: 'index.html',
      template: 'index.html',
      // chunks: ['index'],
      // hash: true
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash].css',
    }),
    new ManifestPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  resolveLoader: {
    modules: [
      'node_modules',
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'initial', // 必须三选一： "initial" | "all"(默认就是all) | "async"
      minSize: 0, // 最小尺寸，默认0
      minChunks: 1, // 最小 chunk ，默认1
      maxAsyncRequests: 1, // 最大异步请求数， 默认1
      maxInitialRequests: 1, // 最大初始化请求书，默认1
      name: () => { }, // 名称，此选项可接收 function
      cacheGroups: { // 这里开始设置缓存的 chunks
        priority: '0', // 缓存组优先级 false | object |
        vendor: { // key 为entry中定义的 入口名称
          chunks: 'initial', // 必须三选一： "initial" | "all" | "async"(默认就是异步)
          test: /react|lodash|react-dom|redux/, // 正则规则验证，如果符合就提取 chunk
          name: 'vendor', // 要缓存的 分隔出来的 chunk 名称
          minSize: 0,
          minChunks: 1,
          enforce: true,
          maxAsyncRequests: 1, // 最大异步请求数， 默认1
          maxInitialRequests: 1, // 最大初始化请求书，默认1
          reuseExistingChunk: true, // 可设置是否重用该chunk（查看源码没有发现默认值）
        },
      },
    },
  },
}

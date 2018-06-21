const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const express = require('express')
const config = require('./webpack.config')

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = 3000;

const app = express()

// console.log(`process.env = ${JSON.stringify(process.env)}`);
console.log('\x1b[31m%s\x1b[0m', `running in ${isDeveloping?'develop':'production'} mode`);

if(isDeveloping){
  config.mode = 'development';
  const compiler = webpack(config)
  
  compiler.apply(new webpack.ProgressPlugin({
    profile: true
  }));
  
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  }))
  
  app.use(webpackHotMiddleware(compiler))

  // app.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, 'index.html'))
  // })
}else{
  //TODO 路径有问题
  app.use(express.static(__dirname + '/dist'));
  app.get('/', function response(req, res) {
    // res.setHeader
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
  // app.get('/index.html', function response(req, res) {
  //   // res.setHeader
  //   res.sendFile(path.join(__dirname, 'dist/index.html'));
  // });
  app.get('/address', function response(req, res) {
    // res.setHeader
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}


app.listen(port, (err) => {
  if (err) {
    return console.error(err) // eslint-disable-line no-console
  }
  console.log(`Listening at http://localhost:${port}`) // eslint-disable-line no-console
})

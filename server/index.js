const express = require('express')
const path = require('path')
var compression = require('compression');
var helmet = require('helmet');

const isDev = (process.env.NODE_ENV || 'development') === 'development'
const app = express()

if (isDev) {
  const webpack = require('webpack')
  const webpackConfig = require('../webpack.config')
  const compiler = webpack(webpackConfig)

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }))
  app.use(require('webpack-hot-middleware')(compiler))
}

app.use(compression());
app.use(helmet());
app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(8080, () => console.log('Server running!'))
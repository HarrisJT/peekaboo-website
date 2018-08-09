var express = require('express');
var path = require('path');
var compression = require('compression');
var helmet = require('helmet');
var morgan = require('morgan');
var debug = require('debug')('app')
var app = express();

// const isDev = (process.env.NODE_ENV || 'development') === 'development'

// if (isDev) {
//   const webpack = require('webpack')
//   const webpackConfig = require('../webpack.config')
//   const compiler = webpack(webpackConfig)

//   app.use(require('webpack-dev-middleware')(compiler, {
//     noInfo: true, publicPath: webpackConfig.output.publicPath
//   }))
//   app.use(require('webpack-hot-middleware')(compiler))
// }

// not sure if this is necessary
try {
  process.on('uncaughtException', function(er) {
    debug('Error: %o', er.stack)
    console.error(er.stack);
    process.exit(1);
  });

  app.use(morgan('dev'));
  app.use(compression());
  app.use(helmet());
  app.use(function(err, req, res) {
    console.error(err.stack);
    res.status(500).send('Error caught!');
  });

  app.set('view engine', 'pug');
  app.set('views', path.resolve(__dirname, 'views'));

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.listen(process.env.PORT || 8080, () => console.log('Server running!'));
} catch(err) {
  debug('Error: %o', err)
}

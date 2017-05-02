var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.js');

var app = express();
var compiler = webpack(config);
const loadRouter = require('express-load-router');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: '/dist/'
}));

app.use(require('webpack-hot-middleware')(compiler));


loadRouter(app, path.join(__dirname, 'routes').replace(/\\/g,'/')
);


app.listen(8082, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:8082');
});

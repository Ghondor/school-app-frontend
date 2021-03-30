const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const pe = require('parse-error');
const cors = require('cors');
var path = require('path');
const apprender = require('./routes/apprender');
const portscanner = require('portscanner');
const hbs = require('handlebars')
const exphbs = require('express-handlebars');
const app = express();

const CONFIG = require('./config/config');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Passport
app.use(passport.initialize());

//Log Env
console.log("Environment:", CONFIG.app)


// CORS
app.use(cors());


app.use('/', apprender);

// app.use('/', function (req, res) {
//   res.statusCode = 200;//send the appropriate status code
//   res.json({ status: "success", message: "Mongo API", data: {} })
//   // res.render('index');
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
  defaultLayout: 'layout',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  extname: 'hbs',
  partialsDir: __dirname + '/views/partials/'
}));
app.enable('view cache');

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// PORT Listen
app.set('port', (CONFIG.port));
app.listen(app.get('port'), () => {
  console.log('Server is up on ' + app.get('port'));
});

module.exports = app;

process.on('unhandledRejection', error => {
  console.error('Uncaught Error', pe(error));
});

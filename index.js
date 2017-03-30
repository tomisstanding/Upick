require('dotenv').config();
const express        = require('express');
const bodyParser     = require('body-parser');
const logger         = require('morgan');
const path           = require('path');
const methodOverride = require ('method-override');
const app            = express();
const PORT           = process.env.PORT || 8000;
const fetch          = require('node-fetch');

// config morgan to log in our terminal
app.use(logger('dev'));

// config body parser which will will extract the entire body portion
// of an incoming request stream and expose it on req.body
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// config ejs
app.set('view engine', 'ejs');

// config method-override to override http verbs
app.use(methodOverride('_method'));

// link to resources
app.use('/', require('./resources'));

// config local host port
app.listen(PORT, () => {
  console.log('Server is listening on', PORT);
});

module.exports = app;

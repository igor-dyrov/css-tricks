const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');

require('./models/Users.js');
require('./config/passport.js');
//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

//Initiate our app
const app = express();

//Configure our app
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

app.use(require('./routes'));

app.use(errorHandler());

//Configure Mongoose
mongoose.connect('mongodb://igor:261097@localhost/passport-tutorial');
mongoose.set('debug', true);

app.listen(8000, () => console.log('Server running on http://localhost:8000/'));
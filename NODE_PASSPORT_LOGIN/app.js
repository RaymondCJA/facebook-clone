const express = require('express'); // bring in express
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose'); //bring in mongoose
const flash = require('connect-flash');
const session = require('express-session');

const app = express(); //basic express server, initialise our app var

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose.connect(db, {useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Bodyparser
app.use(express.urlencoded({ extended: false }));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000; //create a port to run our app on: LHS in case we deploy, and 5000 on our local host

app.listen(PORT, console.log(`server started on port ${PORT}`)); //take our app object and call listen, which will run a server
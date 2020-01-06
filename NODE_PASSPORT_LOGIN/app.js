const express = require('express'); // bring in express
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose'); //bring in mongoose

const app = express(); //basic express server, initialise our app var

// DB Config
const db = require('./config/keys').MongoURI;

// Connect to Mongo
mongoose.connect(db, {useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Bodyparser
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000; //create a port to run our app on: LHS in case we deploy, and 5000 on our local host

app.listen(PORT, console.log(`server started on port ${PORT}`)); //take our app object and call listen, which will run a server
const express = require('express'); // bring in express
const expressLayouts = require('express-ejs-layouts');

const app = express(); //basic express server, initialise our app var

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000; //create a port to run our app on: LHS in case we deploy, and 5000 on our local host

app.listen(PORT, console.log(`server started on port ${PORT}`)); //take our app object and call listen, which will run a server
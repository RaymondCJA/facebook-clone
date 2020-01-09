//homepage, /dashboard etc are gonna be here

const express = require('express'); //we use the express router
const router = express.Router(); //to use express route, we need to create a variable called router and set that to `express.Router()`

const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

/*
//and whenever we wanna create a route, then whatever the method, in this case it is a get request, so we handle the home/index page 
// so we put an arrow function with a request and response object, and we take the response and call .send() 
router.get('/', (req, res) => res.render('welcome')); 
*/

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

module.exports = router;
//login, users, reguster will be here

const express = require('express'); //we use the express router
const router = express.Router(); //to use express route, we need to create a variable called router and set that to `express.Router()`

// login page
router.get('/login', (req, res) => res.send('Login successful')); 

// register page
router.get('/register', (req, res) => res.send('register successful')); 

module.exports = router;
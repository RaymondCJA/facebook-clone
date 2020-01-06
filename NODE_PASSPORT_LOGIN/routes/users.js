//login, users, reguster will be here

const express = require('express'); //we use the express router
const router = express.Router(); //to use express route, we need to create a variable called router and set that to `express.Router()`

// login page
router.get('/login', (req, res) => res.render('login')); 

// register page
router.get('/register', (req, res) => res.render('register')); 

// Register Handle
router.post('/register', (req, res) => {
    const { name, email, password, password2} = req.body;
    let errors = [];

    //check required fields
    if(!name || !email || !password || !password2) {
        errors.push({ msg: 'Please fill in ALL fields!'});
    }

    if (password != password2) {
        errors.push({ msg: 'Passwords do not match' });
      }
    
      if (password.length < 6) {
        errors.push({ msg: 'Password must be at least 6 characters' });
      }

      if(errors.length > 0) {
          res.render('register', {
              errors,
              name,
              password,
              password2
          });
      } else {
          res.send('all fields entered correctly');
      }
});

module.exports = router;
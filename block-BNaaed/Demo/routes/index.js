var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/success', (req, res, next) => {
  console.log(req.session, req.user)
  res.render('success');
});

router.get('/failure', (req, res, next) => {
  res.render('failure');
});


router.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

router.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/success',
        failureRedirect: '/failure'
}));

module.exports = router;

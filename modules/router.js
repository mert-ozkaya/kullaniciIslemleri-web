const Router = require('express').Router;

const router = Router();

router.use('/protected-page', function(err, req, res, next){
console.log(err);
   //User should be authenticated! Redirect him to log in.
   res.redirect('/login');
});

router.get('/signup',require('./callbacks/get-signup'));
router.get('/login',require('./callbacks/get-login'));
router.get('/protected-page',require('./middleware/signinCheck'), require('./callbacks/protected-page'));
router.get('/my-page',require('./middleware/signinCheck'), require('./callbacks/my-page'));
router.get('/logout',require('./callbacks/logout'));


router.post('/signup', require('./callbacks/post-signup'))
router.post('/login', require('./callbacks/post-login'))

module.exports = router;

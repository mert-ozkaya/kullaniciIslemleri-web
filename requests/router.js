const Router = require('express').Router;

const router = Router();

router.get('/login', require('./callbacks/login.js'));
router.get('/my-page', require('./callbacks/my-page.js'));
router.get('/protected-page', require('./callbacks/protected-page.js'));
router.get('/signup', require('./callbacks/signup.js'));



module.exports = router;

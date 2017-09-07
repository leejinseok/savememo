var express = require('express');
var authCtrl = require('./authCtrl');
var router = express.Router();

router.use('/register/local', authCtrl.localRegister);
router.use('/twinck/email', authCtrl.twinCkEmail);


module.exports = router;

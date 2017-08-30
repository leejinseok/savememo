var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('welcome');
});

router.get('/main', (req, res) => {
    res.render('pages/main');
})

module.exports = router;

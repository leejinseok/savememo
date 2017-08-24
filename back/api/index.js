var express = require('express');
var router = express.Router();
var versions = {
    'v1.0': require('./v1.0')
};
router.use('/v1.0', versions['v1.0']);

module.exports = router;

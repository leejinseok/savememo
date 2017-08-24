const User = require('../../../models/user');
exports.localRegister = (req, res) => {
    res.send('/api/v1.0/auth/register/local');
};

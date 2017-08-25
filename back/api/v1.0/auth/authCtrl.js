const User = require('../../../models/user');
exports.localRegister = (req, res) => {
    const { email } = req.body;
    res.send(email);
};

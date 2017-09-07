const User = require('../../../models/user');
exports.localRegister = (req, res) => {
    const { email } = req.body;
    res.send(email);
};

exports.twinCkEmail = (req, res) => {
    const { email } = req.body;
    res.send(email);
}

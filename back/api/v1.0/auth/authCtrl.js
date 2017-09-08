const User = require('../../../models/user');

exports.loginLocal = (req, res) => {
    const { email, pwd } = req.body;
    User.find({email: email, pwd: pwd}, function(err, users){
        if(err) throw err;
        if(users.length) res.send({res: true});
        else res.send({res: false})
    });
}

exports.localRegister = (req, res) => {
    const { email } = req.body;
    res.send(email);
};

exports.twinCkEmail = (req, res) => {
    const { email } = req.body;
    User.find({email: email}, function(err, users) {
        if(err) throw err;
        if(!users.length) res.send({res: true}); //  중복되는 값이 없으므로 사용가능한 email
        else res.send({res: false}); // 중복되는 이메일이 있으므로 사용불가한 email
    });
};

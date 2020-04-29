const jwt = require('jsonwebtoken');

let verifyToken = (req, res, next) => {
    let token = req.get('authorization')
    token = token.split(" ")[1];
    console.log(token);
    jwt.verify(token, 'secret', (err, dedoced) => {
        if (err) {
            return res.status(401).json({
                ok: false
            })
        }
    })
    next()
};



module.exports = {
    verifyToken
};
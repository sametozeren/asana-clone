const httpStatus = require('http-status');
const JWT = require('jsonwebtoken');

const AuthenticateToken = (req, res, next) => {
    const token = ((req.headers || {}).authorization || '').split(' ')[1] || '';

    console.log(req.header)

    if (token === '') {
        return res.status(httpStatus.UNAUTHORIZED).send({
            error: 'Token is required'
        });
    }

    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(httpStatus.FORBIDDEN).send({
                error: 'You need to be logged in for this operation.'
            });
        }

        req.user = user;

        next();
    });
};

module.exports = AuthenticateToken;
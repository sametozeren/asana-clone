const httpStatus = require('http-status');
const uuid = require('uuid');
const BaseController = require('./BaseController');
const UsersService = require('../services/UsersService');
const {
    passwordToHash,
    generateAccessToken,
    generateRefreshToken
} = require('../scripts/utils/JWTHelper');

class UsersController extends BaseController {
    service = UsersService;

    // * Users Controller spesific functions can be defined

    register = (req, res) => {
        req.body.password = passwordToHash(req.body.password);

        this.add(req, res);
    };

    login = (req, res) => {
        req.body.password = passwordToHash(req.body.password);

        this.service.getByOne(req.body)
            .then(user => {
                if (!user) {
                    res.status(httpStatus.NOT_FOUND).send({
                        message: 'User Not Exist'
                    });
                }

                user = {
                    ...user.toObject(),
                    tokens: {
                        access_token: generateAccessToken(user),
                        refresh_token: generateRefreshToken(user)
                    }
                };

                delete user.password;

                res.status(httpStatus.OK).send(user);
            }).catch((e) => {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
            });
    };

    resetPassword = (req, res) => {
        const new_password = (uuid.v4() || '').split('-')[0] || `usr-${new Date().getTime()}`;

        console.log(new_password)
        this.service.update(req.body, {
            password: passwordToHash(new_password)
        }).then(user => {
            if (!user) {
                return res.status(httpStatus.NOT_FOUND).send({
                    error: 'User Not Found'
                });
            }

            res.status(httpStatus.OK).send(user);
        }).catch((e) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
        });
    };
};

module.exports = new UsersController();
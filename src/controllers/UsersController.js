const httpStatus = require('http-status');
const uuid = require('uuid');
const eventEmitter = require('../scripts/events/eventEmitter');
const path = require('path');
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

        this.service.update(req.body, {
            password: passwordToHash(new_password)
        }).then(user => {
            if (!user) {
                return res.status(httpStatus.NOT_FOUND).send({
                    error: 'User Not Found'
                });
            }

            eventEmitter.emit('send_mail', {
                to: user.email, // list of receivers
                subject: 'Reset Password', // Subject line
                html: `<b>New password: ${new_password} </b>`, // html body
            });


            res.status(httpStatus.OK).send({
                message: 'Mail send'
            });
        }).catch((e) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
        });
    };

    updateProfileImage = (req, res) => {
        if (!((req || {}).files || {}).profile_image) {
            return res.status(httpStatus.BAD_REQUEST).send({
                error: 'Profile Image required'
            });
        }

        const extension = path.extname(req.files.profile_image.name);
        const fileName = ((((req || {}).body || {}).user_id || {})._id || '') + extension;
        const folderPath = path.join(__dirname, '../', 'uploads/users', fileName);
        const service = this.service;

        req.files.profile_image.mv(folderPath, function (err) {
            if (err) {
                return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
                    error: err
                });
            }

            service.update({
                _id: req.body.user_id._id
            }, {
                profile_image: fileName
            }).then(user => {
                res.status(httpStatus.OK).send(user);
            }).catch((e) => {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
            })
        })
    };
};

module.exports = new UsersController();
const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');
const ValidateData = require('../middlewares/ValidateData');
const UsersValidation = require('../validations/UsersValidation');
const AuthenticateToken = require('../middlewares/AuthenticateToken');

router.get('/getAll', UsersController.getAll);
router.post('/getById', UsersController.getById);
router.post('/getByOne', UsersController.getByOne);
router.post('/update', UsersController.update);
router.post('/delete', UsersController.delete);
router.post('/register', ValidateData(UsersValidation.registerValidation), UsersController.register);
router.post('/login', ValidateData(UsersValidation.loginValidation), UsersController.login);
router.post('/reset-password', ValidateData(UsersValidation.resetPasswordValidation), UsersController.resetPassword);
router.post('/update-profile-image', AuthenticateToken, UsersController.updateProfileImage)

module.exports = router;
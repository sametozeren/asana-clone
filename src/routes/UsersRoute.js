const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');
const ValidateData = require('../middlewares/ValidateData');
const UsersValidation = require('../validations/UsersValidation');

router.post('/getById', UsersController.getById);
router.post('/getByOne', UsersController.getByOne);
router.post('/update', UsersController.update);
router.post('/delete', UsersController.delete);
router.post('/register', [ValidateData(UsersValidation.registerValidation)], UsersController.register);
router.post('/login', [ValidateData(UsersValidation.loginValidation)], UsersController.login);

module.exports = router;
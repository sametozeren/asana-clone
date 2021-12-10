const express = require('express');
const router = express.Router();
const SectionsController = require('../controllers/SectionsController');
const SectionsValidation = require('../validations/SectionsValidation');
const ValidateData = require('../middlewares/ValidateData');
const AuthenticateToken = require('../middlewares/AuthenticateToken');

router.get('/getAll', SectionsController.getAll);
router.post('/add', [AuthenticateToken, ValidateData(SectionsValidation.createValidation)], SectionsController.add);
router.post('/getAllPopulate', AuthenticateToken, SectionsController.getAllPopulate);

module.exports = router;
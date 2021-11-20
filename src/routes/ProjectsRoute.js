const express = require('express');
const router = express.Router();
const ProjectsController = require('../controllers/ProjectsController');
const ValidateData = require('../middlewares/ValidateData');
const ProjectsValidation = require('../validations/ProjectsValidation');

router.get('/getAll', ProjectsController.getAll);
router.post('/getById', ProjectsController.getById);
router.post('/getByOne', ProjectsController.getByOne);
router.post('/add', [ValidateData(ProjectsValidation.createValidation)], ProjectsController.add);
router.post('/update', ProjectsController.update);
router.post('/delete', ProjectsController.delete);

module.exports = router;
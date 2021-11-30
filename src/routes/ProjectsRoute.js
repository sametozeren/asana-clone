const express = require('express');
const router = express.Router();
const ProjectsController = require('../controllers/ProjectsController');
const ProjectsValidation = require('../validations/ProjectsValidation');
const ValidateData = require('../middlewares/ValidateData');
const AuthenticateToken = require('../middlewares/AuthenticateToken');

router.get('/getAll', ProjectsController.getAll);
router.post('/getAll', AuthenticateToken, ProjectsController.getAll);
router.post('/getAllPopulate', AuthenticateToken, ProjectsController.getAllPopulate);
router.post('/getMyProjects', AuthenticateToken, ProjectsController.getMyProjects);
router.post('/getById', ProjectsController.getById);
router.post('/getByOne', ProjectsController.getByOne);
router.post('/add', [AuthenticateToken, ValidateData(ProjectsValidation.createValidation)], ProjectsController.add);
router.post('/update', ProjectsController.update);
router.post('/delete', ProjectsController.delete);

module.exports = router;
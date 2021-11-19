const express = require('express');
const router = express.Router();
const ProjectsController = require('../controllers/ProjectsController');

router.get('/getAll', ProjectsController.getAll);
router.post('/getById', ProjectsController.getById);
router.post('/getByOne', ProjectsController.getByOne);
router.post('/add', ProjectsController.add);
router.post('/update', ProjectsController.update);
router.post('/delete', ProjectsController.delete);


module.exports = router;
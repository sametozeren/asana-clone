const BaseController = require('./BaseController');
const ProjectsService = require('../services/ProjectsService');

class ProjectsController extends BaseController {
    service = ProjectsService;

    // * Projects Controller specific functions can be defined
};

module.exports = new ProjectsController();
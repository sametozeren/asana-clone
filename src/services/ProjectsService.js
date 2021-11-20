const BaseService = require('./BaseService');
const ProjectsModel = require('../models/ProjectsModel');

class ProjectsService extends BaseService {
    model = ProjectsModel;

    // * Projects Service specific functions can be defined
};

module.exports = new ProjectsService();
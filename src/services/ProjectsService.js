const BaseService = require('./BaseService');
const ProjectsModel = require('../models/ProjectsModel');

class ProjectsService extends BaseService {
    model = ProjectsModel;

    // * Projects Service specific functions can be defined

    getAllPopulate(where) {
        return this.model.find(where || {}).populate({
            path: 'user_id',
            select: 'full_name email'
        });
    };
};

module.exports = new ProjectsService();
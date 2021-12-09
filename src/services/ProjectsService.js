const BaseService = require('./BaseService');
const ProjectsModel = require('../models/ProjectsModel');

class ProjectsService extends BaseService {
    model = ProjectsModel;

    // * Projects Service specific functions can be defined

    getAllPopulate(where) {
        return this.model.find(where || {}).populate({
            path: 'user_id',
            select: 'full_name email profile_image'
        });
    };
};

module.exports = new ProjectsService();
const BaseService = require('./BaseService');
const SectionsModel = require('../models/SectionsModel');

class SectionsService extends BaseService {
    model = SectionsModel;

    // * Sections Service specific functions can be defined

    getAllPopulate(where) {
        return this.model.find(where || {}).populate({
            path: 'user_id',
            select: 'full_name email profile_image name'
        }).populate({
            path: 'project_id',
            select: 'name'
        });
    };
};

module.exports = new SectionsService();
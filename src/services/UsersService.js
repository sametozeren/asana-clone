const BaseService = require('./BaseService');
const UsersModel = require('../models/UsersModel');

class UsersService extends BaseService {
    model = UsersModel;

    // * Users Service specific functions can be defined
};

module.exports = new UsersService();
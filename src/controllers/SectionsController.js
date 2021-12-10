const BaseController = require('./BaseController');
const SectionsService = require('../services/SectionsService');
const httpStatus = require('http-status');

class SectionsController extends BaseController {
    service = SectionsService;

    // * Sections Controller specific functions can be defined

    getAllPopulate = (req, res) => {
        this.service.getAllPopulate()
            .then(response => {
                res.status(httpStatus.OK).send(response);
            }).catch((e) => {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
            });
    };

    getMyProjects = (req, res) => {
        this.service.getAll({
            user_id: (req.body || {}).user_id || {}
        }).then(response => {
            res.status(httpStatus.OK).send(response);
        }).catch((e) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
        });
    }
};

module.exports = new SectionsController();
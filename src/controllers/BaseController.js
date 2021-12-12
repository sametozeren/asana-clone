const httpStatus = require('http-status');

module.exports = class BaseController {
    getAll = (req, res) => {
        this.service.getAll()
            .then(response => {
                res.status(httpStatus.OK).send(response);
            }).catch((e) => {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
            });
    };

    getById = (req, res) => {
        res.status(200).send('getById');
    };

    getByOne = (req, res) => {
        this.service.getByOne(req.body)
            .then(response => {
                res.status(httpStatus.OK).send(response);
            }).catch((e) => {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
            });
    };

    add = (req, res) => {
        this.service.add(req.body)
            .then(response => {
                res.status(httpStatus.CREATED).send(response);
            }).catch((e) => {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
            });
    };

    update = (req, res) => {
        res.status(200).send('update');
    };

    delete = (req, res) => {
        res.status(200).send('delete');
    };
};
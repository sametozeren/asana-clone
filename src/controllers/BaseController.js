const httpStatus = require('http-status');

module.exports = class BaseController {
    getAll = (req, res) => {
        this.service.getAll()
            .then(response => {
                res.status(httpStatus.CREATED).send(response);
            }).catch((e) => {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
            });
    };

    getById = (req, res) => {
        this.service
        res.status(200).send('getById');
    };

    getByOne = (req, res) => {
        res.status(200).send('getByOne');
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
};;
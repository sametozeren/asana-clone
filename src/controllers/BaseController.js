module.exports = class BaseController {
    getAll = async (req, res) => {
        res.status(200).send('getById');
    };

    getById = (req, res) => {
        this.service
        res.status(200).send('getById');
    };

    getByOne(req, res) {
        res.status(200).send('getByOne');
    };

    add(req, res) {
        res.status(200).send('add');
    };

    update(req, res) {
        res.status(200).send('update');
    };

    delete(req, res) {
        res.status(200).send('delete');
    };
};;
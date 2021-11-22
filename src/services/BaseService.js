module.exports = class BaseService {
    getAll() {
        return this.model.find();
    };

    getById() {
        console.log('base service');
    };

    getByOne(item) {
        return this.model.findOne(item);
    };

    add(item) {
        const data = new this.model(item);

        return data.save();
    };

    update() {
        console.log('base service');
    };

    delete() {
        console.log('base service');
    };
};
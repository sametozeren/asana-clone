module.exports = class BaseService {
    getAll() {
        const data = this.model.find();

        return data;
    };

    getById() {
        console.log('base service');
    };

    getByOne() {
        console.log('base service');
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
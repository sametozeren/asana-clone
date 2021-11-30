module.exports = class BaseService {
    getAll(where) {
        return this.model.find(where || {});
    };

    getById() {
        console.log('base service');
    };

    getByOne(id) {
        return this.model.findOne(id);
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
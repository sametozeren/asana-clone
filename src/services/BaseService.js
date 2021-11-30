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

    update(where, data) {
        return this.model.findOneAndUpdate(where, data, {
            new: true
        });
    };

    delete() {
        console.log('base service');
    };
};
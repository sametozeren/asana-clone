const Mongoose = require('mongoose');
const SectionSchema = new Mongoose.Schema({
    name: String,
    user_id: {
        type: Mongoose.Types.ObjectId,
        ref: 'users'
    },
    project_id: {
        type: Mongoose.Types.ObjectId,
        ref: 'projects',
    },
    order: Number
}, {
    timestamps: true,
    versionKey: false
});

module.exports = Mongoose.model('sections', SectionSchema);
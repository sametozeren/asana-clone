const Mongoose = require('mongoose');
const ProjectsLogger = require('../scripts/loggers/ProjectsLogger');
const ProjectSchema = new Mongoose.Schema({
    name: String,
    /*
    user_id: {
        type: Mongoose.Types.ObjectId,
        ref: 'user'
    } */
}, {
    timestamps: true,
    versionKey: false
});

// ProjectSchema.pre('save', (next, doc) => {
//     console.log('öncesi', doc);
//     next();
// });

ProjectSchema.post('save', (object) => {
    ProjectsLogger.log({
        level: 'info',
        message: object
    });
});

module.exports = Mongoose.model('projects', ProjectSchema);
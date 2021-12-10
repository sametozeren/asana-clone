const Joi = require('joi');
const createValidation = Joi.object({
    name: Joi.string().required().min(5),
    project_id: Joi.string().required().min(8),
    user_id: Joi.object().required()
});

module.exports = {
    createValidation
};
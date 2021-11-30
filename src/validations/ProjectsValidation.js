const Joi = require('joi');
const createValidation = Joi.object({
    name: Joi.string().required().min(5),
    user_id: Joi.object().required()
});

module.exports = {
    createValidation
};
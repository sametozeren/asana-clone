const Joi = require('joi');
const registerValidation = Joi.object({
    full_name: Joi.string().required().min(3).max(16),
    password: Joi.string().required().min(8),
    email: Joi.string().email().required().min(8),
});
const loginValidation = Joi.object({
    password: Joi.string().required().min(8),
    email: Joi.string().email().required().min(8),
});

const resetPasswordValidation = Joi.object({
    email: Joi.string().email().required().min(8),
});

module.exports = {
    registerValidation,
    loginValidation,
    resetPasswordValidation
};
const Joi = require('joi');

const userSchema =  Joi.object({
    username: Joi.string().min(3).max(20).required(),
    firstname: Joi.string().min(3).max(20).required(),
    lastname: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
});

module.exports = {
    userSchema
}
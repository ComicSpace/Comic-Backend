const Joi = require("joi");

exports.CreateBookSchema = Joi.object({
    title: Joi.string().min(3).max(100).trim().lowercase().required(),
    description: Joi.string().min(3).max(1000).trim().lowercase().required(),
    author: Joi.string().min(3).max(100).trim().lowercase().required(),
    coverImageUrl: Joi.string().trim().lowercase().required(),
    pages: Joi.string().trim().lowercase().required(),
    category: Joi.string().hex().trim().lowercase().required(),
})
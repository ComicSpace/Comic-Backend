const Joi = require("joi");

exports.CreateBookSchema = Joi.object({
    title: Joi.string().min(3).max(100).trim().lowercase().required(),
    description: Joi.string().min(3).max(1000).trim().lowercase().required(),
    publishingDate: Joi.date().trim().lowercase(),
    coverImageUrl: Joi.string().trim().lowercase().required(),
    filename: Joi.string().trim().lowercase().required(),
    filepath: Joi.string().trim().lowercase().required(),
    category: Joi.string().hex().trim().lowercase().required(),
});

exports.getBooksByCategoryIdSchema = joi.object({
    categoryId: joi.string()
        .min(24)
        .required()
});

exports.bookIdSchema = joi.object({
    bookId: joi.string()
        .min(24)
        .required()
});

exports.updateBookSchema = joi.object({
    bookId: joi.string()
        .min(24)
        .required(),

    title: Joi.string()
        .min(3)
        .max(100)
        .trim()
        .lowercase(),

    description: Joi.string()
        .min(3)
        .max(1000)
        .trim()
        .lowercase(),

    author: Joi.string()
        .min(3)
        .max(100)
        .trim()
        .lowercase(),

    coverImageUrl: Joi.string()
        .trim()
        .lowercase(),

    locationUrl: Joi.string()
        .trim()
        .lowercase(),

    pages: Joi.string()
        .trim()
        .lowercase(),

    category: Joi.string()
        .hex()
        .trim()
        .lowercase(),
})

exports.findBookByTitleSchema = joi.object({
    bookTitle: joi.string()
        .min(3)
        .max(100)
        .required()
});
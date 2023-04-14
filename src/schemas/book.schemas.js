const Joi = require("joi");

exports.CreateBookSchema = Joi.object({
  title: Joi.string().min(3).max(100).trim().lowercase().required(),
  description: Joi.string().min(3).max(1000).trim().lowercase().required(),
//   publishingDate: Joi.date(),
  coverImageUrl: Joi.string().trim().lowercase().required(),
  filename: Joi.string().trim().lowercase().required(),
//   filepath: Joi.string().trim().lowercase().required(),
  category: Joi.string().trim().lowercase().required(),
});

exports.getBooksByCategoryIdSchema = Joi.object({
  categoryId: Joi.string().min(24).required(),
});

exports.bookIdSchema = Joi.object({
  bookId: Joi.string().min(24).required(),
});

exports.updateBookSchema = Joi.object({

  title: Joi.string().min(3).max(100).trim().lowercase(),

  description: Joi.string().min(3).max(1000).trim().lowercase(),

  coverImageUrl: Joi.string().trim().lowercase(),

  category: Joi.string().hex().trim().lowercase(),
});

exports.findBookByTitleSchema = Joi.object({
  bookTitle: Joi.string().min(3).max(100).required(),
});

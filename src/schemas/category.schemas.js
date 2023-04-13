const Joi = require('joi')

exports.CreateCategorySchema = Joi.object({
  category: Joi.string().min(3).max(30).required().trim().lowercase()
});
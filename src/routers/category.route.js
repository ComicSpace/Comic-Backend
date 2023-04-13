const express = require("express");
const categoryController = require("../controllers/category.controller");
const validator = require("../middlewares/validator.middleware");
const { CreateCategorySchema } = require("../schemas/category.schemas");

const categoryRouter = new express.Router();

categoryRouter.post(
  "/",
  [validator(CreateCategorySchema)],
  categoryController.create
);

module.exports = categoryRouter;

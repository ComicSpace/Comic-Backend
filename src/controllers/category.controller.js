const categoryService = require("../services/category.service");

class CategoryController {
    async create (req, res) {
        const newController = await categoryService.createNewCategory(req.body)
     
        return res.status(200).send({
         success: true,
         message: "Category created successfully",
         data: newController
        })
       }
    async getCategories (req, res) {
        const categories = await categoryService.getCategories()
     
        return res.status(200).send({
         success: true,
         message: "Categories fetched successfully",
         data: categories
        })
       }
}

module.exports = new CategoryController();
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
}

module.exports = CategoryController;
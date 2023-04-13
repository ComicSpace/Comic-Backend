const Category = require('../models/category.model');

class CategoryService {
    async createNewCategory(data) {
        const category = await Category.create(data);

        await category.save();

        return category;
    }
}

module.exports = new CategoryService();
const Book = require("../models/book.model");
const Category = require("../models/category.model");

class BookService {
  async createNewBook(data) {
    const book = new Book(data);
    
    await book.save();
  
    return book;
    
  }

  async getAllBooks(filter = {}) {
    return await Book.find({ ...filter, deleted: false })
      // .sort({ 'createdAt': 'desc' })
      .populate("category");
    // .select('-__v ');
  }
  // async getAllBooks(pagination) {
  //     return await Book.find({ 'deleted': false })
  //         .limit(10)
  //         .skip(pagination)
  //         .sort({ 'createdAt': 'desc' })
  //         .populate('category')
  //         .select('-__v ');
  // }

  async getBook(bookId) {
    return await Book.findOne({ _id: bookId, deleted: false })
      // .populate('category')
      // .select("-__v ");
  }

  async getBooksByCategory(category) {
    let categoryInfo = await Book.find({
      category: category,
      deleted: false,
    })
      .sort({ createdAt: -1 })
      .populate({
        path: "category",
        model: "Category",
        select: "_id",
      })
      .exec();
    return categoryInfo;
  }
  //   }
  //   async getBooksByCategory(category) {
  //     let categoryInfo = await Category.findOne({
  //       category: category,
  //       deleted: false,
  //     });

  //     if (!categoryInfo) {
  //       return null;
  //     } else {
  //       return await Book.find({ category: categoryInfo._id, deleted: false })
  //         .sort({ createdAt: "desc" })
  //         .populate("category");
  //       // .select('-__v ');
  //     }
  //   }

  async findBookByTitle(bookTitle) {
    return await Book.findOne({ title: bookTitle, deleted: false })
      .populate("category")
      // .select("-__v ");
  }

  async updateBook(bookId, bookUpdate) {
    return await Book.findOneAndUpdate({ _id: bookId }, bookUpdate, {
      new: true,
    })
      .populate("category")
      // .select("-__v ");
  }

  async deleteBook(bookId) {
    let bookInfo = await Book.findOne({ _id: bookId });

    if (bookInfo) {
      return await Book.findOneAndUpdate(
        { _id: bookId },
        { deleted: true },
        { new: true }
      )
        .populate("category")
        // .select("-__v ");
    } else {
      return null;
    }
  }
}

module.exports = new BookService();

const express = require("express");
const bookController = require("../controllers/book.controller");
const validator = require("../middlewares/validator.middleware");
const { CreateBookSchema, getBooksByCategoryIdSchema, findBookByTitleSchema, updateBookSchema, bookIdSchema } = require("../schemas/book.schemas");

const bookRouter = express.Router();

//create a book
bookRouter.post("/", [validator(CreateBookSchema)], bookController.createBook);

//get all books
bookRouter.get("/:pagination", bookController.getAllBooks);

//get one book
bookRouter.get("/:bookId", [validator(bookIdSchema)], bookController.getBook);

//get all books under a particular category
bookRouter.get("/:categoryId/:pagination", [validator(getBooksByCategoryIdSchema)], bookController.getBooksByCategory);

//search for book
bookRouter.get("/:bookTitle", [validator(findBookByTitleSchema)], bookController.findBoookByTitle);

//update book info
bookRouter.patch("/:bookId", [validator(updateBookSchema)], bookController.updateBook);

//delete book
bookRouter.delete("/:bookId", [validator(bookIdSchema)], bookController.deleteBook);

module.exports = bookRouter;

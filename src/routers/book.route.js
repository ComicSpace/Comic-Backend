const express = require("express");
const bookController = require("../controllers/book.controller");
const validator = require("../middlewares/validator.middleware");
const {upload} = require("../config/multer.config");
const { CreateBookSchema, getBooksByCategoryIdSchema, findBookByTitleSchema, updateBookSchema, bookIdSchema } = require("../schemas/book.schemas");

const bookRouter = express.Router();

//create a book
bookRouter.post("/", upload.single("filepath"), [validator(CreateBookSchema)], bookController.createBook);

//get all books
bookRouter.get("/", bookController.getAllBooks);

//get one book
bookRouter.get("/:bookId",  bookController.getBook);

//get all books under a particular category
bookRouter.get("/download/:id", bookController.downloadBook);
bookRouter.get("/:categoryId", [validator(getBooksByCategoryIdSchema)], bookController.getBooksByCategory);

//search for book
bookRouter.get("/bookTitle", [validator(findBookByTitleSchema)], bookController.findBoookByTitle);


//update book info
bookRouter.patch("/:bookId", [validator(updateBookSchema)], bookController.updateBook);

//delete book
bookRouter.delete("/:bookId", [validator(bookIdSchema)], bookController.deleteBook);

module.exports = bookRouter;

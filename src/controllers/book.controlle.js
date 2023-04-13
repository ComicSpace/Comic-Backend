const bookService = require("../services/book.service");

class BookController {
    async create (req, res) {
        const newController = await bookService.createNewBook(req.body)
     
        return res.status(200).send({
         success: true,
         message: "Book created successfully",
         data: newController
        })
       }
}

module.exports = new BookController();
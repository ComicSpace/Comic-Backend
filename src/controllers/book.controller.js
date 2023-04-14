const bookService = require("../services/book.service");
const path = require("path");

class BookController {
  async createBook(req, res) {
    const { originalname, filename } = req.file;
    // const filepath = path.join("../uploads", filename);
    const filepath = path.join("../../uploads", filename);
    // return res.send(filepath)
    const data = await bookService.createNewBook({
      ...req.body,
      filepath,
      filename: originalname,
    });

    // console.log(data,"data");

    if (data) {
      return res.status(200).send({
        success: true,
        message: "Book created successfully",
        data: data,
      });
    } else {
      return res.status(500).send({
        success: false,
        message: "Unknown error occured",
      });
    }
  }

  async getAllBooks(req, res) {
    // let pagination = req.params.pagination * 10 - 1;
    let category = req?.query?.category;
    const filter = {}

    if (category) {
      filter.category = category;
    }
    const data = await bookService.getAllBooks(filter);
    if (data) {
      return res.status(200).send({
        success: true,
        message: "Books acquired successfully",
        data: data,
      });
    } else {
      return res.status(404).send({
        success: false,
        message: "Books not found",
      });
    }
  }
//   async getAllBooks(req, res) {
//     let pagination = req.params.pagination * 10 - 1;

//     const data = await bookService.getAllBooks(pagination);
//     if (data) {
//       return res.status(200).send({
//         success: true,
//         message: "Books acquired successfully",
//         data: data,
//       });
//     } else {
//       return res.status(404).send({
//         success: false,
//         message: "Books not found",
//       });
//     }
//   }

  async getBook(req, res) {
    let bookId = req.params.bookId;

    const data = await bookService.getBook(bookId);
    if (data) {
      return res.status(200).send({
        success: true,
        message: "Book acquired successfully",
        data: data,
      });
    } else {
      return res.status(404).send({
        success: false,
        message: "Book not found",
      });
    }
  }

  async downloadBook(req, res) {
    let bookId = req.params.id;
    
    const data = await bookService.getBook(bookId);
    
    const filepath = data.filepath;
    // return res.send(filepath)

    if (data) {
      return res.sendFile(path.join(__dirname, data.filepath));
      //   return res.status(200).sendFile({
      //     success: true,
      //     message: "Book downloaded successfully",
      //     filepath: filepath,
      //     root: __dirname,
      //   });
    } else {
      return res.status(404).send({
        success: false,
        message: "Book not found",
      });
    }
  }

  async getBooksByCategory(req, res) {
    let category = req.query.category;

    const data = await bookService.getBooksByCategory(category);
    if (data) {
      return res.status(200).send({
        success: true,
        message: "Books acquired successfully",
        data: data,
      });
    } else {
      return res.status(404).send({
        success: false,
        message: "Books not found",
      });
    }
  }

  async findBoookByTitle(req, res) {
    let bookTitle = req.params.bookTitle;

    const data = await bookService.findBooksByTitle(bookTitle);
    if (data) {
      return res.status(200).send({
        success: true,
        message: "Books found successfully",
        data: data,
      });
    } else {
      return res.status(404).send({
        success: false,
        message: "Book not found",
      });
    }
  }

  async updateBook(req, res) {
    let bookUpdate = req.body;
    let bookId = req.param.bookId;

    const data = await bookService.updateBook(bookId, bookUpdate);

    if (data) {
      return res.status(200).send({
        success: true,
        message: "Book updated successfully",
        data: data,
      });
    } else {
      return res.status(500).send({
        success: false,
        message: "Unknown error occured",
      });
    }
  }

  async deleteBook(req, res) {
    let bookId = req.params.bookId;

    const data = await bookService.deleteBook(bookId);

    if (data) {
      return res.status(200).send({
        success: true,
        message: "Book deleted successfully",
        data: data,
      });
    } else {
      return res.status(500).send({
        success: false,
        message: "Unknown error occured",
      });
    }
  }
}

module.exports = new BookController();

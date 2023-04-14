const categoryRouter = require("./category.route");
const bookRouter = require("./book.route");

const basePath = "/api/v1";

module.exports = (app) => {
    app.use(`${basePath}/categories`, categoryRouter);
    app.use(`${basePath}/books`, bookRouter);
  };
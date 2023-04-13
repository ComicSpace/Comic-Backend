const categoryRouter = require("./router/category");

const basePath = "api/v1";

module.exports = (app) => {
    app.use(`${basePath}/categories`, categoryRouter);
  };
const categoryRouter = require("./category.route");

const basePath = "/api/v1";

module.exports = (app) => {
    app.use(`${basePath}/categories`, categoryRouter);
  };
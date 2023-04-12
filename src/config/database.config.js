const mongoose = require("mongoose");
const logger = require("pino")();

const connectionUrl = process.env.DATABASE_URL

if (!connectionUrl) {
    throw new Error("Invalid Connection url")
}

module.exports = () => {
  mongoose.set("strictQuery", false),
  mongoose
    .connect(connectionUrl)
    .then(() => {
      logger.info("Connected to database successfully");
    })
    .catch((err) => {
      logger.error("Failed to connect to database", err);
    });
  }
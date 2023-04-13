const _ = require("lodash");

const validator =
  (schema, source = "body") =>
  async (req, res, next) => {
    try {
      const value = await schema.validateAsync(req[source]);
      if (source === "body") {
        req.body = value; 
      }
      if (source === "query") {
        req.query = value; 
      }

      return next();
    } catch (error) {
      const { message } = { ...error.details[0] };

      return res.status(400).send({
        success: false,
        // remove double quotes and escape characters from the message, e.g. \"username\" => Username
        message: _.capitalize(message.replaceAll('"', "")),
      });
    }
  };

module.exports = validator;
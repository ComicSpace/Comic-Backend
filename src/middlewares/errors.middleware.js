const logger = require('pino')();

module.exports = (error, req, res, next) => {
  console.error("is faulty", error);
  
  return res.status(500).send({
    success: false,
    message: error.message
  });
};
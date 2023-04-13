const logger = require('pino')();

module.exports = (error, req, res, next) => {
  
  return res.status(500).send({
    success: false,
    message: error.message
  });
};
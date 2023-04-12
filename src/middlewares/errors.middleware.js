const logger = require('pino')();

module.exports = (error, res) => {
  logger.error(error);
  
  return res.status(500).send({
    success: false,
    message: error.message
  });
};
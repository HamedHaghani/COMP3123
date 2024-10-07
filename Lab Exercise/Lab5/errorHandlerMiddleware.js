const errorHandlerMiddleware = (err, req, res, next) => {
    const errorObj = {
      status: 500,
      message: 'Server Error',
    };
    res.status(500).json(errorObj); 
  };
  
  module.exports = errorHandlerMiddleware;
  
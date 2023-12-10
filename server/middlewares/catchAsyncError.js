module.exports = (fn) => {
  //? Return a middleware function that wraps the provided asynchronous route handler function.
  return (req, res, next) => {
    //? Execute the asynchronous route handler function and catch any errors.
    //? Call the "next" middleware function, passing the error as an argument if an error occurs.
    
    fn(req, res, next).catch(next);
  };
};

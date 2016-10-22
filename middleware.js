var middleware = {
  requireAutentication: function (req,res, next) {
      console.log("private route hit!");
      next();
  },
  logger: function (req, res, next) {
    var date = new Date().toString();
    console.log("Request in " + date + ": " + req.method + " " + req.originalUrl);
    next();
  }
};

module.exports = middleware;

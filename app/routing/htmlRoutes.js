//required modules to be used
var path = require("path");
var bodyParser = require('body-parser');
//module.exports allows the information to be used by other files 
module.exports = function(app) {
  // HTML GET Requests
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });
  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};

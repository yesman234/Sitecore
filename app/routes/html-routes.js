// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
// const apiRoutes = require("api-routes");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/all.html"));
  });
  app.get("/results/:id", function(req, res){       
    res.sendFile(path.join(__dirname, "../public/results.html"));
  })
  app.get("/low", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/low.html"));
  });

  app.get("/test/", function(req, res) {
    res.send(req.params);
  });
  
};

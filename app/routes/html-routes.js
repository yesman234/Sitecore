// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });


  // all route loads the all.html page, where all books in the db are displayed
  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/all.html"));
  });

  // short route loads the short.html page, where short books in the db are displayed
  app.get("/low", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/low.html"));
  });

  // long route loads the long.html page, where long books in the db are displayed
  app.get("/high", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/high.html"));
  });

};

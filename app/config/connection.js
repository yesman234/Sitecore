
// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("sitecore_library", "root", "password", {
  // change port # alter user w/ preveliges flushed
  port: 3307,
  ip: "127.0.0.1",
  user: "root",
  password: "password",
  dialect: "mysql",
  pool: {
    max: 20,
    min: 0,
    idle: 10000
  }
});

// // Exports the connection for other files to use
module.exports = sequelize;

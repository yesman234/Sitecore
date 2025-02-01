
// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("sitecore_library", "mysql-2f4b", "7zjQZqzy2YXp6bpIego3mMZvJgZYhHusYwgh87SYUn4=", {
  // change port # alter user w/ preveliges flushed
  port: "",
  user: "mysql",
  password: "R2o022Pv+PAXJa6L3HCA8W7uwlYhZjzoOXxNNoxwGNU=",
  dialect: "mysql",
  pool: {
    max: 20,
    min: 0,
    idle: 10000
  }
});

// // Exports the connection for other files to use
module.exports = sequelize;

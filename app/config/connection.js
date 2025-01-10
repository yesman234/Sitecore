
// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("sitecore_library", "root", "Garagec250", {
  port: 3306,
  user: "root",
  password: "Garagec250",
  dialect: "mysql",
  pool: {
    max: 20,
    min: 0,
    idle: 10000
  }
});


// // Exports the connection for other files to use
module.exports = sequelize;
// var mysql = require('mysql');
// var connection = mysql.createConnection(process.env.JAWSDB_URL);

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;

//   console.log('The solution is: ', rows[0].solution);
// });

// connection.end();

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("n4shudk5tktnvuyc", "wah2yfw31x02xcij", "", {
  host: "m7wltxurw8d2n21q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "wah2yfw31x02xcij",
  password: "veylhbo1qmzl1inl",
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

// Dependencies
var Sequelize = require("sequelize");
// "-uroot" "-h127.0.0.1" -P3306  -p

// with database, username, and password in the options object
//Server=localhost,1433;Initial Catalog=master;User Id=sa;Password=password;TrustServerCertificate=true
// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("sitecore_library", "data_analyst", "password", {
  // change port # alter user w/ preveliges flushed
  host:"127.0.0.1",
  username:'root',
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 20,
    min: 0,
    idle: 10000
  }
});
 
sequelize
    .authenticate()
    .then(() => {
        console.log('DB connection established successfully',sequelize.DATABASE)
    })
    .catch(err => {
        console.log('Unable to connect to DB', err);
    });

// // Exports the connection for other files to use
module.exports = sequelize;

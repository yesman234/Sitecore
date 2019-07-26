// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Note" model that matches up with DB
var Note = sequelize.define("note", {
  note: Sequelize.STRING,
  note1: Sequelize.STRING,
  note2: Sequelize.STRING,
  note3: Sequelize.STRING,
  note4: Sequelize.STRING,
  note5: Sequelize.STRING,
  note6: Sequelize.STRING,
  note7: Sequelize.STRING,
  note8: Sequelize.STRING,
  note9: Sequelize.STRING,
  note10: Sequelize.STRING,
  note11: Sequelize.STRING,
  note12: Sequelize.STRING,
  note13: Sequelize.STRING,
  note14: Sequelize.STRING,
  note15: Sequelize.STRING,
  note16: Sequelize.STRING,
  note17: Sequelize.STRING,
  note18: Sequelize.STRING,
  shell: Sequelize.INTEGER,
  release_Name: Sequelize.STRING,
  sprint_Master: Sequelize.STRING,
  score: Sequelize.INTEGER
});

// Syncs with DB
Note.sync();

// Makes the Note Model available for other files (will also create a table)
module.exports = Note;

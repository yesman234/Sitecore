// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Note = require("../models/note.js");

// Routes
// =============================================================
module.exports = function (app) {
  // Get all notes
  app.get("/api/all", function (req, res) {
    Note.findAll({}).then(function (results) {
      res.json(results);
    });
  });


  // Get all "high scores" notes (7 or more)
  app.get("/api/notes/high", function (req, res) {
    Note.findAll({
      where: {
        score: {
          $gte: 7
        }
      },
      order: [["score", "DESC"]]
    }).then(function (results) {
      res.json(results);
    });
  });

  // Get all "short" notes (notes 7 or less)
  app.get("/api/notes/low", function (req, res) {
    Note.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  // Add a Note
  app.post("/api/new", function (req, res) {
    console.log("Note Data:");
    console.log(req.body);
    Note.create({
      note: req.body.note,
      note1: req.body.note1,
      note2: req.body.note2,
      note3: req.body.note3,
      note4: req.body.note4,
      note5: req.body.note5,
      note6: req.body.note6,
      note7: req.body.note7,
      note8: req.body.note8,
      note9: req.body.note9,
      note10: req.body.note10,
      note11: req.body.note11,
      note12: req.body.note12,
      note13: req.body.note13,
      note14: req.body.note14,
      note15: req.body.note15,
      note16: req.body.note16,
      note17: req.body.note17,
      note18: req.body.note18,
      shell: req.body.shell,
      release_Name: req.body.release_Name,
      sprint_Master: req.body.sprint_Master,
      score: req.body.score
    }).then(function (results) {
      res.json(results);
    });
  });

  // Delete a note
  app.delete("/api/note/:id", function (req, res) {
    console.log("Note ID:");
    console.log(req.params.id);
    Note.destroy({
      where: {
        id: req.params.id
      }
    }).then(function () {
      res.end();
    });
  });
};

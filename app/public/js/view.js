// The code in add.js handles what happens when the user clicks the "Add a NotenewNote" button.

$(document).ready(function(){

  document.getElementById("date").innerHTML = Date();

      var sum = 0;
  $("select.Score").change(function(){

      var selectedScore = $(this).children("option:selected").val();
      var selectedScorenum=parseInt(selectedScore);
      sum += selectedScorenum;
      sumCal=(sum/15)+"%";
      console.log(sumCal);
      document.getElementById('inc').value = sum;
  });
});
var currentDate = new Date();
var date = currentDate.getDate();
var month = currentDate.getMonth(); //Be careful! January is 0 not 1
var year = currentDate.getFullYear();

var dateString = date + "-" +(month + 1) + "-" + year;

// When user clicks add-btn
$("#make-new").on("click", function(event) {
  event.preventDefault();

  // Make a newNote object
  var newNote = {
            note: $("#note").val().trim(),
            note1: $("#note1").val().trim(),
            note2: $("#note2").val().trim(),
            note3: $("#note3").val().trim(),
            note4: $("#note4").val().trim(),
            note5: $("#note5").val().trim(),
            note6: $("#note6").val().trim(),
            note7: $("#note7").val().trim(),
            note8: $("#note8").val().trim(),
            note9: $("#note9").val().trim(),
            note10: $("#note10").val().trim(),
            note11: $("#note11").val().trim(),
            note12: $("#note12").val().trim(),
            note13: $("#note13").val().trim(),
            note14: $("#note14").val().trim(),
            note15: $("#note15").val().trim(),
            note16: $("#note16").val().trim(),
            note17: $("#note17").val().trim(),
            note18: $("#note18").val().trim(),
            shell: $("#shell").val().trim(),
            release_Name: $("#release_Name").val().trim(),
            sprint_Master: $("#sprint_Master").val().trim(),
            score: $("#inc").val().trim(),
            updatedAt: $("#date").val().trim(),
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newNote)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#note").val("");
  $("#note1").val("");
  $("#note2").val("");
  $("#note3").val("");
  $("#note4").val("");
  $("#note5").val("");
  $("#note6").val("");
  $("#note7").val("");
  $("#note8").val("");
  $("#note9").val("");
  $("#note10").val("");
  $("#note11").val("");
  $("#note12").val("");
  $("#note13").val("");
  $("#note14").val("");
  $("#note15").val("");
  $("#note16").val("");
  $("#note17").val("");
  $("#note18").val("");
  $("#shell").val("");
  $("#release_name").val("");
  $("#sprint_Master").val("");
  $("#inc").val("");

});

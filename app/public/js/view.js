$(document).ready(function () {
  // Data Picker Initialization

  var sum = 0;
  $("select.Score").change(function () {

    var selectedScore = $(this).children("option:selected").val();
    var selectedScorenum = parseInt(selectedScore);
    sum += selectedScorenum;
    sumCal = (sum / 15) * 100;

    if (sumCal <= 40) {
      $('#sumCali').css({ "color": "red"});
    }
    if (sumCal >= 60) {
      $('#sumCali').css({ "color": "orange"});
    }
    if (sumCal >= 70) {
      $('#sumCali').css({ "color": "yellow"});
    }
    if (sumCal >= 80) {
      $('#sumCali').css({ "color": "green"});
    }
    if (sumCal >= 90) {
      $('#sumCali').css({ "color": "indigo"});
    }
    sumCal = sumCal.toFixed(2) + "%";
    document.getElementById('inc').value = sum;
    
    $('#sumCali').html(sumCal);
  });

});

$('#shell').pickadate({
  selectMonths: true,
  selectYears: 20
});
$('select').material_select();
// function task(e)
// {
//   var hotfix=0;
//   if(e.target.checked)
//   {
//     return hotfix+=1
//     ///do post request with 1 in parameter
//     console.log("do post request with 1 in parameter");
//   }
//   else
//   {
//     return hotfix+=0
//     ///do post request with 0 parameter
//     console.log("do post request with 0 parameter");
//   }
// }

// When user clicks add-btn
$("#make-new").on("click", function (event) {
  event.preventDefault();
  location.reload();


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
    shell: $("#shell").val().trim(),
    release_Name: $("#release_Name").val().trim(),
    sprint_Master: $("#sprint_Master").val().trim(),
    score: $("#inc").val().trim(),
    updatedAt: $("#date").val().trim(),
    hotfix: $("#cbx").val().trim(),
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newNote)
    // On success, run the following code
    .then(function (data) {
      console.log(data);
      ;
    });
});
// Make a get request to our api route that will return every "low" score (7 or less)
$.get("/api/notes/low", function(data) {

  // For each score that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold score data
    var wellSection = $("<table class='table table-dark'>");
    // Add a class to this div: 'well'
    wellSection.addClass("well");
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "score-well-" + i);
    // Append the well to the well section
    $("#well-section").append(wellSection);

    // Now  we add our score data to the well we just placed on the page
    $("#score-well-" + i).append("<tr><td>Note1: " + data[i].note1 + "</td></tr>");
    $("#score-well-" + i).append("<tr><td>Note2: " + data[i].note2 + "</td></tr>");
    $("#score-well-" + i).append("<tr><td>Note3: " + data[i].note3 + "</td></tr>");
    $("#score-well-" + i).append("<tr><td>Note4: " + data[i].note4 + "</td></tr>");
    $("#score-well-" + i).append("<tr><td>Note5: " + data[i].note5 + "</td></tr>");
    $("#score-well-" + i).append("<tr><td>Note6: " + data[i].note6 + "</td></tr>");
    $("#score-well-" + i).append("<tr><td>Note7: " + data[i].note7 + "</td></tr>");
    $("#score-well-" + i).append("<tr><td>Note8: " + data[i].note8 + "</td></tr>");
    $("#score-well-" + i).append("<tr><td>Note9: " + data[i].note9 + "</td></tr>");
    $("#score-well-" + i).append("<tr><td>Note10: " + data[i].note10 + "</td></tr>");
    $("#score-well-" + i).append("<tr><td>Note11: " + data[i].note11 + "</td></tr>");
    $("#score-well-" + i).append("<tr><td>Note12: " + data[i].note12 + "</td></tr>");
    $("#score-well-" + i).append("<tr><td>Note13: " + data[i].note13 + "</td></tr>");
    $("#score-well-" + i).append("<tr><td>Note14: " + data[i].note14 + "</td></tr>");
    $("#score-well-" + i).append("<tr><td>Note15: " + data[i].note15 + "</td></tr>");
    $("#score-well-" + i).append("<tr><td>Note16: " + data[i].note16 + "</td></tr>");
    $("#score-well-" + i).append("<tr><td>Note17: " + data[i].note17 + "</td></tr>");
    $("#score-well-" + i).append("<tr><td>Note18: " + data[i].note18 + "</td></tr>");
    $("#score-well-" + i).append("<tr><td>Date: " + data[i].date_Time + "</td></tr>");
    $("#score-well-" + i).append("<tr><td>Release_name: " + data[i].release_Name + "</td></tr>");
    $("#score-well-" + i).append("<tr><td>Sprint_master: " + data[i].sprint_Master + "</td></tr>");
    $("#score-well-" + i).append("<tr><td>Score: " + data[i].score + "</td></tr>");
    console.log(data);

  }
});

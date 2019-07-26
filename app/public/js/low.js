// Make a get request to our api route that will return every "low" score (7 or less)
$.get("/api/notes/low", function(data) {

  // For each score that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold score data
    var wellSection = $("<div>");
    // Add a class to this div: 'well'
    wellSection.addClass("well");
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "score-well-" + i);
    // Append the well to the well section
    $("#well-section").append(wellSection);

    // Now  we add our score data to the well we just placed on the page
    $("#score-well-" + i).append("<td><strong>Note1: " + data[i].note1 + "</strong></td>");
    $("#score-well-" + i).append("<td>Note2: " + data[i].note2 + "</td>");
    $("#score-well-" + i).append("<td>Note3: " + data[i].note3 + "</td>");
    $("#score-well-" + i).append("<td>Note4: " + data[i].note4 + "</td>");
    $("#score-well-" + i).append("<td>Note5: " + data[i].note5 + "</td>");
    $("#score-well-" + i).append("<td>Note6: " + data[i].note6 + "</td>");
    $("#score-well-" + i).append("<td>Note7: " + data[i].note7 + "</td>");
    $("#score-well-" + i).append("<td>Note8: " + data[i].note8 + "</td>");
    $("#score-well-" + i).append("<td>Note9: " + data[i].note9 + "</td>");
    $("#score-well-" + i).append("<td>Note10: " + data[i].note10 + "tdh4>");
    $("#score-well-" + i).append("<td>Note11: " + data[i].note11 + "tdh4>");
    $("#score-well-" + i).append("<td>Note12: " + data[i].note12 + "tdh4>");
    $("#score-well-" + i).append("<td>Note13: " + data[i].note13 + "tdh4>");
    $("#score-well-" + i).append("<td>Note14: " + data[i].note14 + "tdh4>");
    $("#score-well-" + i).append("<td>Note15: " + data[i].note15 + "tdh4>");
    $("#score-well-" + i).append("<td>Note16: " + data[i].note16 + "tdh4>");
    $("#score-well-" + i).append("<td>Note17: " + data[i].note17 + "tdh4>");
    $("#score-well-" + i).append("<td>Note18: " + data[i].note18 + "tdh4>");
    $("#score-well-" + i).append("<td>Score: " + data[i].score + "</td>");
    console.log(data);

  }
});

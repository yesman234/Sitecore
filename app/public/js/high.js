// Make a get request to our api route that will return every "high" score (7 or more)
$('#highButton').on('click', function(){
$.ajax({
    type: 'GET',
    path:'/api/notes/high',
    data: param = "",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: successFunc,
    error: errorFunc
  }).success(function(res){
    for (var i = 0; i < data.length; i++) {
      // Create a parent div to hold note data
      var wellSection = $("<div>");
      // Add a class to this div: 'well'
      wellSection.addClass("well");
      // Add an id to the well to mark which well it is
      wellSection.attr("id", "note-well-" + i);
      // Append the well to the well section
      $("#well-section").append(wellSection);
  
      // Now  we add our score data to the well we just placed on the page
      $("#score-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].note + "</h2>");
      $("#score-well-" + i).append("<h3>Note1: " + data[i].note1 + "</h4>");
      $("#score-well-" + i).append("<h3>Note2: " + data[i].note2 + "</h4>");
      $("#score-well-" + i).append("<h3>Note3: " + data[i].note3 + "</h4>");
      $("#score-well-" + i).append("<h3>Note4: " + data[i].note4 + "</h4>");
      $("#score-well-" + i).append("<h3>Note5: " + data[i].note5 + "</h4>");
      $("#score-well-" + i).append("<h3>Note6: " + data[i].note6 + "</h4>");
      $("#score-well-" + i).append("<h3>Note7: " + data[i].note7 + "</h4>");
      $("#score-well-" + i).append("<h3>Note8: " + data[i].note8 + "</h4>");
      $("#score-well-" + i).append("<h3>Note9: " + data[i].note9 + "</h4>");
      $("#score-well-" + i).append("<h3>Note10: " + data[i].note10 + "</h4>");
      $("#score-well-" + i).append("<h3>Note11: " + data[i].note11 + "</h4>");
      $("#score-well-" + i).append("<h3>Note12: " + data[i].note12 + "</h4>");
      $("#score-well-" + i).append("<h3>Note13: " + data[i].note13 + "</h4>");
      $("#score-well-" + i).append("<h3>Note14: " + data[i].note14 + "</h4>");
      $("#score-well-" + i).append("<h3>Note15: " + data[i].note15 + "</h4>");
      $("#score-well-" + i).append("<h3>Note16: " + data[i].note16 + "</h4>");
      $("#score-well-" + i).append("<h3>Note17: " + data[i].note17 + "</h4>");
      $("#score-well-" + i).append("<h3>Note18: " + data[i].note18 + "</h4>");
      $("#score-well-" + i).append("<h3>Score: " + data[i].score + "</h4>");
      console.log(data);
  
    }
  });
  }).fail(function(err){
console.log(err)
  });



  
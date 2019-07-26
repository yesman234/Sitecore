
// Make a get request to our api route that will return every note
$.get("/api/all", function(data) {
  // For each note that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold note data
    var wellSection = $("<table class='table table-dark'>");
    // Add a class to this div: 'well'
    wellSection.addClass("well");
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "score-well-" + i);
    // Append the well to the well section
    $("#well-section").append(wellSection);

   // Now  we add our score data to the well we just placed on the page
  //  $('table tr td' + i span).html(data[i].note);
   
   $("#score-well-" + i).append("<tr><td><p>Web Team representative for escalation chosen: " + data[i].note + "</p>");
   $("#score-well-" + i).append("<p>Content/CMS Freeze (EoD): " + data[i].note1 + "</p>");
   $("#score-well-" + i).append("<p>Complete rollback package from master + TDS sync (11AM completion): " + data[i].note2 + "</p>");
   $("#score-well-" + i).append("<p>Validate freeze was adhered to after TDS sync: " + data[i].note3 + "</p>");
   $("#score-well-" + i).append("<p>Deploy rollback package to QA, and test it (2PM completion) (If all goes well, we won't need this package, but it must be tested in case release package breaks in Production.): " + data[i].note4 + "</p>");
   $("#score-well-" + i).append("<p>In subtask of the CHG identify yourself as the escalation person if there are any issues with the release.: " + data[i].note5 + "</p>");
   $("#score-well-" + i).append("<p>QA Certify release package (CoB): " + data[i].note6 + "</p>");
   $("#score-well-" + i).append("<p>Enter Master & Release package version numbers in the Implementation Tasks field of the RBR (Don't add time): " + data[i].note7 + "</p>");
   $("#score-well-" + i).append("<p>Deploy release package to Production CM, and test it (before going home): " + data[i].note8 + "</p>");
   $("#score-well-" + i).append("<p>Generate QA certification.: " + data[i].note9 + "</p>");
   $("#score-well-" + i).append("<p>Released on time: " + data[i].note10 + "</p>");
   $("#score-well-" + i).append("<p>Rolled back?: " + data[i].note11 + "</p>");
   $("#score-well-" + i).append("<p>Web team PPT features/bug fixes and replies to all: " + data[i].note12 + "</p>");
   $("#score-well-" + i).append("<p>Tag release, merge release to master, and merge master to develop: " + data[i].note13 + "</p>");
   $("#score-well-" + i).append("<p>Date: " + data[i].shell + "</p>");
   $("#score-well-" + i).append("<p>Release_name: " + data[i].release_Name + "</p>");
   $("#score-well-" + i).append("<p>Sprint_master: " + data[i].sprint_Master + "</p>");
   $("#score-well-" + i).append("<p>Score: " + data[i].score + "</p></td></tr>");


   console.log(data);
  }
});

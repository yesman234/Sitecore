
// Make a get request to our api route that will return every note
$.get("/api/low/"+window.location.href.split("/").pop(), function(data) {
  // For each note that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold note data
    var wellSection = $(`<a table class='table table-fluid' href='/sorted/${data[i].id}'>`);
    // Add a class to this div: 'well'
    wellSection.addClass("well");
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "score-well-" + i);
    // Append the well to the well section
    $("#well-section").append(wellSection);

   // Now  we add our score data to the well we just placed on the page

   $("#score-well-" + i).append("<td>Date: " +
      data[i].shell + "<td>Release_name: "+data[i].release_Name 
        +"<td>Sprint_master: "+data[i].sprint_Master + "<td>Score: "
          +data[i].score+"</td></td></td></td>");
  

   console.log(data);
  }
});

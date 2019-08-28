
// Make a get request to our api route that will return every note
$.get("/api/results/"+window.location.href.split("/").pop(), function(data) {
    // For each note that our server sends us back
    for (var i = 0; i < data.length; i++) {
      // Create a parent div to hold note data
      var wellSection = $(`<a div class='container-fluid' href='/results/${data[i].id}'>`);
      // Add a class to this div: 'well'
      wellSection.addClass("well");
      // Add an id to the well to mark which well it is
      wellSection.attr("id", "score-well-" + i);
      // Append the well to the well section
      $("#well-section").append(wellSection);
  
     // Now  we add our score data to the well we just placed on the page
  
     $("#score-well-" + i).append(`
     <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <script src="https://code.jquery.com/jquery.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

  <link rel="stylesheet" type="text/css" src="styles/low.css">



  <title>Document</title>
</head>
<body>
     <div class="container">
       <div class="row">
         <div class="col-lg">
           <div class="card">
             <div class="card-header" style="background-color:black;color:white">
               <i class="fa fa-align-justify" id="date"></i> Release Web HotFix</div>
             <div class="card-header">
               <i class="fa fa-align-justify"></i>Sitecore Release Scorecard</div>
             <td>
               <div class="container">
                 <div class="md-form">
                   <input placeholder="${data[i].shell}" type="text" id="shell" class="form-control datepicker">
                   <label for="shell"></label>
   
                   Release Name:<input id="release_Name" placeholder="${data[i].release_Name}">
                   Sprint Master:<input id="sprint_Master" placeholder="${data[i].sprint_Master}">
                 </div>
               </div>
             </td>
             
             <div class="card-body">
   
               <table class="table table-responsive-sm">
   
                 <thead>
                   <tr>
                     <th>Step</th>
                     <th>Score</th>
                     <th>Exception(1 or 0)</th>
                   </tr>
                 </thead>
   
                 <!-- wwrap entire table in form  -->
                 <thead style="background-color:black;color:white" class="card-header">
                   <tr>
                     <th>Start of Sprint</th>
                   </tr>
                 </thead>
                 <form id="form">
                   <tr>
                     <td>Web Team representative for escalation chosen</td>
                     <td> <select class="Score">
                         <option value="0">0</option>
                         <option value="1">1</option>>1</td>
                     </select>
                     <td form action="/html/tags/html_form_tag_action.cfm" method="post">
                       <form>
                         <textarea rows="5" cols="50" name="comment" id="note"
                           style="font-family:sans-serif;font-size:1.2em;">
                           ${data[i].note}
                               </textarea>
                     </td>
                   </tr>
                   <form id="form">
                     <tr>
                       <td>Create change ticket if not already created by Scrum Master</td>
                       <td> <select class="Score">
                           <option value="0">0</option>
                           <option value="1">1</option>>1</td>
                       </select>
                       <td form action="/html/tags/html_form_tag_action.cfm" method="post">
                         <form>
                           <textarea rows="5" cols="50" name="comment" id="note1"
                             style="font-family:sans-serif;font-size:1.2em;">
                             ${data[i].note1}
                                 </textarea>
   
   
                       </td>
                     </tr>
                     <thead style="background-color:black;color:white" class="card-header">
                       <tr>
                         <th>Throughout Sprint</th>
                       </tr>
                     </thead>
                     <form id="form">
                       <tr>
                         <td><i>Encourage</i> prioritization ahead of any other task (each developer should thoroughly test
                           all tickets prior to hand-off to QA-buddy)</td>
                         <td> <select class="Score">
                             <option value="0">0</option>
                             <option value="1">1</option>>1</td>
                         </select>
                         <td form action="/html/tags/html_form_tag_action.cfm" method="post">
                           <form>
                             <textarea rows="5" cols="50" name="comment" id="note2"
                               style="font-family:sans-serif;font-size:1.2em;">
                               ${data[i].note2}
                               </textarea>
   
   
                         </td>
                       </tr>
                       <thead style="background-color:black;color:white" class="card-header">
                         <tr>
                           <th>3 Days Prior <i>(Thursday on normal release pattern)</i></th>
                         </tr>
                       </thead>
   
                       <tr>
                         <td>Code/CMS Freeze (EoD)</td>
                         <td> <select class="Score">
                             <option value="0">0</option>
                             <option value="1">1</option>>1</td>
                         <td form action="/html/tags/html_form_tag_action.cfm" method="post">
                           <div>
                             <textarea name="comment" id="note3" style="font-family:sans-serif;font-size:1.2em;">
                             ${data[i].note3}
                               </textarea>
                           </div>
   
                         </td>
                       </tr>
                       <tr>
                         <thead>
                           <tr>
                             <th style="background-color:black;color:white" class="card-header">2 Days Prior <i>(Friday on
                                 normal release pattern)</i></th>
                           </tr>
                         </thead>
                       </tr>
                       <tr>
                         <td>Complete merge master to release</td>
                         <td> <select class="Score">
                             <option value="0">0</option>
                             <option value="1">1</option>>1</td>
                         <td form action="/html/tags/html_form_tag_action.cfm" method="post">
                           <div>
                             <textarea name="comment" id="note4" style="font-family:sans-serif;font-size:1.2em;">
                             ${data[i].note4}

                                     </textarea>
                           </div>
   
                         </td>
                       </tr>
                       <tr>
                         <td>Validate freeze was adhered to after TDS sync</td>
                         <td> <select class="Score">
                             <option value="0">0</option>
                             <option value="1">1</option>>1</td>
                         <td form action="/html/tags/html_form_tag_action.cfm" method="post">
                           <div>
                             <textarea name="comment" id="note5" style="font-family:sans-serif;font-size:1.2em;">
                             ${data[i].note5}

                                     </textarea>
                           </div>
   
                         </td>
                       </tr>
                       <tr>
                         <td>In subtask of the CHG identify yourself as the escalation person if there are any issues with
                           the release.</td>
                         <td> <select class="Score">
                             <option value="0">0</option>
                             <option value="1">1</option>>1</td>
                         <td form action="/html/tags/html_form_tag_action.cfm" method="post">
                           <div>
                             <textarea name="comment" id="note6" style="font-family:sans-serif;font-size:1.2em;">
                             ${data[i].note6}

                                     </textarea>
                           </div>
   
                         </td>
                       </tr>
                       <thead>
                         <tr>
                           <th style="background-color:black;color:white" class="card-header">Day Before <i>(Mondays on
                               normal
                               release pattern)</i></th>
                         </tr>
                       </thead>
                       <tr>
                         <td>All bug fixes are done (CoB)</td>
                         <td> <select class="Score">
                             <option value="0">0</option>
                             <option value="1">1</option>>1</td>
                         <td form action="/html/tags/html_form_tag_action.cfm" method="post">
                           <div>
                             <textarea name="comment" id="note7" style="font-family:sans-serif;font-size:1.2em;">
                             ${data[i].note7}

                                     </textarea>
                           </div>
   
                         </td>
                       </tr>
                       <thead>
                         <tr>
                           <th style="background-color:black;color:white" class="card-header">Day of <i>(Tuesdays on normal
                               release pattern)</i></th>
                         </tr>
                       </thead>
                       <tr>
                         <td>Run Autonimation test (katalon)</td>
                         <td> <select class="Score" id="option1">
                             <option value="0">0</option>
                             <option value="1">1</option>>1</td>
                         <td form action="/html/tags/html_form_tag_action.cfm" id="commentUserInput" method="post">
                           <div>
                             <textarea name="comment" id="note8" style="font-family:sans-serif;font-size:1.2em;">
                             ${data[i].note8}
                                     </textarea>
                           </div>
   
                         </td>
                       </tr>
                       <tr>
                         <td>QA certify release package(CoB)</td>
                         <td> <select class="Score">
                             <option value="0">0</option>
                             <option value="1">1</option>>1</td>
                         <td form action="/html/tags/html_form_tag_action.cfm" method="post">
                           <div>
                             <textarea name="comment" id="note9" style="font-family:sans-serif;font-size:1.2em;">
                             ${data[i].note9}
                                     </textarea>
                           </div>
   
                         </td>
                       </tr>
                       <tr>
                         <td>Deploy release package to Produciton Staging, perform a manual Smart Publish & test/email
                           Webteam/Media</td>
                         <td> <select class="Score">
                             <option value="0">0</option>
                             <option value="1">1</option>>1</td>
                         <td form action="/html/tags/html_form_tag_action.cfm" method="post">
                           <div>
                             <textarea name="comment" id="note10" style="font-family:sans-serif;font-size:1.2em;">
                             ${data[i].note10}
                                     </textarea>
                           </div>
   
                         </td>
                       </tr>
                       <thead style="background-color:black;color:white" class="card-header">
   
                         <thead style="background-color:black;color:white" class="card-header">
                           <tr>
                             <th><i>The Morning After (Wednesday)</i></th>
                           </tr>
                         </thead>
                         <tr>
                           <td>Send PPT email to webteam </td>
                           <td> <select class="Score">
                               <option value="0">0</option>
                               <option value="1">1</option>>1</td>
                           <td form action="/html/tags/html_form_tag_action.cfm" method="post">
                             <div>
                               <textarea name="comment" id="note11" style="font-family:sans-serif;font-size:1.2em;">
                               ${data[i].note11}
                                     </textarea>
                             </div>
   
                           </td>
                         </tr>
                         <tr>
                           <td>Web team PPT features/bug fixes and note that it was verified in production when closing
                           </td>
                           <td> <select class="Score">
                               <option value="0">0</option>
                               <option value="1">1</option>>1</td>
                           <td form action="/html/tags/html_form_tag_action.cfm" method="post">
                             <div>
                               <textarea name="comment" id="note12" style="font-family:sans-serif;font-size:1.2em;">
                               ${data[i].note12}
                                     </textarea>
                             </div>
   
                           </td>
                         </tr>
                         <tr>
                           <td>Tag release, merge release to master, and merge master to develop</td>
                           <td> <select class="Score">
                               <option value="0">0</option>
                               <option value="1">1</option>>1</td>
                           <td form action="/html/tags/html_form_tag_action.cfm" method="post">
                             <div>
                               <textarea name="comment" id="note13" style="font-family:sans-serif;font-size:1.2em;">
                               ${data[i].note13}
                                     </textarea>
                             </div>
   
                           </td>
                         </tr>
                         <thead style="background-color:black;color:white" class="card-header">
                           <tr>
                             <th><i>After-Action</i></th>
                           </tr>
                         </thead>
   
                         <tr>
                           <td>Schedule after-action with Represenative & Review in Demo/Retro</td>
                           <td> <select class="Score">
                               <option value="0">0</option>
                               <option value="1">1</option>>1</td>
                           <td form action="/html/tags/html_form_tag_action.cfm" method="post">
                             <div>
                               <textarea name="comment" id="note14" style="font-family:sans-serif;font-size:1.2em;">
                               ${data[i].note14}
                                     </textarea>
                             </div>
                             <div id="action-button">
                               <button id="make-new" class="btn btn-success">Submit</button>
                             </div>
                           </td>
   
                         </tr>
                         <thead style="background-color:black;color:white" class="card-header">
                         <tfoot>
   
                           <th><i>Total</i> <input type="input" id="inc" value="" style="width: 25px;" placeholder="${data[i].score}"> out of 14  </input><br><span id="sumCali"></span>
                           </th>
                           </tr>
                       </thead>
   
                       </tfoot>
                       <a href="/all" class="btn btn-success btn-lg">
                         <span class="fa fa-th-list"></span>History</a>
                         <a href="/" class="btn btn-success btn-lg">
                         <span></span>New</a>

   
                     </form>
               </table>`);
    
              //  ("<td>Date: " +
              //  data[i].shell + "<td>Release_name: "+data[i].release_Name 
              //    +"<td>Sprint_master: "+data[i].sprint_Master + "<td>Score: "
              //      +data[i].score+"</td></td></td></td>");
     console.log(data);
    }
  });
  
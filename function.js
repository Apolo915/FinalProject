
  window.onload = function(event){
    var tableCode = 
    "<table> \
    <tr>\
    <th> Game Name </th>  <th>Platforms</th>\
    </tr> ";

    fetch(" https://lime-faithful-hippo.cyclic.app/api/games").then(function(response){
    return response.json()
  })
  .then(function(convertedObject){
    console.log((convertedObject));

    convertedObject.forEach(function(currentGame) {
        tableCode += `<tr><td><a href="leaderboard.html?id=${currentGame.id}">${currentGame.GameName}</a></td><td>${currentGame.Platform}</td></tr>`;

    
    })


    tableCode += "</table>";


    document.getElementById("gametable").innerHTML = tableCode;
 });
    
    
  };

  function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    let y = document.forms["myForm"]["fplatform"].value;
    if (y == "") {
      alert("Platform must be filled out");
      return false;
    }
  }
  $(document).ready(function(){
    $("submit").click(function(){
      $.post("https://lime-faithful-hippo.cyclic.app/api/games",
      {
        name: "fname",
        Platform: "fplatform"
      },
      function(data,status){
        alert("Data: " + data + "\nStatus: " + status);
      });
    });
  });

  
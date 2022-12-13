window.onload = function(event){
    var tableCode = 
    "<table> \
    <tr>\
    <th>Player </th>   <th>Score </th>  <th>Time</th>\
    </tr> ";

    fetch(" https://lime-faithful-hippo.cyclic.app/api/leaderBoard/id").then(function(response){
    return response.json()
  })
  .then(function(convertedObject){
    console.log((convertedObject));
  })
};


function validateForm() {
    let x = document.forms["myForm"]["fplayer"].value;
    
    if (x == "") {
      alert("Player must be filled out");
      return false;
    }
    let y = document.forms["myForm"]["fscore"].value;
    if (y == "") {
      alert("Score must be filled out");
      return false;
    }
    let z = document.forms["myForm"]["ftime"].value;
    if (z == "") {
      alert("Time must be filled out");
      return false;
    }
  }
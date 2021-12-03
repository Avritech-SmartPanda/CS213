function validateAPR() {
  if (document.getElementById('apr').value < 0 || document.getElementById('apr').value > 25) {
      document.getElementById('rateValidation').innerHTML = "APR value must be less than or equal to 25!";
  }
  else {
      document.getElementById('rateValidation').innerHTML = " ";
  }
}

function validateTerm() {
  if (document.getElementById('term').value < 0 || document.getElementById('term').value >= 41) {
      document.getElementById('termValidation').innerHTML = "Term value must be less than or equal to 40!";
  }
  else {
      document.getElementById('termValidation').innerHTML = " ";
  }
}



//JSON  
function getJsonText() {
  var info = document.getElementById("file").value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
     if (this.readyState == 4 && this.status == 200) {
        var result = JSON.parse(this.responseText);
      //  displayResults(result);
     }
     if (this.readyState == 4 && this.status == 404) {
     this.statusText;
     }
  };
  xhttp.open("GET", 'assign10.php', true);
  xhttp.send();
}

// function displayResults(result) {
//   var content = "";
//   var students = result.students;
//   for (let i = 0; i < students.length; i++) {
//      content += "<div>" +
//       "<b>Name: </b>" + students[i].first + " " + students[i].last + "  " + "</br>" +
//       "<b>Address: </b>" +  students[i].address.city + ", " +  students[i].address.state + ", " +  students[i].address.zip +"</br>" +
//       "<b>GPA: </b>" + students[i].gpa + "  " + "</br>" +
//       "<b>Major: </b>" + students[i].major + "</br></br> " + "</div>";
//   }
//   document.getElementById('json_content').innerHTML = content;
// }
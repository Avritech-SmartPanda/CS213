function changeCountry(selected_city) {
   if (selected_city.value == 'USA') {
      this.getUSA();
   } else if (selected_city.value == 'Canada') {
      this.getCanada();
   } else if (selected_city.value == 'Mexico') {
      this.getMexico();
   } else if (selected_city.value == 'Russia') {
      this.getRussia();
   }
}



//AJAX  
function getUSA() {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         document.getElementById("country_content").innerHTML = this.responseText;
      }
   };
   xhttp.open("GET", "usa.txt", true);
   xhttp.send();
}

function getCanada() {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         document.getElementById("country_content").innerHTML = this.responseText;
      }
   };
   xhttp.open("GET", "canada.txt", true);
   xhttp.send();
}
function getMexico() {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         document.getElementById("country_content").innerHTML = this.responseText;
      }
   };
   xhttp.open("GET", "mexico.txt", true);
   xhttp.send();
}
function getRussia() {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         document.getElementById("country_content").innerHTML = this.responseText;
      }
   };
   xhttp.open("GET", "russia.txt", true);
   xhttp.send();
}

//JSON  
function getJsonText() {
   var info = document.getElementById("file").value;
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         var result = JSON.parse(this.responseText);
        displayResults(result);
      }
      if (this.readyState == 4 && this.status == 404) {
         document.getElementById("json_content").innerHTML = "File " + this.statusText;
      }
   };
   xhttp.open("GET", info, true);
   xhttp.send();
}

function displayResults(result) {
   var content = "";
   var students = result.students;
   for (let i = 0; i < students.length; i++) {
      content += "<div>" +
       "<b>Name: </b>" + students[i].first + " " + students[i].last + "  " + "</br>" +
       "<b>Address: </b>" +  students[i].address.city + ", " +  students[i].address.state + ", " +  students[i].address.zip +"</br>" +
       "<b>GPA: </b>" + students[i].gpa + "  " + "</br>" +
       "<b>Major: </b>" + students[i].major + "</br></br> " + "</div>";
   }
   document.getElementById('json_content').innerHTML = content;
}
function refresh() {
  document.getElementById("content").innerHTML = "Page Reset Successful";
  document.getElementById("title").innerHTML = "";
  document.getElementById("tMethod").innerHTML = "";
}

function firstStateError(input) {
  var stateLetters = /[A-Z]{2}/;
  if (input.value.match(stateLetters)) {
    document.getElementById("errorMessage").innerHTML = "";
    return true;
  }
  else {
    document.getElementById("errorMessage").innerHTML = "Make sure both states are entered correctly: XX";
    return false;
  }
}

function secondStateError(input) {
  var stateLetters = /[A-Z]{2}/;
  if (input.value.match(stateLetters)) {
    document.getElementById("errorMessage").innerHTML = "";
    return true;
  }
  else {
    document.getElementById("errorMessage").innerHTML = "Make sure both states are entered correctly: XX";
    return false;
  }
}

function getText() {
  var xhttp = new XMLHttpRequest();
  var startC = document.getElementById("startCity").value;
  var startS = document.getElementById("startState").value;
  var endC = document.getElementById("endCity").value;
  var endS = document.getElementById("endState").value;
  var str = "/cgi-bin/cs213/mileageAjaxJSON/?startCity=" + startC + "&startState=" + startS + "&endCity=" + endC + "&endState=" + endS;
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var jResponse = JSON.parse(this.responseText).trip;
      displayResults(jResponse);
    }
  };

  xhttp.open("GET", str, true);
  xhttp.send();
}

function displayResults(jResponse) {
  var content = "It is " + jResponse.miles + " miles from " + jResponse.startcity + " to " + jResponse.endcity;
  document.getElementById('content').innerHTML = content;
  document.getElementById('title').innerHTML = "You can travel by these methods";
  jResponse.tmode.forEach(transport => {
    document.getElementById("tMethod").innerHTML += "<li>" + transport + "</li>";
  });
}
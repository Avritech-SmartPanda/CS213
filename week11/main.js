function reset() {
  document.getElementById("first_name").focus();
}

function validateForm() {
  let firstname = document.getElementById("first_name").value;
  let lastname = document.getElementById("last_name").value;
  let address = document.getElementById("address").value
  let exp = document.getElementById("exp_date").value
  if (firstname == "" || firstname == null) {
    document.getElementById("nameError").innerHTML = "First name not be empty";
    document.getElementById("first_name").focus();
    return false;
  } else if (lastname == "" || lastname == null) {
    document.getElementById("surnameError").innerHTML = "Last name should not be empty";
    document.getElementById("last_name").focus();
    return false;
  } else if (address == "" || address == null) {
    document.getElementById("addressError").innerHTML = "Address should not be empty";
    document.getElementById("address").focus();
    return false;
  } else if (exp == "" || exp == null) {
    document.getElementById("cardExpiryDateError").innerHTML = "Expiry date should not be empty";
    document.getElementById("exp_date").focus();
    return false;
  } else{
    document.getElementById("validSubmit").innerHTML = "Submit Successful!";
    return true;
  }

}


function validatePhone(phoneno) {
  let regex = /^\d{3}-\d{3}-\d{4}$/;
  if(phoneno.value.match(regex))
  {
     document.getElementById("phoneError").innerHTML = "";
    return true;
  }
  else
  {
    document.getElementById("phoneError").innerHTML = "Not a valid phone number, please try again in this format: xxx-xxx-xxxx";
    document.getElementById("phone").focus();
    return false;
  }
}

function validateCard(cardno) {
 let regex = /^([0-9]{4}[\s-]?){3}([0-9]{4})$/;
  if(cardno.value.match(regex)){
    document.getElementById("cardNumberError").innerHTML = " ";
    return true;
  }
  else
  {
    document.getElementById("cardNumberError").innerHTML = "Not a valid card number, please try again.Must be 16-digits";
    return false;
  }
}
function validateExpDate(date)
{
  var regex = /^(0[1-9]|1[0-2])\/(20[1][8-9]|20[2-9][0-9]|2100)$/;
  if(date.value.match(regex))
  {
    document.getElementById("cardExpiryDateError").innerHTML = " ";
    return true;
  }
  else
  {
    document.getElementById("cardExpiryDateError").innerHTML = "Must be valid date in this format: xx/xxxx";
    return false;
  }
}
function attachCheckboxHandlers() {
  var el = document.getElementById('items');
  var myItems = el.getElementsByTagName('input');
  for (var i = 0, len = myItems.length; i < len; i++) {
    if (myItems[i].type === 'checkbox') {
      myItems[i].onclick = updateTotal;
    }
  }
}

function updateTotal(e) {
  var form = this.form;
  var val = parseFloat(form.elements['total'].value);
  if (this.checked) {
    val += parseFloat(this.value);
  } else {
    val -= parseFloat(this.value);
  }
  form.elements['total'].value = val.toFixed(2);
}

document.getElementById("reset").addEventListener("click", reset);


//JSON  
// function getJsonText() {
//   var info = document.getElementById("file").value;
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//      if (this.readyState == 4 && this.status == 200) {
//         var result = JSON.parse(this.responseText);
//       //  displayResults(result);
//      }
//      if (this.readyState == 4 && this.status == 404) {
//      this.statusText;
//      }
//   };
//   xhttp.open("GET", 'assign11.php', true);
//   xhttp.send();
// }



function refresh() {
  document.getElementById("refresh").innerHTML = "Page Reset Successful";
}
function submitForm() {
  let fName = document.getElementById("first-name").value;
  let lName = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let pincode = document.getElementById("pincode").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let state = document.getElementById("state").value;
  let country = document.getElementById("country").value;

  let foodChoices = [];
  let cb = document.getElementsByName("food");

  for (let i = 0; i < cb.length; i++) {
    if (cb[i].checked) {
      foodChoices.push(cb[i].value);
    }
  }

  if (foodChoices.length < 2) {
    alert("Please choose at least 2 food items.");
    return;
  }

  let table = document.getElementById("dataTable");
  let newRow = table.insertRow(table.rows.length);
  let val1 = newRow.insertCell(0);
  let val2 = newRow.insertCell(1);
  let val3 = newRow.insertCell(2);
  let val4 = newRow.insertCell(3);
  let val5 = newRow.insertCell(4);
  let val6 = newRow.insertCell(5);
  let val7 = newRow.insertCell(6);
  let val8 = newRow.insertCell(7);
  let val9 = newRow.insertCell(8);
  val1.innerHTML = fName;
  val2.innerHTML = lName;
  val3.innerHTML = email;
  val4.innerHTML = address;
  val5.innerHTML = pincode;
  val6.innerHTML = gender;
  val7.innerHTML = foodChoices.join(", ");
  val8.innerHTML = state;
  val9.innerHTML = country;

  document.getElementById("survey-form").reset();
}

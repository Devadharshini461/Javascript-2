function calcAgeNow() {
  let dob = document.getElementById("dob").value;
  let result = document.getElementById("ageResult");

  if (!dob) {
    result.innerText = "Please select your Date of Birth!";
    return;
  }

  let birth = new Date(dob);
  let today = new Date();

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    // days=-(days)
    months--;
    days += 30;
  }
  if (months < 0) {
    // months=-(months)
    years--;
    months += 12;
  }

  result.innerText = `Your age is ${years+1} years, ${months+1} months, ${days+1} days.`;
}

function calcAgeManual() {
  let dob = document.getElementById("dob").value;
  let otherDate = document.getElementById("manualDate").value;
  let result1 = document.getElementById("ageResult1");

  if (!dob || !otherDate) {
    result1.innerText = "Please select both dates!";
    return;
  }

  let birth = new Date(dob);
  let date = new Date(otherDate);

  if (date < birth) {
    result1.innerText = "Entered date must be after Date of Birth!";
    return;
  }

  let years = date.getFullYear() - birth.getFullYear();
  let months = date.getMonth() - birth.getMonth();
  let days = date.getDate() - birth.getDate();

  if (days < 0) {
    // days=-(days)
    months--;
    days += 30;
  }
  if (months < 0) {
    // months=-(months)
    years--;
    months += 12;
  }

  result1.innerText = `Age from selected date: ${years+1} years, ${months+1} months, ${days+1} days.`;
}


function convertTemp() {
  let value = parseFloat(document.getElementById("tempValue").value);
  let from = document.getElementById("fromUnit").value;
  let to = document.getElementById("toUnit").value;
  let result = document.getElementById("tempResult");

  if (isNaN(value)) {
    result.innerText = "Please enter a valid temperature!";
    return;
  }

  let c;
  if (from === "C") c = value;
  if (from === "F") c = (value - 32) * 5 / 9;
  if (from === "K") c = value - 273.15;

  let output;
  if (to === "C") output = c;
  if (to === "F") output = (c * 9 / 5) + 32;
  if (to === "K") output = c + 273.15;

  result.innerText = `${value}°${from} = ${output.toFixed(2)}°${to}`;
}

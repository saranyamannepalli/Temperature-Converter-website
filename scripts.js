function convertTemp() {
  const temp = document.getElementById("tempInput").value;
  const unit = document.getElementById("unit").value;
  const result = document.getElementById("result");

  if (temp === "") {
    result.innerHTML = "Please enter a temperature";
    return;
  }

  let converted;

  if (unit === "celsius") {
    converted = (temp * 9/5) + 32;
    result.innerHTML = converted.toFixed(2) + " °F";
  } else {
    converted = (temp - 32) * 5/9;
    result.innerHTML = converted.toFixed(2) + " °C";
  }
}


function convertTemp() {

   
    let temp = document.getElementById("temp").value;
    let unit = document.getElementById("unit").value;
    let message = document.getElementById("message");

    
    if (temp === "") {
  message.innerHTML = "Please enter a temperature!";
  message.style.color = "red";
  return;
}
  temp = Number(temp);

  if (!Number.isFinite(temp)) {
    message.innerHTML = "Please enter a valid number!";
    message.style.color = "red";
    alert("please enter vaild number");
    return;
  }

    if (
        (unit === "celsius" && temp < -273.15) ||
        (unit === "fahrenheit" && temp < -459.67) ||
        (unit === "kelvin" && temp < 0)
    ) {
        message.innerHTML =
            "Temperature cannot be below absolute zero!";
        message.style.color = "red";
        return;
    }

   
    let celsius;

    if (unit === "celsius") {
        celsius = temp;
    } else if (unit === "fahrenheit") {
        celsius = (temp - 32) * 5 / 9;
    } else if (unit === "kelvin") {
        celsius = temp - 273.15;
    } else {
        message.innerHTML = "Please select a valid unit!";
        message.style.color = "red";
        return;
    }

   
    let fahrenheit = (celsius * 9 / 5) + 32;
    let kelvin = celsius + 273.15;

   
    document.getElementById("celsius-result").innerHTML =
        celsius.toFixed(2) + " °C";

    document.getElementById("fahrenheit-result").innerHTML =
        fahrenheit.toFixed(2) + " °F";

    document.getElementById("kelvin-result").innerHTML =
        kelvin.toFixed(2) + " K";

   
    message.innerHTML = "Conversion successful!";
    message.style.color = "green";
}

// let new_array = arr.map(function callback( currentValue[, index[, array]])) {

// }[, thisArg]

// const steps = ["one", "two", "three"];
// const stepsHtml = steps.map(function (step) {
//     return `<li>${step}</li>`;
// });
// document.getElementById("myList").innerHTML = stepsHtml.join();

// const buttonElement = document.getElementById("submitButton");

// function copyInput(event) {
//     console.log(event);
// const inputElement = document.getElementById("inputBox");
// const outputElement = document.getElementById("output");
// outputElement.innerHTML = inputElement.value;
// }
// buttonElement.addEventListener("click", copyInput);
const computeWindChill = function(windSpeed, temperature) {
    // Fahrenheit Only
    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
  };
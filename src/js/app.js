// JS Goes here - ES6 supported

// Say hello
console.log("🦊 Hello! Edit me in src/js/app.js");

// CONTACT FORM SLIDER UPDATE

var sliderHeat = document.getElementById("myRange--heat");
var outputHeat = document.getElementById("update--heat");
outputHeat.innerHTML = sliderHeat.value;

sliderHeat.oninput = function() {
    outputHeat.innerHTML = this.value;
}
var sliderBottles = document.getElementById("myRange--bottles");
var outputBottles = document.getElementById("update--bottles");
outputBottles.innerHTML = sliderBottles.value;

sliderBottles.oninput = function() {
    outputBottles.innerHTML = this.value;
}

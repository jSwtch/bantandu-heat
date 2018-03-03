// JS Goes here - ES6 supported

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


// TOTAL COST FUNCTION
var sliderBottles = document.getElementById("myRange--bottles");
var outputTotal = document.getElementById("update--total");
var total = 0;
outputTotal.innerHTML = 35.89;


sliderBottles.oninput = function() {
  outputBottles.innerHTML = this.value;

//APPLY 11% DISCOUNT PER BOTTLE
  for (var i = 0; i < this.value; i++) {
    total += 18.99 * Math.pow(.89, i);
  }

  outputTotal.innerHTML = total.toFixed(2);
  total = 0;
}

// GOOGLE INVISIBLE RECAPTCHA
function validate(event) {
  event.preventDefault();
  if (!document.getElementById('firstName').value) {
    alert("You must add text to the required field");
  } else {
    grecaptcha.execute();
  }
}

function onload() {
  var element = document.getElementById('submit');
  element.onclick = validate;
}

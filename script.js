// var toggleSwitch = document.getElementById("checkbox");

// toggleSwitch.addEventListener("click", function() {
//   if (toggleSwitch.checked) {
//     // Toggle switch ON
//     console.log("Toggle switch is ON");
//   } else {
//     // Toggle switch OFF
//     console.log("Toggle switch is OFF");
//   }
// });


var toggleSwitch = document.getElementById("toggle-switch");
var displayText_1 = document.getElementById("price-1");
var displayText_2 = document.getElementById("price-2");
var displayText_3 = document.getElementById("price-3");

toggleSwitch.addEventListener("click", function() {
  if (toggleSwitch.checked) {
    displayText_1.textContent = "$19.99";
    displayText_2.textContent = "$24.99";
    displayText_3.textContent = "$39.99";
  } else {
    displayText_1.textContent = "$199.99";
    displayText_2.textContent = "$249.99";
    displayText_3.textContent = "$399.99";
  }
});
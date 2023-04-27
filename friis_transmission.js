// const selectElement = document.getElementById("selector");
// console.log(selectElement.value);
// selectElement.addEventListener("change", function () {
//   if (selectElement.value == "freq") {
//     console.log(selectElement.value);
//     document.querySelector("#lambda").value = 0;
//     document.getElementById("lambda").setAttribute("disabled", "true");
//     document.getElementById("frequency").removeAttribute("disabled");
//   } else if (selectElement.value == "lamb") {
//     console.log(selectElement.value);
//     document.querySelector("#frequency").value = 0;
//     document.getElementById("frequency").setAttribute("disabled", "true");
//     document.getElementById("lambda").removeAttribute("disabled");
//   }
// });

// function calc() {
//   var Pt = parseFloat(document.getElementById("Pt").value);
//   var distance = parseFloat(document.getElementById("distance").value);
//   var Gt = parseFloat(document.getElementById("Gt").value);
//   var Gr = parseFloat(document.getElementById("Gr").value);
  
//   var frequency = parseFloat(document.getElementById("frequency").value);
//   document.getElementById("lambda").value = 300000000 / frequency;
//   var lambda = parseFloat(document.getElementById("lambda").value);
//   document.getElementById("frequency").value = 300000000 / lambda;
  
//   var output =
//     (Pt * Gt * Gr * (lambda * lambda) * 0.00633257397) / (distance * distance);
//   document.getElementById("answer").value = output;
//   console.log(output);
// }

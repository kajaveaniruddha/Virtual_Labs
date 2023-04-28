const selectElement = document.getElementById("selector");
console.log(selectElement.value);
selectElement.addEventListener("change", function () {
  if (selectElement.value == "none") {
    document.querySelector("#lambda").value = "";
    document.querySelector("#frequency").value = "";
    document.getElementById("lambda").setAttribute("disabled", "true");
    document.getElementById("frequency").setAttribute("disabled", "true");
    document.querySelector("#answer").value = "";
  } else if (selectElement.value == "freq") {
    document.querySelector("#lambda").value = "";
    document.querySelector("#frequency").value = "";
    document.getElementById("lambda").setAttribute("disabled", "true");
    document.getElementById("frequency").removeAttribute("disabled");
    document.querySelector("#answer").value = "";
  } else if (selectElement.value == "lamb") {
    console.log(selectElement.value);
    document.querySelector("#frequency").value = "";
    document.querySelector("#lambda").value = "";
    document.querySelector("#answer").value = "";
    document.getElementById("frequency").setAttribute("disabled", "true");
    document.getElementById("lambda").removeAttribute("disabled");
  }
});

function calc() {
  var frequency, lambda;
  var Pt = parseFloat(document.getElementById("Pt").value);
  var distance = parseFloat(document.getElementById("distance").value);
  var Gt = parseFloat(document.getElementById("Gt").value);
  var Gr = parseFloat(document.getElementById("Gr").value);
  if (selectElement.value == "freq") {
    frequency = parseFloat(document.getElementById("frequency").value);
    document.getElementById("lambda").value = 300000000 / frequency;
    var output =
      (Pt * Gt * Gr * Math.pow(3 * Math.pow(10, 8), 2) * 0.00633257397) /
      (frequency * frequency * distance * distance);
    document.getElementById("answer").value = output;
  } else if (selectElement.value == "lamb") {
    lambda = parseFloat(document.getElementById("lambda").value);
    document.getElementById("frequency").value = 300000000 / lambda;
    var output =
      (Pt * Gt * Gr * (lambda * lambda) * 0.00633257397) /
      (distance * distance);
    document.getElementById("answer").value = output;
  }

  console.log(output);

  // graph 1
  const ctx = document.getElementById("myChart");
  let cosdata = [];
  let ydata = [];
  var amplitude = Math.sqrt(Pt);
  for (var i = 0; i <= 4 * Math.PI; i += Math.PI / 4) {
    cosdata.push(amplitude * Math.cos(i));
    var temp = i;
    ydata.push(temp.toFixed(2));
  }

  const labels = ydata;
  const data = {
    labels,
    datasets: [
      {
        data: cosdata,
        label: "Pt v/s time",
        // fill:true,
        tension: 0.35,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      radius: 0,
      responsive: true,
    },
  };

  const myChart = new Chart(ctx, config);

  // graph 2
    let cosdata2 = [];
    let ydata2 = [];
    var amplitude=Math.sqrt(output);
    console.log(amplitude);
    for (var i = 0; i <= 4 * Math.PI; i += Math.PI / 4) {
        cosdata2.push(amplitude * Math.cos(i));
        var temp = i;
        ydata2.push(temp.toFixed(2));
        
    }
    
    const labels2 = ydata2;
    const data2 = {
        labels2,
        datasets: [
            {     
                data: cosdata2,
                label: "Pr v/s time",
                // fill:true,
                tension: 0.35,
            },
        ],
    };
    
    const config2 = {
        type: "line",
        data: data2,
        options: {
            radius: 0,
            responsive: true,
        },
    };

    const myChart2 = new Chart(document.querySelector("#myChart2"),config2);
}

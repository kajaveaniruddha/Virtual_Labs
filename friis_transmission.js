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
  let cosdata = [];
  let ydata = [];
  var amplitude = Math.sqrt(Pt);
  for (var i = 0; i <= 4 * Math.PI; i += Math.PI / 4) {
    cosdata.push(amplitude * Math.cos(i));
    var temp = i;
    ydata.push(temp.toFixed(2));
  }

  const data1 = {
    labels: ydata,
    datasets: [
      {
        label: "Wave",
        data: cosdata,
        tension: 0.4,
        fill: false,
        stepped: false,
      },
    ],
  };

  const config1 = {
    type: "line",
    data: data1,
    options: {
      responsive: false,
      interaction: {
        intersect: false,
        axis: "x",
      },
      plugins: {
        title: {
          display: true,
          text: (ctx) =>
            "Pt vs time",
        },
      },
    },
  };

  const actions = [
    {
      name: "Step: false (default)",
      handler: (chart) => {
        chart.data.datasets.forEach((dataset) => {
          dataset.stepped = false;
        });
        chart.update();
      },
    },
    {
      name: "Step: true",
      handler: (chart) => {
        chart.data.datasets.forEach((dataset) => {
          dataset.stepped = true;
        });
        chart.update();
      },
    },
    {
      name: "Step: before",
      handler: (chart) => {
        chart.data.datasets.forEach((dataset) => {
          dataset.stepped = "before";
        });
        chart.update();
      },
    },
    {
      name: "Step: after",
      handler: (chart) => {
        chart.data.datasets.forEach((dataset) => {
          dataset.stepped = "after";
        });
        chart.update();
      },
    },
    {
      name: "Step: middle",
      handler: (chart) => {
        chart.data.datasets.forEach((dataset) => {
          dataset.stepped = "middle";
        });
        chart.update();
      },
    },
  ];
  const myChart1 = new Chart(
    document.getElementById("myChart1"),
    config1,
    actions
  );


  //graph2
  let cosdata2 = [];
  var amplitude = Math.sqrt(output);
  for (var i = 0; i <= 4 * Math.PI; i += Math.PI / 4) {
    cosdata2.push(amplitude * Math.cos(i));
  }

  const data2 = {
    labels: ydata,
    datasets: [
      {
        label: "Wave",
        data: cosdata2,
        tension: 0.4,
        fill: false,
        stepped: false,
      },
    ],
  };

  const config2 = {
    type: "line",
    data: data2,
    options: {
      responsive: false,
      interaction: {
        intersect: false,
        axis: "x",
      },
      plugins: {
        title: {
          display: true,
          text: (ctx) =>
            "Pr vs time",
        },
      },
    },
  };
  const myChart2 = new Chart(
    document.getElementById("myChart2"),
    config2,
    actions
  );
}

introJs().setOptions({
  steps:[{
    title:'Welcome learner',
    intro:'Lets begin with the tutorial for Friis transmission lab.',
    },{
    element:document.getElementById('Pt'),
    intro:"Here you need to enter integer value of power transmitted (watt/m2).",
    },
    {
      element:document.getElementById('Gt'),
      intro:"Here you need to enter integer value of the constant gain in transmissiting power.",
    },
    {
        element:document.getElementById('Gr'),
        intro:"Here you need to enter integer value of constant gain in receiving power.",
        },
    {
      element:document.getElementById('distance'),
      intro:"Here you need to enter integer value of distance (m).",
    },
    {
      element:document.getElementById('selector'),
      intro:"Here you need to select your input option between lambda and frequency then enter the corresponding value into the respective input space.",
      datascrollto:document.getElementById("f"),
    },
    {
      element:document.getElementById('calculate'),
      intro:"Click on this button to get the transmitting power value in watt/m2 along with Pt vs time graph and Pr vs time graph. ",
    },
  
  ],
    dontShowAgain:true,
    showProgress:true,
    tooltipClass: 'customTooltip'
  }).start();

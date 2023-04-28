function calc() {
  var amplitude = document.querySelector(".amplitude").value;
  var phase = document.querySelector(".phase").value;
  var lambda = document.querySelector(".lambda").value;
  var omegatemp = (2 * 3.14) / lambda;
  let omega = omegatemp.toFixed(3);
  var result = `${amplitude}cos(kx-${omega}t+${phase})`;
  document.querySelector(".answer").value = result;

  // graph
  const ctx = document.getElementById("myChart");
  let cosdata = [];
  let ydata = [];
//   for (var i = 0; i <= 360; i++) {
//     cosdata.push(amplitude * Math.cos(i));
//     // ydata.push(i);
//   }
  
  for (var i = 0; i <= 4*Math.PI; i++) {
    ydata.push();
  }
  new Chart(ctx, {
    type: "line",
    data: {
      labels: [0,1,2,3,4,5,6],
      datasets: [
        {
          label: "Acos(wt-kx+phi)",
          data: cosdata,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function calc() {
  var amplitude = document.querySelector(".amplitude").value;
  var phase = document.querySelector(".phase").value;
  var lambda = document.querySelector(".lambda").value;
  var time = document.querySelector(".time").value;
  var ktemp = (2 * 3.14) / lambda;
  let k = ktemp.toFixed(3);
  var omegatemp = (2 * 3.14) / time;
  let omega = omegatemp.toFixed(3);
  var result = `${amplitude}cos(${k}x-${omega}t+${phase})`;
  document.querySelector(".answer").value = result;

  // graph
  const ctx = document.getElementById("myChart");
  let cosdata = [];
  let ydata = [];
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
        labels: result,
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
}

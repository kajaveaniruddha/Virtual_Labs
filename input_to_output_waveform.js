// let numberofinputs=document.querySelector("#numip").value;
const numberofinputs = document.querySelector("#numip");
numberofinputs.addEventListener("change", (event) => {
  document.querySelector(".logicalinputs1").innerHTML = "";
  for (var i = 1; i <= event.target.value; i++) {
    document.querySelector(
      ".logicalinputs1"
    ).innerHTML += `<select class="ip1" id="input${i + 2}">
          <option value="0">0</option>
          <option value="1">1</option>
          </select>`;
  }

  document.querySelector(".logicalinputs2").innerHTML = "";
  for (var i = 1; i <= event.target.value; i++) {
    document.querySelector(
      ".logicalinputs2"
    ).innerHTML += `<select class="ip2" id="input${i + 2}">
                <option value="0">0</option>
                <option value="1">1</option>
                </select>`;
  }
});
console.log("inside");

function gateOutput() {
  var ips1 = [];
  var ips2 = [];
  var out = [];
  ips1.splice(0, ips1.length);
  ips2.splice(0, ips2.length);
  const elements1 = document.getElementsByClassName("ip1");
  const elements2 = document.getElementsByClassName("ip2");
  //   console.log("length "+elements.length);
  //   console.log("length "+elements[2].value);
  for (var i = 0; i < elements1.length; i++) {
    ips1.push(elements1[i].value);
    ips2.push(elements2[i].value);
  }
  // console.log(ips.length+" length");
  var gt = document.getElementById("gateType").value;

  //   console.log(ips[0]);
  switch (gt) {
    case "and":
      out[0] = ips1[0] & ips2[0];
      for (let i = 1; i < ips1.length; i++) {
        out[i] = ips1[i] & ips2[i];
      }
      break;
    case "or":
      out[0] = ips1[0] | ips2[0];
      for (let i = 1; i < ips1.length; i++) {
        out[i] = ips1[i] | ips2[i];
      }
      break;
    case "xor":
      out[0] = ips1[0] ^ ips2[0];
      for (let i = 1; i < ips1.length; i++) {
        out[i] = ips1[i] ^ ips2[i];
      }
    case "xnor":
      out[0] = ips1[0] ^ ips2[0];
      if (out[0] == 1) out[0] = 0;
      else out[0] = 1;
      for (let i = 1; i < ips1.length; i++) {
        out[i] = ips1[i] ^ ips2[i];
        if (out[i] == 1) out[i] = 0;
        else out[i] = 1;
      }
    case "nand":
      out[0] = ips1[0] & ips2[0];
      if (out[0] == 1) out[0] = 0;
      else out[0] = 1;
      for (let i = 1; i < ips1.length; i++) {
        out[i] = ips1[i] ^ ips2[i];
        if (out[i] == 1) out[i] = 0;
        else out[i] = 1;
      }
  }
  document.getElementById("output").value = out;

  var xdata=[];
  for (var i = 0; i < out.length; i++) {
    xdata.push(i);
  }
  
  //input1 graph
  const data1 = {
    labels: xdata,
    datasets: [
      {
        label: "Dataset",
        data: ips1,
        fill: false,
        stepped: true,
      },
    ],
  };

  const config1 = {
    type: "line",
    data:data1,
    options: {
      responsive: true,
      interaction: {
        intersect: false,
        axis: "x",
      },
      plugins: {
        title: {

          display: true,
          text: (ctx) =>
            "Input 2 waveform",
        },
      },
    },
  };

  const actions1 = [
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

  const mychart1 = new Chart(
    document.getElementById("mychart1"),
    config1,
    actions1
  );


    //input2 graph
    const data2 = {
      labels: xdata,
      datasets: [
        {
          label: "Dataset",
          data: ips1,
          fill: false,
          stepped: true,
        },
      ],
    };
  
    const config2 = {
      type: "line",
      data:data2,
      options: {
        responsive: true,
        interaction: {
          intersect: false,
          axis: "x",
        },
        plugins: {
          title: {
            display: true,
            text: (ctx) =>
              "input 1 waveform ",
          },
        },
      },
    };
  
    const actions2 = [
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
  
    const mychart2 = new Chart(
      document.getElementById("mychart2"),
      config2,
      actions2
    );


  //output graph
  const data3 = {
    labels: xdata,
    datasets: [
      {
        label: "Dataset",
        data: out,
        fill: false,
        stepped: true,
      },
    ],
  };

  const config3 = {
    type: "line",
    data:data3,
    options: {
      responsive: true,
      interaction: {
        intersect: false,
        axis: "x",
      },
      plugins: {
        title: {
          display: true,
          text: (ctx) =>
            "Output waveform",
        },
      },
    },
  };

  const actions3 = [
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

  const mychart3 = new Chart(
    document.getElementById("mychart3"),
    config3,
    actions3
  );
}

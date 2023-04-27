// let numberofinputs=document.querySelector("#numip").value;
const numberofinputs = document.querySelector("#numip");
numberofinputs.addEventListener("change", (event) => {
  document.querySelector(".logicalinputs").innerHTML = "";
  for (var i = 1; i <= event.target.value; i++) {
    document.querySelector(
      ".logicalinputs"
    ).innerHTML += `<select class="ip" id="input${i}">
    <option value="0">0</option>
    <option value="1">1</option>
    </select>`;
  }
});

function gateOutput() {
  var ips = [];
  const elements = document.getElementsByClassName("ip");
  //   console.log("length " + arr.length);
  //   console.log("length "+elements.length);
  //   console.log("length "+elements[2].value);
  for (var i = 0; i < elements.length; i++) {
    ips.push(elements[i].value);
  }
  var gt = document.getElementById("gateType").value;
  var out;

  //   console.log(ips[0]);
  switch (gt) {
    case "and":
      out = ips[0];
      for (let i = 1; i < ips.length; i++) {
        out &= ips[i];
      }
      break;
    case "or":
      out = ips[0];
      for (let i = 1; i < ips.length; i++) {
        out |= ips[i];
      }
      break;
    case "xor":
      out = ips[0];
      for (let i = 1; i < ips.length; i++) {
        out ^= ips[i];
      }
  }

  document.getElementById("output").value = out;
}

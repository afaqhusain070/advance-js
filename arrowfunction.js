document.getElementById("arrow").addEventListener("click", arrow);

function arrow() {
  const list = ["ali", "muhammad", "hussain"];

  const map = list.map((vla) => vla.length);
  console.log(map); //
  document.getElementById("output").innerHTML = map;
}

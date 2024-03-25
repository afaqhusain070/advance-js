document.getElementById("data").addEventListener("click", fetchData);

function fetchData() {
  fetch("data.txt")
    .then((Response) => {
      return Response.text();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("output").innerHTML += data;
    })
    .catch((err) => {
      console.log(err);
    });
}

document.getElementById("fetch-json").addEventListener("click", jsonData);

function jsonData() {
  fetch("customers.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let output = "";
      data.forEach(function (ele) {
        output += `<li>${ele.id}</li>
        `;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
}

document.getElementById("fetch-api").addEventListener("click", fetchApi);

function fetchApi(e) {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      return res.json();
    })
    .then((dat) => {
      console.log(dat);
      let output = "";
      dat.forEach((els) => {
        output += `${els.id}  <br> `;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((res) => {
      console.log(res);
    });
  e.preventDefault();
}

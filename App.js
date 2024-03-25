//  how to fetch data
// document.querySelector(".fetch-data").addEventListener("click", respodata);

// function respodata(e) {
//   const number = document.querySelector("input[type='number']").value;
//   console.log(number);
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", `https://jsonplaceholder.typicode.com/todos/${number}`, true);
//   xhr.onload(function () {
//     if (this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       let output = "";
//       if (response.type === "success") {
//         response.value.forEach((jole) => {
//           output += `<li>${jole.joke}</li>  `;
//         });
//       } else {
//         output += `
//           <li>Something went wrong</li>
//         `;
//       }
//     }
//     document.querySelector(".response").innerHTML = output;
//   });
//   xhr.send();
//   e.preventDefault();
// }

// document.getElementById("button1").addEventListener("click", loadCustomer);

// document.getElementById("button2").addEventListener("click", loadCustomers);

// function loadCustomer() {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "customer.json", true);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       const customer = JSON.parse(this.responseText);

//       const output = `
//       <ul>
//         <li>ID: ${customer.id}</li>
//         <li>Name: ${customer.name}</li>
//         <li>Area: ${customer.area}</li>
//         <li>City: ${customer.city}</li>
//       </ul>
//       `;
//       document.getElementById("customer").innerHTML = output;
//     }
//   };
//   xhr.send();
// }

// function loadCustomers() {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "customers.json", true);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       const customers = JSON.parse(this.responseText);

//       let output = "";

//       customers.forEach(function (customer) {
//         output += `
//         <ul>
//           <li>ID: ${customer.id}</li>
//           <li>Name: ${customer.name}</li>
//           <li>Area: ${customer.area}</li>
//           <li>City: ${customer.city}</li>
//           <li>Age: ${customer.age}</li>
//         </ul>
//         `;
//       });

//       document.getElementById("customers").innerHTML = output;
//     }
//   };
//   xhr.send();
// }

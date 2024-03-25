// Make HTTP GET Request
// const asdf = {
//   get(url, callback) {
//     http = new XMLHttpRequest();
//     http.open("GET", url, true);

//     http.onload = function () {
//       if (http.status === 200) {
//         callback(null, http.responseText);
//       } else {
//         callback("Error: ", +http.status);
//       }
//     };
//     http.send();
//   },
// };
// asdf.get("https://jsonplaceholder.typicode.com/posts", function (err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

const data = [
  {
    title: "JavaScript is the best programming language",
    body: "I love JavaScript",
  },
];

// Make HTTP put Request
// const putdata = {
//   put(url, data, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open("PUT", url, true);
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.onload = function () {
//       callback(null, xhr.responseText);
//     };
//     xhr.send(JSON.stringify(data));
//   },
// };

// putdata.put(
//   "https://jsonplaceholder.typicode.com/posts/5",
//   data,
//   function (err, post) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
//   }
// );

// Make HTTP delete request

const deleteData = {
  delete(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", url, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        callback(null, "post delete");
      } else {
        callback("Error: ", +xhr.status);
      }
    };
    xhr.send();
  },
};

deleteData.delete(
  "https://jsonplaceholder.typicode.com/posts/2",
  function (err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
    }
  }
);

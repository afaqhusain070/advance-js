const data = [
  {
    name: "JavaScript is the best programming language",
    username: "I love JavaScript",
    email: "afaqhussain070@gail.com",
  },
];

const putData = {
  async put(url, data) {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const redata = await res.json();
    return redata;
  },
};

const deletData = {
  async delete(url, data) {
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const redata = await "Data has been deleted";
    return redata;
  },
};

const getData = {
  async get(url) {
    const res = await fetch(url);
    const datas = await res.json();
    return datas;
  },
};

// putData
//   .put("https://jsonplaceholder.typicode.com/posts/1", data)
//   .then((res) => console.log(res));
// //   .catch((error) => console.log(error));

// getData
//   .get("https://jsonplaceholder.typicode.com/posts/5")
//   .then((res) => console.log(res));

deletData
  .delete("https://jsonplaceholder.typicode.com/posts/5")
  .then((res) => console.log(res));

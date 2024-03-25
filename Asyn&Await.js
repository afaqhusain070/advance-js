async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await res.json();

  return data;
}

getData().then((data) => console.log(data));

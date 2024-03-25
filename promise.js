document.getElementById("promise").addEventListener("click", usepomise);

function usepomise() {
  return new Promise((resolve, reject) => {
    fetch()
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

// usepomise.fetch("https://jsonplaceholder.typicode.com/posts");

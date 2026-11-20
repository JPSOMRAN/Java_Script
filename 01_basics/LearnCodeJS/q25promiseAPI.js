console.log("start");

const obj = new Promise((resolve, reject) => {
  console.log("Promise <Pending>");

  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("API Error");
      }
      return response.json();
    })
    .then((data) => {
      resolve(data); // success
    })
    .catch((err) => {
      reject(err); // error
    });
});

obj.then((res) => {
  console.log("Promise <Resolved>", res);
});

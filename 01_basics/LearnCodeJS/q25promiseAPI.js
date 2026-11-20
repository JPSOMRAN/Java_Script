// 1. Runs first (synchronous code executes immediately)
console.log("start");

// 2. Create a new Promise; the executor function runs right away
const obj = new Promise((resolve, reject) => {
  // Logs immediately while the async fetch is starting
  console.log("Promise <Pending>");

  // 3. Make a GET request to the fake API
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      // Check if the HTTP status is 200-299; if not, trigger an error
      if (!response.ok) {
        throw new Error("API Error");
      }
      // Convert the raw HTTP response into a JavaScript object (returns a Promise)
      return response.json();
    })
    .then((data) => {
      // Fulfill the outer Promise and pass the parsed data out
      resolve(data); // success
    })
    .catch((err) => {
      // Catch any network or HTTP errors and reject the outer Promise
      reject(err); // error
    });
});

// 4. Listen for when 'obj' resolves and log the final data
obj.then((res) => {
  console.log("Promise <Resolved>", res);
});


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
      resolve(data);
    })
    .catch((err) => {
      reject(err);
    });
});

obj
  .then((res) => {
    console.log("Promise <Resolved>", res);
  })
  .catch((err) => {
    console.error("Promise <Rejected>", err);
  });
  /*
===============================================================================
  STUDY NOTES: FETCH CHAIN & PROMISE CONSUMPTION BLOCK
===============================================================================

1. fetch("https://jsonplaceholder.typicode.com/posts/1")
   - Starts an async HTTP GET request in the background and returns a Promise.

2. 1st .then((response) => { ... })
   - Runs as soon as the server sends back HTTP headers (not the body yet).
   - if (!response.ok): Checks if HTTP status is 200-299. Because fetch() does
     NOT auto-reject on 404 or 500 errors, throwing an Error here forces
     execution to jump straight to .catch().
   - return response.json(): Reads and parses the response body into a JS
     object. This is also async and passes a new Promise to the next .then().

3. 2nd .then((data) => { resolve(data); })
   - Receives the parsed JS object and fulfills the outer Promise (obj) with it.

4. .catch((err) => { reject(err); })
   - Catches any network failure, thrown HTTP error, or JSON parse error, and
     rejects the outer Promise (obj) with that error.

5. obj.then((res) => ...).catch((err) => ...)
   - Consumes the outer Promise: .then() runs if resolve(data) was called;
     .catch() runs if reject(err) was called.
===============================================================================
*/
  console.log("End")
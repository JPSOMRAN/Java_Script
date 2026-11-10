fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error.message));

    
//     Request post #1 from the API → get the response → convert its JSON body into JavaScript data → print the data → handle an error if something fails.

// The flow is:

// fetch()
//    ↓
// Server responds
//    ↓
// response
//    ↓
// response.json()
//    ↓
// data
//    ↓
// console.log(data)

// If something fails
//    ↓
// catch(error)
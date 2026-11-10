// console.log(num)
//Output:ReferenceError: num is not defined
async function getData() { // async allows us to use await

    try { // try to execute the code safely

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        ); // fetch requests data and await waits for the response

        console.log(response); // prints the raw HTTP response

        const data = await response.json(); // converts the JSON response into JavaScript data

        console.log(data); // prints the actual data

    } catch (error) { // runs if an error occurs

        console.error("Error:", error.message); // prints the error message
    }
}

getData(); // calls/executes the function

// 200 → successful
// 404 → resource not found
// 500 → server error

// getData()
//    ↓
// try
//    ↓
// fetch(URL)
//    ↓
// Wait for server → await
//    ↓
// response
//    ↓
// response.json()
//    ↓
// Wait for JSON parsing → await
//    ↓
// data
//    ↓
// console.log(data)

// If something fails:
//    ↓
// catch(error)
//    ↓
// console.error()
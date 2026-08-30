//asynchronus
console.log("1st text msg")

setTimeout(()=>{
    console.log("This is 2nd text msg but print after 5 secs")

},5000)

console.log("This is the 3rd text msg but it'll print after 1st one")
/*
1st text msg
This is the 3rd text msg but it'll print after 1st one
This is 2nd text msg but print after 5 secs
*/
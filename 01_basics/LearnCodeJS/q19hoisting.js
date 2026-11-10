//variable  hoisting
//we can't hoist let or const but we can hoist var
console.log(num);
var num=20;//undefined
//let num=20;//error
//const num=20;//error


//function hoisting(declaration)
disp()
function disp(){
console.log("Hello Petrer")
}//Hello Peter

//function hoisting(Expression)
// hello()
// var hello= function(){
//     console.log("Hii")
// }    
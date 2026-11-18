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

// sum(2,3)
// const sum=(a,b)=>a+b

sum(2,2)
function sum(a,b){
return a+b
}
//==========================================
//EG Fxn Declaration
//==========================================
// 1. Called BEFORE the function is written
console.log(addOne(5)); // Output: 6

// 2. Function Declaration
function addOne(num) {
  return num + 1;
}
//O/P:6
//==========================================
//Function Expression
//==========================================
// 1. Called BEFORE the variable is assigned
// console.log(addTwo(5)); // ❌ ReferenceError: Cannot access 'addTwo' before initialization

// // 2. Function Expression
// const addTwo = function (num) {
//   return num + 2;
// };


// ==========================================
//  INDUSTRY PATTERN (Stepdown Rule)
// ==========================================
function generateUserReport(name, marks) {
    const average = calculateAverage(marks);
    const grade = getGrade(average);
    return `${name} | Avg: ${average} | Grade: ${grade}`;
}

console.log("5. Industry pattern:", generateUserReport("Aarav", [85, 90, 95]));

// Hoisted helper functions at the bottom
function calculateAverage(scores) {
    const total = scores.reduce((sum, val) => sum + val, 0);
    return total / scores.length;
}

function getGrade(avg) {
    return avg >= 90 ? "A+" : "A";
}
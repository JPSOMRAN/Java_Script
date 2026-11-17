//Concatenation
const str="Hello " + "World";
console.log(str);

let firstName = "John";
let lastName = "Doe";
let fullName = firstName.concat(" ", lastName);

console.log(fullName); // Output: "John Doe"
let fName = "John";
let lName = "Doe";
let Name = firstName + " " + lastName;

console.log(fullName); // Output: "John Doe"


//Concatenation:
let sum="5"+10;
console.log(sum); // Output:510
// "5" is a string, so 10 is converted to a string, resulting in "510"


//type coercion,
let red="5"-10
console.log(red); // Output:-5
// "5" is a string, but is converted to the number 5. Then, 5 - 10 = -5

//Some Examples of  Concatenation and Type coercion
console.log(10+"20");
console.log(9-"5");
console.log("Java"+"Script");
console.log(" " + " ");
console.log(" " + 0);
console.log("Satwick" + "Soumya" );
console.log("Russian" - "Federation");
console.log(true+true);
console.log(true+false);
console.log(false+true);
console.log(false-true);
console.log(9+"5");
console.log("5"-2);
console.log(9+"5"-2);
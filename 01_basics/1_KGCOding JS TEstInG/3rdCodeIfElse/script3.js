//true & false//
var myName="Soumya";//if it is a empty striing "" then it'll be falsey//
if(myName) {
    console.log("this is a truthy value");
}else{
    console.log("it is a falsey value");
}
//Ans:this is a truthy value


var myName="0"; 
if(myName) {
    console.log("this is a truthy value");
}else{
    console.log("it is a falsey value");
}
//Ans:this is a truthy value


var myName="-5";
if(myName) {
    console.log("this is a truthy value");
}else{
    console.log("it is a falsey value");
}
//Ans:this is a truthy value


if(NaN=NaN) {
    console.log("both are equal");
}else{
    console.log("not equal");
}
//Ans:not equal
//Why NaN isn't equal to NaN
console.log(parseInt("xyz"));
console.log(parseInt("@$&"));
//Ans:NaN


console.log(isNaN("Somya"));
//Ans:true 


let Avengers = "Tony"; 
if (Avengers === Avengers) { 
    console.log("both are equal");
} else {
    console.log("not equal");
}
//Ans:both are equal


let MidNS= "GhostRider"; // Ensure Fruit is defined
if (MidNS = MidNS) { // Incorrect use of assignment instead of comparison
    console.log("both are equal");
} else {
    console.log("not equal");
}
//Ans:both are equal


let Xmen = "Wolverine"; // Ensure Fruit is defined
if (Xmen === "Deadpool") { // Compare with a different value
    console.log("both are equal");
} else {
    console.log("not equal");
}
// Ans:not equal


if (5==5){
    console.log("both are equal");
}
//Ans:both are equal


if("Soumya"=="Soumya"){
    console.log("both are equal");
}else{
    console.log("not equal");
}
//Ans:both are equal

let num = 25;
if (num >= 20) {
    console.log("The number is greater than or equal to 20");
}
//The number is greater than or equal to 20

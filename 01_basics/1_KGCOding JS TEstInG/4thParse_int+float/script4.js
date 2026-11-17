const myVar = "42";
const myNum = parseInt(myVar);
console.log(myNum) ;

const myString = "42.5";
const myNumber = parseFloat(myString);
console.log(myNumber) ;

console.log(parseInt("123"));
//123 (default base-10)

console.log(parseInt("123", 10));
//123 (explicitly specify base-10)

console.log(parseInt("    123   "))
//123(gaps b/w numbers and quation mark will be ignored like how indians ignores Rahul Ghandy as PM )

console.log(parseInt("077"));
//77(lead 0 will be ignored how ipl trophy ignores RCB )

console.log(parseInt("1.91"));
//1(.91 will be ignored Due to use of parseInt) 

console.log(parseFloat("1.91"));
//1.91(Due to use of parseFloat)

console.log(parseInt("-123"));
//-123

//when we won't get an output
console.log(parseInt("&123"));
//NaN
console.log(parseInt("xyz"));
//NaN
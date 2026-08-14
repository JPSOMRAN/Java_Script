const accountID=3093//can't be changed
let accountEmail="som@gmail.com"//
var accountPassword="srm93"
accountCity="Codepur"//this type we can declare variable but this is highly discouraged
let accountState// if didn't give value so it will be undefined 
/*
Prefer not to use var , becoz of issue in block scope and fxnal scope
*/


//accountID=3193//can't be changed will give error
console.log(accountID);
accountEmail="somy@gmail.com"//can be reassign but cant be redeclared
console.log(accountEmail);
var accountPassword="sms33"// ctrl + / for comment
console.log(accountPassword)//it can be reassign and redeclared
accountCity="CodeGaon"
console.log(accountCity);

console.table([accountID,accountEmail,accountPassword,accountCity,accountState])
//it will print in tabular form
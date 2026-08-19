/*



let teamScore = 120;
let team1Score="120"; 
let team2Score = "120xyz"; 
let team3Score = null; 
let team4Score=undefined;
let score1=true;
let score2=false;
let score3="Porus"

// Checking teamScore
console.log(typeof (teamScore)); // "number"
console.log(typeof teamScore);   // "number"

let valueInNo = Number(teamScore); 
console.log(typeof valueInNo);    // "number"
console.log(valueInNo);           // 120

// Checking teamScore
console.log(typeof (team1Score)); // "number"
console.log(typeof team1Score);   // "number"

let value1InNo = Number(team1Score); 
console.log(typeof value1InNo);    // "number"
console.log(value1InNo);           // 120

// Checking team2Score
console.log(typeof team2Score);   // "string"

let value2InNo = Number(team2Score); 
console.log(typeof value2InNo);   // "number" (typeof NaN is always "number")
console.log(value2InNo);          // NaN

// Checking team3Score (null)
console.log(typeof (team3Score)); // "object" (This is a well-known bug/behavior in JavaScript)
console.log(typeof team3Score);   // "object"

let value3InNo = Number(team3Score); 
console.log(typeof value3InNo);   // "number"
console.log(value3InNo);          // 0 (Converting null to a Number always yields 0)
console.log(team3Score);          // null


console.log(typeof (team4Score)); // undefined
console.log(typeof team4Score);   // undefined

let value4InNo = Number(team4Score); 
console.log(typeof value4InNo);    // "number"
console.log(value4InNo);           // NaN

console.log(typeof (score1)); // boolean
console.log(typeof score1);   // boolean

let value5InNo = Number(score1); 
console.log(typeof value5InNo);    // "number"
console.log(value5InNo);           // 1

console.log(typeof (score2)); // boolean
console.log(typeof score2);   // boolean

let value6InNo = Number(score2); 
console.log(typeof value6InNo);    // "number"
console.log(value6InNo);           // 0

console.log(typeof (score3)); // string
console.log(typeof score3);   // string

let value7InNo = Number(score3); 
console.log(typeof value3InNo);    // "number"
console.log(value7InNo);           // NaN


let isLoggedIn=1;
let BooleanIsLoggedIn=Boolean(isLoggedIn);
console.log(BooleanIsLoggedIn);//true

let isItLoggedIn=0;
let BooleanIsItLoggedIn=Boolean(isItLoggedIn);
console.log(BooleanIsItLoggedIn);//false

let isItReallyLoggedIn=67;
let BooleanIsItReallyLoggedIn=Boolean(isItReallyLoggedIn);
console.log(BooleanIsItReallyLoggedIn);//true

let isItReallyLoggedInTo="Som";
let BooleanIsItReallyLoggedInTo=Boolean(isItReallyLoggedInTo);
console.log(BooleanIsItReallyLoggedInTo);//true

let isLog="";
let BooleanisLog=Boolean(isLog);
console.log(BooleanisLog);//gfalse
//console.log(isLog);



*/
let Number=33;
let StringNumber=String(Number);
console.log(StringNumber);//33
console.log(typeof StringNumber);//string
console.log(typeof Number);//number

let ab_number="33";
let stringNumber=String(ab_number);
console.log(stringNumber);//33
console.log(typeof stringNumber);//string
console.log(typeof ab_number);//string

//"120"=>120
//"120xyz"=>NaN
//true=>1;false=>0;   



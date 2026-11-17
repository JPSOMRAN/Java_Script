console.log(parseInt("123", 10));
//Ans:>>123
console.log(parseInt("123", 20));/*(1×20^2)+(2*20^1)+(3*20^0)=400+40+3=443*/
//Ans:>>443
console.log(parseInt("123", 1000));//In JavaScript,the radix can only be b/w 2 & 36.
//Ans:>>NaN
console.log(parseInt("123", 200));//A radix more than 36 is invalid.
//Ans:>>NaN
console.log(parseInt("123", 100));//So parseInt returns NaN(Not a Number).
//Ans:>>NaN
console.log(parseInt("123", 30));//(1×30^2)+(2*30^1)+(3*30^0)=900+60+3=963//
//Ans:>>963


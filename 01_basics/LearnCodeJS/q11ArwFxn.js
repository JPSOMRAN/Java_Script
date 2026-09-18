// // Arrow Function
//node 01_basics/LearnCodeJS/q11ArwFxn.js


////String Parameter
// const result = (name) => "Hello " + name;
// console.log(result("Purandhar"));

// const res = (nam) => "Hello " + nam;
// console.log(res("Prrajany"));

// const textmsg=(msg)=>"Jai "+msg
// console.log(textmsg("Hanuman"))

//Multi
const mul=(x,w)=>x*w
console.log(mul(5,9))

//Square
const sqr=(n)=>n*n
console.log(sqr(9))

//No Parameters
const greeet=()=>"Hello"
console.log(greeet())

//Addition
const result=(a,b)=>(a+b)
console.log(result(5,6))

//condition
const isEligible=(age)=>age>=21
console.log("Is Ram Eligible to cast vote "+isEligible(25))
console.log("Is Laxman Eligible to cast vote "+isEligible(17))


//Multiple Caluclation
const calculate=(q,r,s)=>(q*r)+s
console.log(calculate(4,10,9))

const calculatex=(a,b,c)=>(a*b)/c
console.log(calculatex(5,6,10))

const identity=()=>({
     name:"Jagannath",
     age:23
});
console.log(identity())
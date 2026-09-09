//Assignment Operator
// let c=10;
// c+=5;//15
// c-=3;//12
// c*=2;//24
// c/=3;//8
// console.log(c);

//Relational Operators
let d=10,e=20;   
console.log(d==e);//false
console.log(d!=e);//true
console.log(d<e);//true
console.log(d>e);//false
console.log(d>=10);//true
console.log(e<=20);//true

//Logical Operator
let p=true,q=false;
console.log(p&&q);//AND-->false
console.log(p||q);//OR-->True
console.log(!p);//Not- ->false

//Ternary operator
let born=18;
let result=(born>=18)?"Adult":"Minor";
console.log(result);

let salary=14000;
let TaxableOrNot=(salary>=15000)?"Taxable":"NoTax";
console.log(TaxableOrNot);
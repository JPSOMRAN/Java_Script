var a=10;
console.log(a);

var a=20;
console.log(a);//can be redeclare

a=39;
console.log(a);//can be reassigned 

//In const variable redeclare and reassign not possible 
const b=10;
console.log(b)
//const b=10;//can't redeclare block scoped variable
//b=30;//TypeError: Assignment to constant variable.


//let variable
let c=11;
console.log(c);
//let c=12;//can't redeclare block scoped variable
c=12;
console.log(c);//can be re assigned but can't be redeclared


//const-->best practice(should be used in backend)
//let---->when value needs to change
//var---->shouldn't use to to scope issue
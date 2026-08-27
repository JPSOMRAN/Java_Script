// Example 1: const cannot be reassigned
/*
const PI=3.14159;
//PI=3.14;//error
console.log(PI);//OP-3.14159

// Example 2: let can be reassigned
let count=0;
count=1;
console.log(count);*/
//OP-1

// Example 3: Block scope with let/const
if (true) {
    let blockvar="I am inside the block";
    const functionconst="Also inside the block";
    var functionvar="I escape the block";
    console.log(functionconst);//No error if inside  the block
    console.log(blockvar);//No error as const is also block scoped.It exists only inside the { } block.

}
//console.log(blockvar);//let is block scoped.
//console.log(functionconst);//const is also block scoped.
console.log(functionvar);//var is function scoped, not block scoped.
//It is a closure because the inner function remembers
//  and continues to access count even after outer() 
// has finished.
function outer(){//*(step2)
    let count=0  //*step 3 count intialized to zero
    console.log(count)
     return function inner(){
        count++;//increment step 4
        console.log(count)
     }
}
const counter =outer()//called outer went to top (step 1)
counter()//1 (Step 5)
counter()//2
//0
//1
//2


function createGreeting(name) {

    return function() {
        console.log("Hello " + name);
    };

}
const greetDev = createGreeting("Dev");
greetDev();
// Hello Dev


function bankAccount() {

    let balance = 1000;

    return {
        deposit(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = bankAccount();

account.deposit(500);

console.log(account.getBalance());
//OP:1500



function counter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter1 = counter();
const counter2 = counter();

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());
// 1
// 2
// 1
// 2


function createAdder(x) {

    return function(y) {
        return x + y;
    };

}

const add10 = createAdder(10);

console.log(add10(5));
console.log(add10(20));
// 15
// 30
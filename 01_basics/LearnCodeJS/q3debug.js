//debugging in browser,  the code written locally
function print(){
     console.log("Print the fxn")
}
function add(a,b){
    console.log("add the fxn")
    print()//fxn called here
    return a+b;
}

let result=add(5,3);//calling the fxn
console.log(result);
console.log(++result)
console.log(++result)
console.log(++result)

//Display result on the web browser
document.getElementById("output").innerHTML="Result: "+ result;
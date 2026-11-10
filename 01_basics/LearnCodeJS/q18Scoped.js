let num=18;//global
console.log(num)//accessed from outside of the fxn
function display(){
    console.log(num)//inside the fxn
    let num3=39;
    // console.log(num2)
    //can't accessed inside num2
    if(num){
        let num2=20;
        console.log(num)//inside if block
        console.log(num2)//20
        console.log(num3)//39
    }
    //console.log(num2)
    console.log(num3)//now this is fxn scoped 
    //so will give output39
}
display()


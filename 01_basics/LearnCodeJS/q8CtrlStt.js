//Conditional Stts
//1->if condition
let salary=48000;
if(salary>=30000){
    console.log("eligible buy phone")
}

//2->if-else condition
let age=18;
if(age>=21){
    console.log("eligible to drive")
}else{
    console.log("Patha padh bhari gadi chaleibu")
}

//3-->if-else-if condition
let marks=75;
if(marks>=90){
    console.log("Topper bacha")
}
else if(marks>=80){
    console.log("Patha padh")
}
else if(marks>=70){
    console.log("Beta Tumse na ho payega")
}
else{
    console.log("Nalla Berozgar")
}

//4.switch Case
let plan=2;
switch(plan){
    case 1:
        console.log("Isolate Paxtan Diplomatically");
    case 2:
        console.log("Attack Paxtan's Terrorist infrastructure");
    break;
    case 3:
        console.log("Declaration of War");
    break;
    default:
    console.log("Explore other options");
    break;
}
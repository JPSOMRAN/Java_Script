//for loop
// for(let i=1;i<=10;i++){
//     console.log(i);
// }

//while loop
// let i=1;
// while(i<=15){
//     console.log(i)
//     ++i;
// }

//do-while loop
// let start=19
// do{
//     console.log(start)
//     start--
// }while(start>=1);

//Jumping stt
//break
// for(let i=1;i<=10;i++){
//     if(i==5){
//         break
//     }
//     console.log(i);
// }
// 1
// 2
// 3
// 4

//continue
// for(let j=1;j<=10;j++){
//     if(j==5){
//         continue
//     }
//     console.log(j);
// }
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10

//return
function checkNum(num){
    if(num>0){
        return "Positive"
    }
    return "Equal to Zero or -ve"
}
const result=checkNum(9);
console.log(result)
console.log("Start");


const obj=new Promise((resolve,reject)=>{
    console.log("Promise <Pending>");
    setTimeout(()=>{
        const PIN=2731;
  
        if(PIN==2731){//Promise resolve state
            resolve("Promise <Resolved>")
        }else{//.Promise Reject state
            reject(new Error("Promise <Rejected>"))
        }
 
    },2000)
})
obj.then(res=>console.log(res))
   .catch(err=>console.error(err))

console.log("Stop");
//OUTPUT
//with 2731 Promise <Resolved> 
//If use pending Start->Promise <Pending>->Stop->Promise <Resolved>
//If use (PIN==2737) shows ->Error: Promise <Rejected>
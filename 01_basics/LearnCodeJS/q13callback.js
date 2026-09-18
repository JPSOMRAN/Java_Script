function user(name,callback){
    console.log(name)
    callback()
}
user ("Akki",()=>console.log("Its done bro"))
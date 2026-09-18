function user(name,callback){
    console.log(name)
    callback()
}
user ("Sonam",()=>console.log("Its done bro!!!"))

function userReply(nam, callback) {
    console.log(nam);

    setTimeout(() => {
        callback();
    }, 3000);
}

userReply("Sallu", () => {
    console.log("Its over bro");
});
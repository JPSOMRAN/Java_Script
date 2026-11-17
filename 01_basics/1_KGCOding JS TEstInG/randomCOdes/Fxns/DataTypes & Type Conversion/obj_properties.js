let user={age:21,name:"S Ran"};
console.log(user);
console.log(" ");

console.log("==========Adding PROPERTIES==========");
console.log("Dot notation:",user.name);
console.log("Bracket notation:",user.age);
console.log(" ");

console.log("=======Adding Other PROPERTIES=======");
user.email="somran93@gmail.com";
user["isActive"]=true;
console.log(user);
console.log(" ");

console.log("=========UPDATING PROPERTIES=========");
user.age=22;
user.name="S Ran";
console.log(user);
console.log(" ");

console.log("=========DELETING PROPERTIES=========");
delete user.isActive;
console.log(user);
console.log(" ");

console.log("=CHECKING IF PROPERTIES EXIST OR NOT=");
console.log("Does the 'name' exists","name" in user);
console.log("Does the 'phone' exists","phone" in user);
console.log(" ");

//Get all key                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            s and values
console.log("===========Object Methods============");
console.log("Keys",Object.keys(user));
console.log("Values",Object.values(user));
console.log("Entries",Object.entries(user));

//Loop through object
console.log("=========Loop through Object=========");
for(let key in user){
    console.log(`${key}: ${user[key]}`);
}
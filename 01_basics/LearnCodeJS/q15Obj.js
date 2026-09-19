const users=[
    {
       id:1,
       name:"Bimal Devgan",
       email:"devganbimal76@gmail.com"
    },
    {
       id:2,
       name:"Gutka Kumar",
       email:"kumargutka75@gmail.com"
    },
    {
       id:3,
       name:"Salemon Bhoi",
       email:"blackbuckak47@gmail.com"
    },
    {
       id:4,
       name:"PhushFaah Raj", 
       email:"besirperkimovie@gmail.com"
    }
];
users.forEach(user=> console.log(user));
users.forEach(user=>console.log(user.name));
const upperCaseUserValue=users.map(user=>user.email.toLocaleUpperCase());
console.log(upperCaseUserValue);
const filteredValue = users.filter(user => user.id === 1);

console.log(filteredValue);
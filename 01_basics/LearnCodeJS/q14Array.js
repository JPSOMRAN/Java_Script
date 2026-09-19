// const users=["Salemon Masala","JubanKesari Devgan","Panmasala Khan","Gutka Kumar"]
// //ForEach().--->Loop Printing Data
// users.forEach(user=>console.log(user))

// const superHero=["Luke C","Peter P","Bruce W","Steve R","Hal J","Tony S","Clark K","Diana P","Thor O","Barry A"]
// superHero.forEach(superH=>console.log(superH))

// const countries=["Republic of India","United States of America","People's Republic of China","United Kingdom of Great Britain and Northern Ireland","Russian Federation","French Republic","Federal Republic of Germany","Commonwealth of Australia","Swiss Confederation","Hellenic Republic","Kingdom of the Netherlands","Democratic People's Republic of Korea","Bolivarian Republic of Venezuela"," Federal Republic of Nigeria"]
// countries.forEach(country=>console.log(country))

// const Books=["RigVed","Avesta","Katha Upansihad","Charyapada","Tripitaka","Tolkappiyam","arthashastra"]
// Books.forEach(book=>console.log(book))

// const forces=["Marcos","ParaSF","NSG","GarudCF","CoBRA","SFF","SPG","GreyHounds"]
// forces.forEach(force=>console.log(force))

//
//Map().-->Transform Data
//
// const forces=["Marcos","ParaSF","NSG","GarudCF","CoBRA","SFF","SPG","GreyHounds"]
//  const upperCaseUserValue=forces.map(u=>u.toLocaleUpperCase())
//  console.log(upperCaseUserValue)

// const Books=["RigVed","Avesta","Katha Upansihad","Charyapada","Tripitaka","Tolkappiyam","arthashastra"]
// const upperCaseUserValue=Books.map(u=>u.toLocaleUpperCase())
// console.log(upperCaseUserValue)

// const superHero=["Luke C","Peter P","Bruce W","Steve R","Hal J","Tony S","Clark K","Diana P","Thor O","Barry A"]
// const upperCaseUserValue=superHero.map(u=>u.toLocaleUpperCase())
// console.log(upperCaseUserValue)


//
//filter
//
const forces=["Marcos","ParaSF","NSG","GarudCF","CoBRA","SFF","SPG","GreyHounds"]
const filteredValue=forces.filter(force=>force==="NSG")
console.log(filteredValue)
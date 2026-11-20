const form=document.getElementById("form")
const ip=document.getElementById("ip")
console.log(ip.value)
form.addEventListener("submit",()=>{
    event.preventDefault()
    console.log(ip.value)
    alert("This form was submitted successfully")
 
}) 
//pkill -f http-server; npx http-server -p 5500 -c-1
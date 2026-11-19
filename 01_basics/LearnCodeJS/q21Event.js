// Select the first <button> element in the HTML DOM and store its reference
const btn = document.querySelector("#btn");

// Register a "click" event listener; the callback runs only when the button is clicked
btn.addEventListener("click" ,() => {
  // Log a confirmation message to the browser's DevTools Console
  console.log("ButtonClicked!");
  alert("Hello Emperor");
  // Replace the button's visible text label
  btn.textContent = "Clicked!";

  // Apply inline CSS to change the button v's background fill to blue
  btn.style.backgroundColor = "#9fb8ee";

  // Apply inline CSS to change the button's text color to red
  btn.style.color = "#1c4800";
});
  btn.addEventListener("mouseenter",()=>{
    btn.style.backgroundColor="#000000";
    btn.style.color="white";
  })
    btn.addEventListener("mouseleave",()=>{
    btn.style.backgroundColor="";
    btn.style.color="";
  })
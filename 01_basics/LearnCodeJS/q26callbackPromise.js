// Helper function that returns a Promise for each timed step
function step(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message); // Prints the step message after 'delay' ms
      resolve(); // Marks this Promise as fulfilled so the next .then() can start
    }, delay);
  });
}

function orderFood(customer) {
  console.log("Order Placed By " + customer); // 1. Runs immediately first

  // Returns the Promise chain so .then() can wait for all steps to finish
  return step("Restaurant accepted your order!", 2000) // 2. Runs after 2 seconds
    .then(() => step("Food is being prepared!", 2000)) // 3. Waits for Step 2, then runs after 2s (total 4s)
    .then(() => step("Your food is out for delivery!", 2000)); // 4. Waits for Step 3, then runs after 2s (total 6s)
}

function deliverFood() { // 6. Runs last once the entire Promise chain resolves
  console.log("Dear Customer your order is delivered, You can enjoy the meal!");
}

// 0. Starts the Promise chain: "Ankush " goes to 'customer'
orderFood("Ankush ")
  .then(() => deliverFood()) // 5. Automatically runs deliverFood() only after all previous steps finish
  .catch((err) => console.error("Order failed:", err)); // Catches any error from any step above

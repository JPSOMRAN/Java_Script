// Step 1: Place Order
function placeOrder(customer, callback) {
  console.log("Order Placed By " + customer); // 1. Runs immediately
  callback(null, customer); // 'null' means no error
}

// Step 2: Restaurant Accepts
function acceptOrder(callback) {
  setTimeout(() => {
    const restaurantOpen = false; // Change to true to see full delivery, false for error!

    if (restaurantOpen) {
      console.log("Restaurant accepted your order!"); // 2. Runs at 2s
      callback(null); // No error, proceed to next step
    } else {
      callback("Restaurant is closed!"); // Pass error to stop the chain
    }
  }, 2000);
}

// Step 3: Prepare Food
function prepareFood(callback) {
  setTimeout(() => {
    console.log("Food is being prepared!"); // 3. Runs at 4s
    callback(null);
  }, 2000);
}

// Step 4: Out for Delivery
function outForDelivery(callback) {
  setTimeout(() => {
    console.log("Your food is out for delivery!"); // 4. Runs at 6s
    callback(null);
  }, 2000);
}

// Step 5: Deliver Food
function deliverFood() {
  console.log("Dear Customer your order is delivered, You can enjoy the meal!"); // 5. Runs last
}

// --- MESSY CALLBACK HELL EXECUTION (Pyramid + Repetitive Error Checks) ---
placeOrder("Ankush ", function (err) {
  if (err) {
    console.error("Order Cancelled:", err);
  } else {
    acceptOrder(function (err) {
      if (err) {
        console.error("Order Cancelled:", err);
      } else {
        prepareFood(function (err) {
          if (err) {
            console.error("Order Cancelled:", err);
          } else {
            outForDelivery(function (err) {
              if (err) {
                console.error("Order Cancelled:", err);
              } else {
                deliverFood();
              }
            });
          }
        });
      }
    });
  }
});

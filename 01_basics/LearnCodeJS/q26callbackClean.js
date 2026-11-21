// Step 1: Place Order
function placeOrder(customer) {
  return new Promise((resolve) => {
    console.log("Order Placed By " + customer); // 1. Runs immediately
    resolve(customer); // Signals Step 1 is done
  });
}

// Step 2: Restaurant Accepts
function acceptOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const restaurantOpen = true; // Try changing this to false to test error handling!
      if (restaurantOpen) {
        console.log("Restaurant accepted your order!"); // 2. Runs at 2s
        resolve();
      } else {
        reject("Restaurant is closed!"); // Immediately stops the chain
      }
    }, 2000);
  });
}

// Step 3: Prepare Food
function prepareFood() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Food is being prepared!"); // 3. Runs at 4s
      resolve();
    }, 2000);
  });
}

// Step 4: Out for Delivery
function outForDelivery() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Your food is out for delivery!"); // 4. Runs at 6s
      resolve();
    }, 2000);
  });
}

// Step 5: Deliver Food
function deliverFood() {
  console.log("Dear Customer your order is delivered, You can enjoy the meal!"); // 5. Runs last
}

// --- CLEAN EXECUTION CHAIN (No Pyramid!) ---
placeOrder("Ankush ")
  .then(() => acceptOrder())
  .then(() => prepareFood())
  .then(() => outForDelivery())
  .then(() => deliverFood())
  .catch((err) => {
    // One single place handles errors from ANY step above!
    console.error("Order Cancelled:", err);
  });

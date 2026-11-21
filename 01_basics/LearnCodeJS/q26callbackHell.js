function orderFood(customer, callback) {
  console.log("Order Placed By " + customer); // 1. Runs immediately first

  setTimeout(() => {
    console.log("Restaurant accepted your order!"); // 2. Runs after 2 seconds

    setTimeout(() => {
      console.log("Food is being prepared!"); // 3. Runs after another 2 seconds (total 4s)

      setTimeout(() => {
        console.log("Your food is out for delivery!"); // 4. Runs after another 2 seconds (total 6s)
        callback(); // 5. Calls deliverFood() only after all previous steps finish
      }, 2000);

    }, 2000);

  }, 2000);
}

function deliverFood() { // 6. Runs last when callback() is triggered
  console.log("Dear Customer your order is delivered, You can enjoy the meal!");
}

// 0. Starts the chain: "Ankush " goes to 'customer', deliverFood goes to 'callback'
orderFood("Ankush ", deliverFood);

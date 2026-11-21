function placeOrder(customer) {
  return new Promise((resolve) => {
    updateStatus(`1. Order Placed By ${customer}...`);
    resolve();
  });
}

function acceptOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Gets current hour in 24-hour format (0 - 23)
      const currentHour = new Date().getHours();

      // Open from 10 AM (10) up to 10 PM (22)
      const isOpen = currentHour >= 10 && currentHour < 22;

      if (isOpen) {
        updateStatus("2. Restaurant accepted your order!");
        resolve();
      } else {
        // Rejects if before 10:00 AM or 10:00 PM / later
        reject("Sorry! We are closed. Ordering hours are 10:00 AM to 10:00 PM.");
      }
    }, 2000);
  });
}

function prepareFood() {
  return new Promise((resolve) => {
    setTimeout(() => {
      updateStatus("3. Food is being prepared!");
      resolve();
    }, 2000);
  });
}

function deliverFood() {
  updateStatus("✅ Dear Customer, your order is delivered! Enjoy your meal!");
}

// Helper function to show messages on the webpage
function updateStatus(message, isError = false) {
  const statusBox = document.getElementById("status");
  statusBox.innerText = message;
  statusBox.style.color = isError ? "red" : "green";
}

// Triggered when user clicks the "Order Now" button
function startOrder() {
  const btn = document.getElementById("orderBtn");
  btn.disabled = true; // Prevent double-clicking

  placeOrder("Ankush")
    .then(() => acceptOrder())
    .then(() => prepareFood())
    .then(() => deliverFood())
    .catch((err) => {
      // Shows the "Closed" message on the webpage
      updateStatus(`❌ ${err}`, true);
    })
    .finally(() => {
      // Re-enables the button whether the order succeeded or failed
      btn.disabled = false;
    });
}

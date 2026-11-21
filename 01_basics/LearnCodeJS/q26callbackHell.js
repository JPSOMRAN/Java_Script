function fetchUser(callback) {
  setTimeout(() => {
    // Simulating an error inside an async callback
    throw new Error("Database connection failed!");
  }, 500);
}

try {
  fetchUser((data) => {
    console.log(data);
  });
} catch (err) {
  // This block NEVER runs!
  console.log("Caught safely:", err.message);
}


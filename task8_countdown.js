// Task 8: Countdown Timer & Notification App — Asynchronous Programming & Callback Functions

function checkTimeLeftCallback(seconds, callback) {
  console.log(`Checking time left... (will respond in 2 seconds)`);
  setTimeout(() => {
    callback(seconds);
  }, 2000);
}

// Call it and log the result inside the callback
checkTimeLeftCallback(30, (remainingSeconds) => {
  console.log(`Callback fired: ${remainingSeconds} seconds remaining.`);
});

console.log("This runs immediately, while checkTimeLeftCallback is still waiting.");

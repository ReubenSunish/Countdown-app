// Task 10: Countdown Timer & Notification App — JavaScript Promises — Introduction, Detail & Revisited

function checkTimeLeftPromise(seconds) {
  return new Promise((resolve, reject) => {
    if (typeof seconds !== "number" || seconds < 0) {
      reject(new Error("Invalid duration: seconds must be a non-negative number."));
      return;
    }

    setTimeout(() => {
      resolve(seconds);
    }, 2000);
  });
}

// Chain .then()/.catch() to log the result or any error
checkTimeLeftPromise(20)
  .then((remaining) => {
    console.log(`Promise resolved: ${remaining} seconds remaining.`);
  })
  .catch((error) => {
    console.log("Promise rejected:", error.message);
  });

// Demonstrate the rejection path with an invalid value
checkTimeLeftPromise(-5)
  .then((remaining) => {
    console.log(`Promise resolved: ${remaining} seconds remaining.`);
  })
  .catch((error) => {
    console.log("Promise rejected:", error.message);
  });

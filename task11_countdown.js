// Task 11: Countdown Timer & Notification App — Try/Catch Error Handling & Async-Await Concepts

function checkTimeLeftPromise(seconds) {
  return new Promise((resolve, reject) => {
    if (typeof seconds !== "number" || seconds < 0) {
      reject(new Error("Invalid duration: seconds must be a non-negative number."));
      return;
    }

    setTimeout(() => {
      resolve(seconds);
    }, 1500);
  });
}

async function runCountdownAsync(seconds) {
  try {
    let remaining = await checkTimeLeftPromise(seconds);
    console.log(`Success: ${remaining} seconds remaining.`);
  } catch (error) {
    console.log("Caught an error:", error.message);
  }
}

// Valid case
runCountdownAsync(10);

// Demonstrate the catch block firing with a negative duration
runCountdownAsync(-3);

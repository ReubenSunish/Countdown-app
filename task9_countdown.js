// Task 9: Countdown Timer & Notification App — Node Timers & Global Objects

let remainingSeconds = 5;

console.log(`Countdown started from ${remainingSeconds} seconds.`);

let countdownInterval = setInterval(() => {
  console.log(`Time remaining: ${remainingSeconds}s`);
  remainingSeconds--;

  if (remainingSeconds < 0) {
    clearInterval(countdownInterval);

    // Trigger a notification slightly after the countdown ends
    setTimeout(() => {
      console.log("Notification: Time's up!");
    }, 500);
  }
}, 1000);

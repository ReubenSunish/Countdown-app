// Task 14: Countdown Timer & Notification App — Recursive Functions, Event Loop Execution Flow & EventEmitter

const EventEmitter = require("events");

const countdownEmitter = new EventEmitter();

// Listener for the 'timeUp' event
countdownEmitter.on("timeUp", () => {
  console.log("Notification: Time is up!");
});

let remainingSeconds = 4;

console.log(`Countdown started from ${remainingSeconds} seconds.`);

let intervalId = setInterval(() => {
  console.log(`Time remaining: ${remainingSeconds}s`);
  remainingSeconds--;

  if (remainingSeconds < 0) {
    clearInterval(intervalId);
    countdownEmitter.emit("timeUp");
  }
}, 1000);

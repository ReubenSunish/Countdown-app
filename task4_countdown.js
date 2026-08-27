// Task 4: Countdown Timer & Notification App — NodeJS REPL Introduction
//
// The snippet below was first tested in the Node REPL like this:
//
//   > let start = new Date();
//   > let end = new Date(start.getTime() + 10000); // 10 seconds later
//   > let secondsRemaining = Math.round((end - start) / 1000);
//   > console.log(secondsRemaining);
//   10
//
// It has now been moved into this file (countdown.js).

let start = new Date();
let end = new Date(start.getTime() + 10000); // 10 seconds after start

let secondsRemaining = Math.round((end - start) / 1000);

console.log("Start time:", start.toLocaleTimeString());
console.log("End time:", end.toLocaleTimeString());
console.log("Seconds remaining:", secondsRemaining);

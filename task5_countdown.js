// Task 5: Countdown Timer & Notification App — Node Process Object, Command Line & Terminal I/O
//
// Run with:
//   node task5_countdown.js 15
//
// While it's counting down, type "cancel" and press Enter to stop it early.

// process.argv[0] = node path, process.argv[1] = script path, process.argv[2] = first real argument
let durationArg = process.argv[2];
let duration = parseInt(durationArg, 10);

if (isNaN(duration) || duration <= 0) {
  console.log("Please provide a valid positive number of seconds.");
  console.log("Example: node task5_countdown.js 15");
  process.exit(1);
}

console.log(`Starting countdown for ${duration} seconds.`);
console.log('Type "cancel" and press Enter at any time to stop early.');

let remaining = duration;
let cancelled = false;

// Set up terminal input listening
process.stdin.setEncoding("utf8");
process.stdin.on("data", (input) => {
  if (input.trim().toLowerCase() === "cancel") {
    cancelled = true;
    console.log("Countdown cancelled by user.");
    clearInterval(intervalId);
    process.exit(0);
  }
});

let intervalId = setInterval(() => {
  if (cancelled) return;

  console.log(`Time remaining: ${remaining}s`);
  remaining--;

  if (remaining < 0) {
    clearInterval(intervalId);
    console.log("Time's up!");
    process.exit(0);
  }
}, 1000);

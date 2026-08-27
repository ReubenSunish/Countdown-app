// Task 2: Countdown Timer & Notification App — Understanding How Node.js Works & Node.js Architecture

/*
 * How Node.js stays responsive while a timer runs:
 * Node.js runs JavaScript on Google's V8 engine, which executes code on a single
 * main thread. However, operations like setTimeout, file I/O, and network calls
 * are handed off to libuv, a C library that manages a thread pool and the event loop.
 * Because libuv handles the timer in the background, V8's main thread is free to
 * keep executing other synchronous code (like reading terminal input) instead of
 * blocking and waiting for the timer to finish. Once the timer's duration elapses,
 * libuv pushes the associated callback into the event loop's callback queue, and
 * V8 picks it up and runs it as soon as the main thread's call stack is empty.
 */

console.log("Starting a 3 second timer in the background...");

setTimeout(() => {
  console.log("Timer fired after 3 seconds!");
}, 3000);

// This line runs immediately, without waiting for the timer above,
// proving the main thread isn't blocked while libuv handles the timer.
console.log("This message prints immediately, before the timer finishes.");

// Task 13: Countdown Timer & Notification App — Callback Examples & the Event Loop, Job Queue

/*
 * Prediction (written BEFORE running):
 * 1. "Synchronous log" will print first (it runs immediately on the main call stack).
 * 2. "Promise resolved" will print second (microtasks/Promise callbacks run
 *    before macrotasks like setTimeout, once the current synchronous code finishes).
 * 3. "setTimeout callback" will print last (timer callbacks are macrotasks and
 *    are only processed after the microtask queue is empty).
 */

setTimeout(() => {
  console.log("setTimeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise resolved (microtask)");
});

console.log("Synchronous log");

/*
 * After running this file, the actual output order was:
 *   Synchronous log
 *   Promise resolved (microtask)
 *   setTimeout callback
 *
 * This confirms the prediction: synchronous code runs first, then all
 * microtasks (Promises) are drained, and only then does the event loop
 * move on to macrotasks like setTimeout callbacks.
 */

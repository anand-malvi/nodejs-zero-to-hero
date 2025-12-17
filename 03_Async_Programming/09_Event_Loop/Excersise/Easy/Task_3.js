/**
 * ❓ Prediction Task
 * Before I reveal the answer, you must predict the output.
 * 🧠 Think:
 * Synchronous code runs first
 * Microtask queue (Promises) runs next
 * Timer queue (setTimeout) runs after
 * 
 * Write your predicted sequence like this:
 * 1. ...
 * 2. ...
 * 3. ...
 * 4. ...
*/

console.log("A - Start");

setTimeout(() => console.log("B - Timeout (50ms)"), 50);

Promise.resolve().then(() => console.log("C - Microtask"));

console.log("D - End");

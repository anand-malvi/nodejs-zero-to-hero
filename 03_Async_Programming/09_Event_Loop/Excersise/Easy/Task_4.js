/**
 * 
 * ✅ Easy Practical #4 — Event Loop (Timers vs Microtasks vs I/O)
 * 
 * Predict the output of the following code before I explain anything:
 */

console.log("A - Start");

setTimeout(() => {
    console.log("B - Timeout (0ms)");
}, 0);

Promise.resolve().then(() => {
    console.log("C - Microtask (Promise)");
});

require("fs").readFile(__filename, () => {
    console.log("D - I/O Callback");
});

console.log("E - End");

/**
 * 
 * Output:
 * 
 * A - Start
 * E - End
 * C - Microtask (Promise)
 * B - Timeout (0ms)
 * D - I/O Callback
 */

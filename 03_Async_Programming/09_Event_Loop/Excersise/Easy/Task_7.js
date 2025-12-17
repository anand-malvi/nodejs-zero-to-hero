/**
 * 
 * 🐣 PRACTICAL 7 — Event Loop with setImmediate() vs setTimeout(0)
 * 
 * 📝 Task:
 * Predict the output order of the following code.
 * Focus on understanding check phase vs timers phase.
*/
console.log("A - Start");

setTimeout(() => {
    console.log("B - Timeout (0ms)");
}, 0);

setImmediate(() => {
    console.log("C - Immediate");
});

Promise.resolve().then(() => {
    console.log("D - Promise");
});

console.log("E - End");











/**
 * Output:
 * 
 * A - Start
 * E - End
 * D - Promise
 * B - Timeout (0ms)
 * C - Immediate
*/


/**
 * Explanation of
 * 🧩 Why does Immediate run before Timeout?
 * 
 * After main stack finishes:
 * 1️⃣ Microtasks run first
 * Promise → D - Promise
 * 2️⃣ Node.js moves to the next phase
 * On most runs, it enters the Check Phase first → setImmediate()
 * 3️⃣ Then the Timers Phase → setTimeout(0)
 * So order is:
 * Synchronous → A, E
 * Microtasks → D
 * Check Phase → C (setImmediate)
 * Timers Phase → B (setTimeout)
 */
/**
 * 
 * 🚀 MEDIUM PRACTICAL 1 — Mixing FS I/O + Timeout + Promise
 * 
 * 📝 Task:
 * Predict the output order of the following code.
 * This time, we introduce a real I/O operation, which moves work to the
 * Poll Phase of the Event Loop.
 * 
 * 🧠 Your Task: Predict the exact output order.
 * 
 * ⚠️ Key hint:
 * Microtasks → Always before timers & I/O
 * fs.readFile → Poll Phase
 * setTimeout(0) → Timers Phase
*/

const fs = require('fs');

console.log("A - Start");

fs.readFile(__filename, () => {
    console.log("B - File Read (I/O)");
});

setTimeout(() => {
    console.log("C - Timeout (0ms)");
}, 0);

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
 * C - Timeout (0ms)
 * B - File Read (I/O)
*/


/**
 * Explanation:
 * 
 * 1️⃣ Synchronous
 * → A, then E
 * 2️⃣ Microtasks (Promise)
 * → D
 * 3️⃣ Timers Phase
 * → C (setTimeout 0ms)
 * 4️⃣ Poll Phase (I/O callback)
 * → B (fs.readFile)

Perfect understanding!
 */
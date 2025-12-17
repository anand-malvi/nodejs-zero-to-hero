/**
 * 
 * ⚡ HARD PRACTICAL — Event Loop Hell (Practical 2 / 7)
 * 
 * 🔥 This one mixes EVERYTHING: microtasks, macrotasks, nested async, and file I/O.
 * Carefully read the code and tell me the exact output order.
 */
const fs = require('fs');

console.log("A - Start");

setTimeout(() => {
    console.log("B - Timeout 1");

    Promise.resolve().then(() => console.log("C - Promise inside Timeout"));

    setImmediate(() => console.log("D - Immediate inside Timeout"));
}, 0);

Promise.resolve().then(() => console.log("E - Promise 1"));

setImmediate(() => console.log("F - Immediate 1"));

fs.readFile(__filename, () => {
    console.log("G - File Read Callback");

    process.nextTick(() => console.log("H - nextTick inside File Read"));

    setTimeout(() => console.log("I - Timeout inside File Read"), 0);

    Promise.resolve().then(() => console.log("J - Promise inside File Read"));

    setImmediate(() => console.log("K - Immediate inside File Read"));
});

console.log("L - End");



/**
 * ✅ Output:
 * 
 * A - Start
 * L - End
 * E - Promise 1
 * F - Immediate 1
 * B - Timeout 1
 * C - Promise inside Timeout
 * D - Immediate inside Timeout
 * G - File Read Callback
 * H - nextTick inside File Read
 * J - Promise inside File Read
 * K - Immediate inside File Read
 * I - Timeout inside File Read
 */


/**
 * ✅ Correct Output Order with Explanation
 * 
 * A - Start        (sync)
 * L - End          (sync)
 * 
 * E - Promise 1    (microtask)
 * 
 * F - Immediate 1  (check phase)
 * 
 * B - Timeout 1    (timers phase)
 * C - Promise inside Timeout     (microtask)
 * D - Immediate inside Timeout   (check)
 * 
 * G - File Read Callback      (poll)
 * 
 * H - nextTick inside File Read (nextTick - highest priority)
 * J - Promise inside File Read  (microtask)
 * K - Immediate inside File Read (check)
 * I - Timeout inside File Read   (timers)
 * 
 */
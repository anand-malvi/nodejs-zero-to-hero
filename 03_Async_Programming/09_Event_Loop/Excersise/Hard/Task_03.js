/**
 * ⚡ HARD PRACTICAL — Event Loop Chaos (Practical 3 / 7)
 * 🔥 This one is very tricky — nested promises, nextTicks, immediates, timeouts, and async FS.
 * 
 * Let’s GO.
 * 
 * 🧠 CODE
 * Read carefully and give the exact output order:
 */
const fs = require('fs');

console.log("A - Start");

process.nextTick(() => {
    console.log("B - nextTick 1");

    Promise.resolve().then(() => console.log("C - Promise inside nextTick"));
    
    process.nextTick(() => console.log("D - nextTick inside nextTick"));
});

Promise.resolve().then(() => {
    console.log("E - Promise 1");

    setTimeout(() => console.log("F - Timeout inside Promise"), 0);

    setImmediate(() => console.log("G - Immediate inside Promise"));
});

setTimeout(() => {
    console.log("H - Timeout 1");

    process.nextTick(() => console.log("I - nextTick inside Timeout"));

    Promise.resolve().then(() => console.log("J - Promise inside Timeout"));
}, 0);

setImmediate(() => console.log("K - Immediate 1"));

fs.readFile(__filename, () => {
    console.log("L - File Read Callback");

    Promise.resolve().then(() => console.log("M - Promise inside File Read"));

    process.nextTick(() => console.log("N - nextTick inside File Read"));

    setImmediate(() => console.log("O - Immediate inside File Read"));

    setTimeout(() => console.log("P - Timeout inside File Read"), 0);
});

console.log("Q - End");





/**
 * Output:
 * 
 * A - Start
 * Q - End
 * B - nextTick 1
 * D - nextTick inside nextTick
 * E - Promise 1
 * C - Promise inside nextTick
 * H - Timeout 1
 * I - nextTick inside Timeout
 * J - Promise inside Timeout
 * F - Timeout inside Promise   ← Note: added during microtask
 * K - Immediate 1
 * G - Immediate inside Promise
 * L - File Read Callback
 * N - nextTick inside File Read
 * M - Promise inside File Read
 * O - Immediate inside File Read
 * P - Timeout inside File Read
 */



/* 
======================================================================
🎨 EVENT LOOP SUMMARY - flow of it 
======================================================================

🔵 SYNC PHASE
   A - Start
   Q - End

🟣 nextTick QUEUE (highest priority)
   B - nextTick 1
   D - nextTick inside nextTick

🟡 Promise MICROTASK QUEUE
   E - Promise 1
   C - Promise inside nextTick

🔴 TIMERS (setTimeout 0ms)
   H - Timeout 1
   🔸 I - nextTick inside Timeout
   🔸 J - Promise inside Timeout
   F - Timeout inside Promise (added later)

🟢 CHECK PHASE (setImmediate)
   K - Immediate 1
   G - Immediate inside Promise

🟠 POLL PHASE (fs.readFile callback)
   L - File Read Callback
   🔹 N - nextTick inside File Read
   🔹 M - Promise inside File Read

🟢 CHECK PHASE again (inside I/O)
   O - Immediate inside File Read

🔴 TIMERS again (inside I/O)
   P - Timeout inside File Read

======================================================================
*/

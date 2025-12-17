const fs = require('fs');

console.log("A - Start");

fs.readFile(__filename, () => {
    console.log("B - File Read Callback");

    setTimeout(() => console.log("C - Timeout inside I/O"), 0);

    setImmediate(() => console.log("D - Immediate inside I/O"));

    Promise.resolve().then(() => console.log("E - Promise inside I/O"));
});

setImmediate(() => console.log("F - Immediate"));

Promise.resolve().then(() => console.log("G - Promise"));

setTimeout(() => console.log("H - Timeout (0ms)"), 0);

console.log("I - End");

/**
 * Output:
 * 
 * A  (sync)
 * I  (sync)
 * G  (microtask - Promise)
 * F  (check phase - setImmediate)
 * H  (timers phase - setTimeout 0ms)
 * B  (poll phase - fs.readFile callback)
 * E  (microtask inside I/O callback - Promise)
 * D  (check phase inside I/O - setImmediate)
 * C  (timer inside I/O - setTimeout 0ms)
 */
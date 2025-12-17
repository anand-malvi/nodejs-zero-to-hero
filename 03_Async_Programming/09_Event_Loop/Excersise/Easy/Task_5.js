/**
 * ✅ Easy Practical #5 — Output Prediction
 * 
 * Here is your next event-loop practical challenge:
 */

console.log("A - Start");

setTimeout(() => {
    console.log("B - Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("C - Promise 1");
}).then(() => {
    console.log("D - Promise 2");
});

console.log("E - End");


/**
 * Output:
 * 
 * A - Start
 * E - End
 * C - Promise 1
 * D - Promise 2
 * B - Timeout
 */
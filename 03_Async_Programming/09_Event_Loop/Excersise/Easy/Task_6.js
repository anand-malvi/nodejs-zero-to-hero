/**
 * ✅ Easy Practical #6 — Output Prediction
 * 
 * Here is your next event-loop practical challenge:
 */
console.log("A - Start");

setTimeout(() => {
    console.log("B - Timeout 1");
}, 10);

setTimeout(() => {
    console.log("C - Timeout 2");
}, 0);

Promise.resolve().then(() => {
    console.log("D - Promise");
});

console.log("E - End");

/** Output: 
 * 
 * A - Start
 * E - End
 * D - Promise
 * C - Timeout 2
 * B - Timeout 1
*/
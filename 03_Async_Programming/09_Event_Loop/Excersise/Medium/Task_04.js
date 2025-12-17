/* ---------------------------------------------------------
4️⃣ MEDIUM PRACTICAL 4 — Promise vs Timeout vs nextTick
============================================================
📝 Task:
Predict the output order AND then write the corrected output
as a comment below the code.

----------------------------------------------------------*/

console.log("A - Start");

setTimeout(() => {
    console.log("B - Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("C - Promise");
});

process.nextTick(() => {
    console.log("D - nextTick");
});

console.log("E - End");


/** Output */
//   A - Start
//   E - End
//   D - nextTick
//   C - Promise
//   B - Timeout
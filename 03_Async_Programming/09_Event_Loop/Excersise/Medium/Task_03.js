/* ---------------------------------------------------------
3️⃣ MEDIUM PRACTICAL 3 — Create delay() with Promises
============================================================
📝 Task:
Write a function `delay(ms)` that returns a Promise
which resolves after `ms` milliseconds.

Requirements:
    🔹 Usage Example:
        delay(1000).then(() => console.log("Done!"));

    🔹 After calling `delay`, print a message after it resolves.
    🔹 Demonstrate at least 2 delays running in sequence.
----------------------------------------------------------*/
// Example usage:
// delay(1000).then(() => console.log("First done!"));
// delay(2000).then(() => console.log("Second done!"));




// Solution:
function delay(ms) {
    return new Promise((res) => {
        setTimeout(() => res(), ms);
    });
}
delay(1000).then(() => console.log("First done!"));
delay(2000).then(() => console.log("Second done!"));

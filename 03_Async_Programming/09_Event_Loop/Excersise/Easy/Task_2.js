/* ---------------------------------------------------------
🥈 EASY PRACTICAL 2 — Timer Order (0ms vs 100ms)
============================================================
📝 Task:
Demonstrate how timers with different delays execute
based on their expiration time.

Write the following in order:

    console.log("A - Start");

    setTimeout(() => {
        console.log("B - Timeout (100ms)");
    }, 100);

    setTimeout(() => {
        console.log("C - Timeout (0ms)");
    }, 0);

    console.log("D - End");

Expected Output Order:
    A - Start
    D - End
    C - Timeout (0ms)
    B - Timeout (100ms)

Goal:
Understand the timer queue behavior:
    🔹 0ms timer expires first
    🔹 100ms timer expires later
    🔹 Both run only after the call stack is empty
----------------------------------------------------------*/

console.log("A - Start");

setTimeout(() => {
    console.log("B - Timeout (100ms)");
}, 100);

setTimeout(() => {
    console.log("C - Timeout (0ms)");
}, 0);

console.log("D - End");


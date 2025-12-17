/* ---------------------------------------------------------
🥇 EASY PRACTICAL 1 — Sync vs setTimeout(0)
============================================================
📝 Task:
Show how synchronous code runs BEFORE setTimeout(0),
even though the timeout delay is zero.

Write the following in order:

    console.log("A - Start");

    setTimeout(() => {
        console.log("B - Timeout (0ms)");
    }, 0);

    console.log("C - End");

Expected Output:
    A - Start
    C - End
    B - Timeout (0ms)

Goal:
Understand how timer callbacks move to the macrotask queue,
executing only after the current call stack is empty.
----------------------------------------------------------*/

console.log('A - start');

setTimeout(() => console.log('B - timeout (0ms)'), 0);

console.log('C - End');
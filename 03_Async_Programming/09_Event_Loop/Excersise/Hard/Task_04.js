/**
 * ⚡ HARD PRACTICAL — 4 / 7
 * 
 * This one combines async/await, nextTick, Promise, setTimeout, and setImmediate.
 */

console.log("A - Start");

async function asyncFunc() {
    console.log("B - Async Start");

    await Promise.resolve();
    console.log("C - Async End");
}

asyncFunc();

process.nextTick(() => console.log("D - nextTick"));

Promise.resolve().then(() => console.log("E - Promise"));

setTimeout(() => console.log("F - Timeout 0ms"), 0);

setImmediate(() => console.log("G - Immediate"));

console.log("H - End");



/**
 * Output:
 * 
 * A - Start
 * B - Async Start
 * H - End
 * D - nextTick
 * C - Async End
 * E - Promise
 * F - Timeout 0ms
 * G - Immediate
 */





/*
======================================================================
🟦 EXECUTION VISUALIZATION
======================================================================

🔵 SYNCHRONOUS (Call Stack)
----------------------------
A - Start
B - Async Start
H - End

Queues after sync:
   ⚡ nextTick: D
   🔶 Promise: C (asyncFunc continuation), E (top-level)
   ⏱ Timer: F
   🟢 Immediate: G

---

🟣 NEXTTICK QUEUE (VIP - runs before Promises)
-----------------------------------------------
D - nextTick ✅

---

🟡 PROMISE MICROTASK QUEUE (FIFO)
---------------------------------
C - Async End ✅  (await continuation goes first)
E - Promise ✅    (top-level Promise runs next)

---

🔴 TIMER PHASE (setTimeout)
---------------------------
F - Timeout 0ms ✅

---

🟢 CHECK PHASE (setImmediate)
-----------------------------
G - Immediate ✅

---

🎯 FINAL OUTPUT:
A - Start
B - Async Start
H - End
D - nextTick
C - Async End
E - Promise
F - Timeout 0ms
G - Immediate

======================================================================
💡 INSIGHTS:
1️⃣ asyncFunc runs synchronously until the first await
2️⃣ await schedules the continuation as a microtask **ahead of top-level Promises**
3️⃣ nextTick always runs before microtasks
4️⃣ setTimeout runs in Timers phase; setImmediate runs in Check phase
======================================================================
*/

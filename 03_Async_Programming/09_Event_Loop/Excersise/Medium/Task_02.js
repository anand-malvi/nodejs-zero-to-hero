console.log("A - Start");

setTimeout(() => {
    console.log("B - Timeout 1");

    Promise.resolve().then(() => {
        console.log("C - Promise inside Timeout");
    });

    setTimeout(() => {
        console.log("D - Timeout 2 inside Timeout 1");
    }, 0);
}, 0);

Promise.resolve().then(() => {
    console.log("E - Promise 1");
});

console.log("F - End");

/**
 * Output:
 * 
 * A - Start
 * F - End
 * E - Promise 1
 * B - Timeout 1
 * C - Promise inside Timeout
 * D - Timeout 2 inside Timeout 1
*/


/**
 * Explanation
 * 
 * 🔍 Why this happens
 * 1️⃣ Synchronous code → runs first: A, F
 * 2️⃣ Microtasks from main stack → E
 * 3️⃣ First timer → B
 * 4️⃣ Microtasks queued inside timer → C
 * 5️⃣ Nested timer inside timer → D (runs in the next timers phase)
 */
/**
 * 🔥 HARD PRACTICAL — 5 / 7
 * 
 * This one mixes nested async/await, multiple microtask chains, setImmediate, timers, and nextTick inside async functions.
 * This is very hard — perfect for deep mastery of the event loop.
 */
console.log("A - Start");

async function task1() {
    console.log("B - task1 Start");

    await Promise.resolve();
    console.log("C - task1 After Await");

    process.nextTick(() => console.log("D - nextTick inside task1"));

    Promise.resolve().then(() => console.log("E - Promise inside task1"));
}

async function task2() {
    console.log("F - task2 Start");

    await Promise.resolve();
    console.log("G - task2 After Await");

    setImmediate(() => console.log("H - Immediate inside task2"));

    setTimeout(() => console.log("I - Timeout inside task2"), 0);
}

task1();
task2();

process.nextTick(() => console.log("J - nextTick Top"));

Promise.resolve().then(() => console.log("K - Promise Top"));

setTimeout(() => console.log("L - Timeout Top"), 0);

setImmediate(() => console.log("M - Immediate Top"));

console.log("N - End");



/**
 * Output:
 * 
 * A - Start
 * B - task1 Start
 * F - task2 Start
 * N - End
 * J - nextTick Top
 * C - task1 After Await
 * G - task2 After Await
 * K - Promise Top
 * E - Promise inside task1
 * D - nextTick inside task1
 * L - Timeout Top
 * M - Immediate Top
 * H - Immediate inside task2
 * I - Timeout inside task2
 */
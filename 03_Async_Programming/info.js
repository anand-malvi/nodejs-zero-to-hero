/**
 * Below we have priority in node.js 
 * 
 * 1 - console.log('hello'); // I/O operations like synchronous code
 * 2 - process.nextTick(); // Special callback executed before any I/O
 * 3 - Promises: microtasks (Promise.then, catch, finally)
 * 4 - setImmediate(); // Executes after I/O tasks, in the check phase
 * 5 - setTimeout() / setInterval(); // Timers (after I/O operations)
 * 6 - I/O callbacks; // I/O operations (except close events, timers, and setImmediate)
 * 7 - Idle, Prepare; // Internal phases, before entering the event loop proper
 * 8 - close events (e.g., socket.close); // Clean up resources and close connections
 */

/*** Asyn Phase Level Explanation

1 - Synchronous
   -- Console.log()

2 - Microtasks
   -- Promise

3 - Timers Phase
   -- setTimeout()

4 - Poll Phase (I/O callback)
   -- fs.readFile
 */

/**
 * # Quick reference: where to use what
 * 1. process.nextTick(fn) — schedule something to run immediately after the current call stack (very high priority). Use sparingly (e.g., internal module init).
 * 2. Promise.resolve().then(fn) / async/await — schedule microtasks that will run after nextTick but before I/O/timers.
 * 3. setTimeout(fn, 0) — schedule for next timers phase.
 * 4. setImmediate(fn) — schedule for check phase (often used to yield back to the event loop and run at the end of the current poll).
 * 5. worker_threads / child_process — offload CPU heavy tasks.
 * 6. libuv threadpool (fs, crypto) — be mindful of pool size.
*/

/**
 * # A practical recipe for avoiding blocking and starvation
 * 1. Never run heavy CPU loops on the main thread; use worker_threads or chunked processing with setImmediate.
 * 2. Avoid infinite or recursive process.nextTick scheduling.
 * 3. Avoid making heavy synchronous file system calls in hot paths (fs.readFileSync etc.).
 * 4. For many parallel filesystem tasks, either increase UV_THREADPOOL_SIZE or use streaming APIs and limit concurrency with e.g., p-limit.
 */

/**
 * Final comprehensive example — full pipeline with microtasks, timers, I/O, and immediate
 */
const fs = require('fs');

console.log('script start');

setTimeout(() => console.log('timer 1 (0ms)'), 0);

setImmediate(() => console.log('immediate 1'));

Promise.resolve().then(() => {
  console.log('promise 1');
  process.nextTick(() => console.log('nextTick inside promise'));
});

process.nextTick(() => console.log('nextTick 1'));

fs.readFile(__filename, () => {
  console.log('readFile callback start');

  setTimeout(() => console.log('timer inside I/O'), 0);
  setImmediate(() => console.log('immediate inside I/O'));

  Promise.resolve().then(() => console.log('promise inside I/O'));

  console.log('readFile callback end');
});

console.log('script end');

/**
 * # script start
    script end
    nextTick 1
    promise 1
    nextTick inside promise
    timer 1 (0ms)         // or immediate 1 first — platform-dependent at top-level
    immediate 1
    readFile callback start
    readFile callback end
    promise inside I/O
    immediate inside I/O
    timer inside I/O
 */
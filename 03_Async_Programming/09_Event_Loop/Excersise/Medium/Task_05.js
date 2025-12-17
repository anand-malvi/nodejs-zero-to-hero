/**
 * Now write a function called:
 * runAsyncFlow()
 * Inside it, reproduce the exact same behavior:
 *   Print "1 - Start"
 *   Schedule:
 *   a process.nextTick() callback printing "2 - nextTick"
 *   a Promise printing "3 - Promise"
 *   a timeout printing "4 - Timeout"
 * Print "5 - End"
 * Expected output order should be:
 * 
 * 🔧 Coding Extension Task (Part 2)
 * 1 - Start
 * 5 - End
 * 2 - nextTick
 * 3 - Promise
 * 4 - Timeout
 */


function runAsyncFlow() {
    console.log('1 - Start');

    process.nextTick(() => console.log('2 - nextTick'));

    Promise.resolve().then(() => console.log('3 - Promise'));

    setTimeout(() => console.log('4 - Timeout'), 0);

    console.log('5 - End');
}

runAsyncFlow();

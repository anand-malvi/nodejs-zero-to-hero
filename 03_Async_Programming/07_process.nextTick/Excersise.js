/**
 *  
Practical 1 (Beginner)
Write a program that prints the following in this exact order using process.nextTick():

Output:
A
C
B

Where:
"A" prints synchronously
"B" prints inside a setTimeout(..., 0)
"C" prints using process.nextTick()

*/

console.log('A');
setTimeout(() => { console.log('B'); },0);
process.nextTick(() => { console.log('C'); });


/**
 * Practical 2 (Beginner)
    Create a function readUser() that:
    Logs "Start" immediately
    Uses process.nextTick() to log "Next Tick"
    Logs "End" synchronously
 */

function readUser() {
    console.log('Start');
    process.nextTick(() => {
        console.log('Next Tick');
    });
    setImmediate(() => {
        console.log('End');
    });
}
readUser();
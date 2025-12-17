function runAdvancedFlow() {
    console.log('1 - Start');

    process.nextTick(() => console.log('2 - nextTick 1'));

    Promise.resolve().then(() => {
        console.log('3 - Promise 1');

        process.nextTick(() => console.log('4 - nextTick INSIDE Promise'));

        Promise.resolve().then(() => console.log('5 - Promise INSIDE Promise'));
    });

    process.nextTick(() => console.log('6 - nextTick 2'));

    setTimeout(() => {
        console.log('7 - Timeout 1');

        Promise.resolve().then(() => console.log('8 - Promise INSIDE Timeout'));
    }, 0);

    setTimeout(() => console.log('9 - Timeout 2'), 0);

    console.log('10 - End');
}

runAdvancedFlow();





/**
 * Output:
 * 
 * 1 - Start
 * 10 - End
 * 2 - nextTick 1
 * 6 - nextTick 2
 * 3 - Promise 1
 * 4 - nextTick INSIDE Promise
 * 5 - Promise INSIDE Promise
 * 7 - Timeout 1
 * 8 - Promise INSIDE Timeout
 * 9 - Timeout 2
 */
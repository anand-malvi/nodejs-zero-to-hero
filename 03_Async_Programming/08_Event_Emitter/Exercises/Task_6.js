/* ---------------------------------------------------------
⚙️ PRACTICAL 6 — Error Handling with EventEmitter
============================================================
📝 Task:
Create an EventEmitter setup that handles errors gracefully.

Requirements:
    🔹 Create an EventEmitter instance
    🔹 Listen for a custom event named "divideNumbers"
         → It should accept two numbers: (a, b)
         → If b is 0, emit an "error" event
         → Otherwise, print: "Result: <a/b>"
    🔹 Add a listener for "error"
         → Print: "❌ Cannot divide by zero!"

Goal:
Understand how EventEmitter handles errors using custom events.
----------------------------------------------------------*/
const EventEmitter = require('events');
const calcEmitter = new EventEmitter();

// Error listener
calcEmitter.on('error', () => {
    console.log('❌ Cannot divide by zero!');
});

// Main event listener
calcEmitter.on('divideNumbers', (a, b) => {
    if (b === 0) {
        calcEmitter.emit('error');
        return;
    }
    console.log(`Result: ${a / b}`);
});

// Emit with valid numbers
calcEmitter.emit('divideNumbers', 10, 2);

// Emit with zero divisor
calcEmitter.emit('divideNumbers', 5, 0);

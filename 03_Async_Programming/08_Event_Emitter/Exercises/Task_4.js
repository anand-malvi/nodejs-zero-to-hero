/* ---------------------------------------------------------
⚙️ PRACTICAL 4 — EventEmitter with Async Operations
============================================================
📝 Task:
Create an EventEmitter example where the event triggers
an asynchronous operation.

Requirements:
    🔹 Create an EventEmitter instance
    🔹 Event name: "processPayment"
    🔹 When the event is emitted:
          1) Print: "💳 Payment processing started..."
          2) After 2 seconds (using setTimeout):
                Print: "✅ Payment successful!"

Goal:
Learn how to combine async operations with events.
----------------------------------------------------------*/
const EventEmitter = require('events');
const paymentEmitter = new EventEmitter();

paymentEmitter.once('processPayment', () => {
    console.log('💳 Payment processing started...');
    setTimeout(() => console.log('✅ Payment successful!'), 2000);
});

paymentEmitter.emit('processPayment');
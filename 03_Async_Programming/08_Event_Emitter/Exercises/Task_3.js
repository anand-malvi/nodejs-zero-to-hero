/* ---------------------------------------------------------
🏅 PRACTICAL 3 — Multiple Listeners on the Same Event
============================================================
📝 Task:
Create an EventEmitter setup where a single event triggers
multiple independent listeners.

Requirements:
    🔹 Create an EventEmitter instance
    🔹 Create an event named "orderPlaced"
    🔹 Attach 3 separate listeners:
          1) Print: "📦 Order received"
          2) Print: "🧾 Generating invoice..."
          3) Print: "🚚 Preparing shipment"

    🔹 Emit the event one time

Goal:
Understand how multiple listeners work for the same event.
----------------------------------------------------------*/
const EventEmitter = require('events');
const orderActionEmitter = new EventEmitter();

orderActionEmitter.on('orderPlaced', () => {
    console.log('📦 Order received');
});

orderActionEmitter.on('orderPlaced', () => {
    console.log('🧾 Generating invoice...');
});

orderActionEmitter.on('orderPlaced', () => {
    console.log('🚚 Preparing shipment');
});

orderActionEmitter.emit('orderPlaced');
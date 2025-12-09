/* ---------------------------------------------------------
🥉 PRACTICAL 2 — Event with Parameters
============================================================
📝 Task:
Create an EventEmitter example where the event sends dynamic data.

Requirements:
    🔹 Create an EventEmitter instance
    🔹 Create an event named "userRegistered"
    🔹 The event listener should accept 2 parameters:
          👤 name
          📧 email
    🔹 When the event is emitted, print:
          "User Registered: <name> (<email>)"

Goal:
Learn how to pass data through events.
----------------------------------------------------------*/

const EventEmitter = require('events');
const userEmiter = new EventEmitter();

userEmiter.once('userRegistered', (name, email) => {
    console.log(`User Registered: ${name} (${email})`);
});

userEmiter.emit('userRegistered', 'Anand', 'anand@gmail.com');
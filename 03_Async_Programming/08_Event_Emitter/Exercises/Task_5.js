/* ---------------------------------------------------------
⚙️ PRACTICAL 5 — Chained Events (Event Triggering Event)
============================================================
📝 Task:
Create an EventEmitter flow where one event triggers another.

Requirements:
    🔹 Create an EventEmitter instance
    🔹 Event 1: "startUpload"
         → When fired, print: "⬆️ Upload started..."
         → Then emit Event 2 inside it
    🔹 Event 2: "finishUpload"
         → When fired, print: "✅ Upload completed!"

Goal:
Understand how events can trigger other events in sequence.
----------------------------------------------------------*/

const EventEmitter = require('events');
const fileUploadEmitter = new EventEmitter();

fileUploadEmitter.once('finishUpload', () => {
    console.log('✅ Upload completed!'); 
});

fileUploadEmitter.once('startUpload', () => {
    console.log('⬆️ Upload started...');
    fileUploadEmitter.emit('finishUpload');
});

fileUploadEmitter.emit('startUpload');

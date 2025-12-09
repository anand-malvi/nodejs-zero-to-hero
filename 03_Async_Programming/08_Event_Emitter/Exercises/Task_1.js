/**
===========================================================
📘 EVENT EMITTER PRACTICE (Beginner → Medium → Hard)

Purpose:
Learn how to create events, attach listeners, and emit events
using Node.js EventEmitter — all inside the SAME file.
===========================================================
*/

/* ---------------------------------------------------------
🥇 PRACTICAL 1 — Basic Event Creation & Emission
============================================================
📝 Task:
Create a simple EventEmitter flow inside the same file.

Requirements:
    🔹 Create an EventEmitter instance
    🔹 Create a listener for an event named "greet"
    🔹 When "greet" fires, print:
        👉 "Hello from Event Emitter!"
    🔹 Emit the "greet" event

Goal:
Understand how events are created and triggered.
----------------------------------------------------------*/


const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('greet', () => {
    console.log('Hello from Event Emitter!');
});

myEmitter.emit('greet');
// This file will run in the child process

// Handling a CPU-heavy task (game logic, AI calculation)
function gameAI() {
  let result = 0;
  for (let i = 0; i < 1e6; i++) {
    result += Math.random() * Math.random();
  }
  return result;
}

// Send the result back to the parent process
process.on('message', (msg) => {
  if (msg === 'start') {
    const result = gameAI();
    process.send(result); // Send the result back to the parent
  }
});


const { fork } = require('child_process');

// Create a child process to handle the CPU-heavy task
const child = fork('./gameAI.js');

// Listen for messages from the child process (the result)
child.on('message', (result) => {
  console.log('Game AI calculation result:', result);
});

// Start the gameAI computation in the child process
child.send('start');

// Now the main thread can continue to handle other requests or events without blocking
console.log('Main thread is free to handle other tasks...');

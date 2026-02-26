// input.js
// console.log("Enter your name:");

// process.stdin.on("data", (data) => {
//   const name = data.toString().trim();
//   console.log(`Hello, ${name}`);
//   process.exit(0);
// });



// process.stdin.pause();


// process.stdin.setEncoding('utf8');
// process.stdin.on('data', (input) => {
//   console.log(`Received input: ${input}`);
// });



// process.stdout.write('What is your name? ');

// process.stdin.on('data', (input) => {
//   const name = input.toString().trim();
//   console.log(`Hello, ${name}!`);
//   process.exit(); // Ends the program after getting input
// });




const { spawn } = require('child_process');
const child = spawn('grep', ['hello']);

process.stdin.pipe(child.stdin);

child.stdout.on('data', (data) => {
  console.log(`Output: ${data}`);
});



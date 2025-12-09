/**
 * main.js
 * ---------------------------------------
 * Here we will reuse the calculator module using CommonJS `require()`.
 * 
 * 💡 Definition:
 * CommonJS is a module system used in JavaScript to split code into separate files and manage dependencies.
 * It allows the use of require() to import modules and module.exports to export them,
 * making code more modular and reusable. CommonJS is primarily used in Node.js environments.
 *
 * It then calls each calculator function and
 * prints the results to the console.
 * 
 * 🎯 Key Points (for Notes)
 * - This concept mainly used for resuing the fetures in node.js
 * - No need of use .js extension while using require()
 * - This is synchronous loading
 *
 * This Explain:
 *   ✓ How to import a CommonJS module
 *   ✓ How to call exported functions
 *   ✓ A clean structure used in real Node.js apps
 */

// Import the calculator functions using destructring from calculator.js
const { add, subtract, multiply, divide } = require('./Calculator');

// Test values
const num1 = 20;
const num2 = 5;

// Calling and displaying results of operations
console.log( add(num1, num2) );       //Output: 25
console.log( subtract(num1, num2) );  //Output: 15
console.log( multiply(num1, num2) );  //Output: 100
console.log( divide(num1, num2) );    //Output: 4

/**
 * calculator.js
 * ---------------------------------------
 * This file explain CommonJS module exports.
 * Here we are making this calculator functions reusable for whole project
 * 
 * It contains a simple Calculator with 4 operations:
 *   1. add
 *   2. subtract
 *   3. multiply
 *   4. divide
 *
 * Each function is exported using module.exports
 * so that other files (like main.js) can import and use them.
 */

// ➕ Addition Function
// Takes 2 numbers and returns their sum.
function add(a, b) {
    return a + b;
}

// ➖ Subtraction Function
// Returns the result of a minus b.
function subtract(a, b) {
    return a - b;
}

// ✖️ Multiplication Function
// Returns the product of two numbers.
function multiply(a, b) {
    return a * b;
}

// ➗ Division Function
// Includes a safety check for division by zero.
function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero!";
    }
    return a / b;
}

// Exporting all functions as a module
// This allows main.js to import them using require()
module.exports = {
    add,
    subtract,
    multiply,
    divide
};

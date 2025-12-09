/**
 * ===========================================================
 * 📦 FILE: main.js
 * PURPOSE:
 * Demonstrates how to import and use Task_1.js, Task_2.js, Task_3.js
 * ===========================================================
 */

// Import the modules
const getWelcomeMessage = require('./Task_1');        // Task 1
const userInfo = require('./Task_2');                // Task 2
const stringUtils = require('./Task_3');             // Task 3

console.log("=== Welcome Module ===");
console.log(getWelcomeMessage());

console.log("\n=== User Info Module ===");
console.log(userInfo.getUserName());
console.log(userInfo.getUserEmail());

console.log("\n=== String Utilities Module ===");
const sampleText = "HeLLo WoRLd!";
console.log("Original Text: ", sampleText);
console.log("Lowercase: ", stringUtils.toLower(sampleText));
console.log("Uppercase: ", stringUtils.toUpper(sampleText));

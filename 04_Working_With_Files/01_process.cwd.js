/**
 * ---------------------------------------
 * Here we will explore the Node.js `process.cwd()` method using CommonJS `require()`.
 *
 * 💡 Definition:
 * `process.cwd()` stands for *Current Working Directory*.  
 * It returns the directory from which the Node.js process was started.
 *
 * In simple words:
 *   → If you run:  node app/main.js
 *     The folder **where you run the command** becomes the CWD.
 *
 * This is different from `__dirname`, which gives the *directory of the current file*.
 *
 * `process.cwd()` is extremely useful when:
 *   - Running scripts via CLI
 *   - Handling dynamic file paths
 *   - Working with project root-based paths
 *   - Building enterprise folder structures
 *
 * 🎯 Key Points (for Notes)
 * - Returns the directory where Node.js was executed
 * - NOT the directory of the file (`__dirname` handles that)
 * - Affected by terminal location
 * - Useful for CLI tools, config loaders, and root-level resolving
 * - Works perfectly with path.join(), path.resolve()
 * - Can be changed using process.chdir()
 *
 * This Explains:
 *   ✓ What process.cwd() is
 *   ✓ Why Node.js needs a working directory
 *   ✓ Difference between process.cwd() and __dirname
 *   ✓ How CWD affects file handling
 *   ✓ How enterprises use CWD for dynamic path resolution
 *
 * ---------------------------------------
 * Practical Example (Demonstration)
 */
 
const path = require("path");

// Print the current working directory
console.log("A: Current Working Directory:", process.cwd());
// Output: ROOT/nodejs-zero-to-hero/04_Working_With_Files

// Joining a path relative to the current working directory
const logFile = path.join(process.cwd(), "logs", "server.log");
console.log("B: Log File Path:", logFile);
// Output: ROOT/nodejs-zero-to-hero/04_Working_With_Files/logs/server.log

// Compare with __dirname (directory of this file)
console.log("C: __dirname:", __dirname);
// Output: ROOT/nodejs-zero-to-hero/04_Working_With_Files

// Change working directory to parent folder
process.chdir("..");
console.log("D: After process.chdir('..'):", process.cwd());
// Output: ROOT/nodejs-zero-to-hero

// Build a path again after shifting CWD
const configPath = path.join(process.cwd(), "config", "app.json");
console.log("E: New Config Path:", configPath);
// Output: ROOT/nodejs-zero-to-hero/config/app.json

/**
 * Summary of Outputs:
 *
 * A → Where Node.js was executed  
 * B → A file path based on CWD  
 * C → The location of this file  
 * D → CWD changed using process.chdir()  
 * E → New path based on updated CWD  
 *
 * 🧠 Key Understanding:
 *   - CWD = Running directory
 *   - __dirname = File’s directory
 *   - CWD is dynamic and can change
 *   - __dirname is fixed for the file
 *
 */

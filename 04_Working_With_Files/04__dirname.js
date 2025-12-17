/**
 * ---------------------------------------
 * Here we will explore the Node.js `__dirname` variable.
 *
 * 💡 Definition:
 * `__dirname` is a special built-in Node.js variable that gives you the 
 * **absolute directory path of the file that is currently being executed**.
 *
 * In simple words:
 *   → It tells you **where this JS file lives on your computer**.
 *
 * 🧭 Important Note:
 * `__dirname` ALWAYS points to the directory of the file itself — 
 * not where you run `node` from.
 *
 * Example:
 *   If you run:
 *     cd Desktop
 *     node project/app.js
 *
 *   Then:
 *     ✓ process.cwd() = Desktop
 *     ✓ __dirname     = /Users/Anand/Desktop/project
 *
 * This is one of the most important differences in Node.js.
 *
 * ---------------------------------------
 * 🎯 Why `__dirname` Is Needed?
 *
 * Without `__dirname`, Node.js would have no idea where the current file 
 * physically exists. This matters when you want to:
 *
 * - Load templates (HTML, emails, reports)
 * - Load JSON files or other local configs
 * - Serve static files in Express.js
 * - Build file paths safely across folders
 * - Access sibling folders (public, uploads, assets)
 * - Avoid broken relative paths like "../data"
 *
 * `__dirname` makes your application **stable and predictable** in all environments.
 *
 * ---------------------------------------
 * 🎯 Key Points (for Notes)
 * - Gives absolute path of current file's folder
 * - Does NOT depend on where you run node command
 * - Always consistent and reliable
 * - Works perfectly with `path.join()` and `fs`
 * - Essential for loading local files safely
 * - Different from `process.cwd()` (runtime directory)
 *
 * ---------------------------------------
 * 🏢 Enterprise Real Scenario (Simple Example)
 *
 * 1️⃣ A company stores email templates inside:
 *      /templates/email.html
 *
 * 2️⃣ Backend needs to load that file for sending an email.
 *
 * ❌ Using relative paths may break:
 *      "./templates/email.html"
 *      (depends on where Node was executed)
 *
 * ✔ Using __dirname ensures correct path:
 *      path.join(__dirname, "templates", "email.html")
 *
 * This is used by:
 *   - Notification systems
 *   - Payment receipt generators
 *   - CRM dashboards
 *   - Authentication systems sending OTP emails
 *
 * ---------------------------------------
 * Practical Example (Demonstration)
 */

const path = require("path");

// Print the directory of this file
console.log("A: __dirname:", __dirname);
// Output (example): ROOT/nodejs-zero-to-hero/04_Working_With_Files

// Build a path to a data file next to this JS file
const dataPath = path.join(__dirname, "data", "user.json");
console.log("B: Data File Path:", dataPath);
// Output: ROOT/nodejs-zero-to-hero/04_Working_With_Files/data/user.json

// Compare with process.cwd()
console.log("C: process.cwd():", process.cwd());
// Output depends on where you run `node`, dirname does not.

// Example usage: loading a template file
const templatePath = path.join(__dirname, "templates", "welcome.html");
console.log("D: Email Template Path:", templatePath);

/**
 * ---------------------------------------
 * Summary of Outputs:
 *
 * A → Absolute directory where THIS file exists  
 * B → Safe path built using __dirname  
 * C → Working directory where Node.js was executed  
 * D → Common enterprise use-case (templates)
 *
 * ---------------------------------------
 * 🧠 Key Understanding:
 *
 * - `__dirname` = location of your file (always correct)
 * - `cwd` = location you are standing in terminal (can change)
 * - Use __dirname for:
 *      • templates
 *      • configs
 *      • html files
 *      • static assets
 *      • sibling folders
 * - Use cwd for:
 *      • logs
 *      • CLI tools
 *      • environment configs
 *
 * ---------------------------------------
 * This makes `__dirname` one of the safest and most powerful
 * tools when working with files in Node.js.
 * ---------------------------------------
 */

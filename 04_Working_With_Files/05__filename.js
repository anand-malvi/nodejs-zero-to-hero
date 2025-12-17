/**
 * ---------------------------------------
 * Here we will explore the Node.js `__filename` variable.
 *
 * 💡 Definition:
 * `__filename` is a special built-in Node.js variable that returns the
 * **absolute full file path** of the currently executing JavaScript file,
 * including the file name itself.
 *
 * In simple words:
 *   → `__dirname` gives the folder path
 *   → `__filename` gives the folder path + file name
 *
 * Example:
 *   If this file is located at:
 *     /Users/Anand/Desktop/project/app.js
 *
 *   Then:
 *     __filename → "/Users/Anand/Desktop/project/app.js"
 *
 * ---------------------------------------
 * 🎯 Why `__filename` Is Needed?
 *
 * Node.js applications often need to:
 *   - Know exactly which file is running
 *   - Load files relative to the current file
 *   - Debug errors from specific files
 *   - Build full file paths safely
 *   - Create module loaders and CLI tools
 *
 * Since Node.js applications run in many environments (your PC, servers, Docker),
 * `__filename` ensures your file paths are always accurate and stable.
 *
 * ---------------------------------------
 * 🧠 Difference between `__dirname` and `__filename`
 *
 *   __dirname   → directory path of the current file  
 *   __filename  → directory + file name (full path)
 *
 * Example:
 *   File location:
 *     /Users/Anand/project/utils/helper.js
 *
 *   __dirname  → "/Users/Anand/project/utils"
 *   __filename → "/Users/Anand/project/utils/helper.js"
 *
 * ---------------------------------------
 * 🎯 Key Points (For Notes)
 *
 * - Gives full absolute path of the file being executed
 * - Not affected by where you run `node` command
 * - Safe and reliable for all environments
 * - Commonly paired with `path.join()` for building file paths
 * - Very useful in debugging and logging
 * - Essential for template loaders and local file access
 *
 * ---------------------------------------
 * 🏢 Enterprise Real Scenario (Beginner-Friendly)
 *
 * Imagine a large backend system that sends emails using HTML templates:
 *
 *   /emails/welcome.html
 *   /emails/reset-password.html
 *
 * To load these templates from inside your Node.js file:
 *
 *   const templatePath = path.join(__dirname, "emails", "welcome.html");
 *   console.log(__filename);  // Helps identify which file is loading the template
 *
 * Companies use this for:
 *   - Sending emails
 *   - Generating receipts
 *   - Rendering PDFs
 *   - Logging exact file where error occurred
 *
 * ---------------------------------------
 * Practical Example (Demonstration)
 */

const path = require("path");

// Print the full path including file name
console.log("A: __filename:", __filename);
// Output (example): ROOT/nodejs-zero-to-hero/04_Working_With_Files/05__filename.js

// Extract only the directory portion using path.dirname()
console.log("B: Using path.dirname:", path.dirname(__filename));
// Output: ROOT/nodejs-zero-to-hero/04_Working_With_Files

// Build a new file path relative to this file
const siblingFile = path.join(path.dirname(__filename), "sample.txt");
console.log("C: Sibling File Path:", siblingFile);
// Output: ROOT/nodejs-zero-to-hero/04_Working_With_Files/sample.txt

// Extract file name only
console.log("D: File Name:", path.basename(__filename));
// Output: 05__filename.js

/**
 * ---------------------------------------
 * Summary of Outputs:
 *
 * A → Full path of THIS file including filename  
 * B → Directory extracted using path.dirname()  
 * C → How to build paths relative to the current file  
 * D → Name of the current file  
 *
 * ---------------------------------------
 * 🧠 Key Understanding:
 *
 * - `__filename` is ALWAYS the complete absolute path of the running file
 * - It does NOT depend on terminal location (`process.cwd()` does)
 * - It helps when writing code that works everywhere: dev, staging, production
 * - It is a fundamental part of how Node.js identifies modules
 *
 * ---------------------------------------
 * End of `__filename` documentation
 * ---------------------------------------
 */

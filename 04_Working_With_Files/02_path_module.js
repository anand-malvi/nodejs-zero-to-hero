/**
 * ---------------------------------------
 * Here we will explore the Node.js Path Module using CommonJS `require()`.
 *
 * 💡 Definition:
 * The Path Module is a core Node.js module that provides utilities for
 * working with file and directory paths. It helps us create, join, resolve,
 * normalize, and manipulate file system paths in a safe and cross-platform way.
 *
 * Path Module makes sure that paths work correctly on:
 *   - Linux/macOS (uses `/`)
 *   - Windows (uses `\`)
 *
 * It removes the need to manually build strings like "../folder/file.txt"
 * and ensures correct results everywhere.
 *
 * 🎯 Key Points (for Notes)
 * - Used to handle file and folder paths safely in Node.js
 * - Avoids hardcoding paths (which breaks in production)
 * - Works on all operating systems without changing code
 * - Commonly paired with `fs`, `__dirname`, and `process.cwd()`
 * - Helps avoid path traversal errors such as `../../..`
 *
 * This Explains:
 *   ✓ How to import the Path Module
 *   ✓ How to join and resolve paths safely
 *   ✓ How to normalize and parse paths
 *   ✓ How enterprises use path utilities with fs and express
 *
 * ---------------------------------------
 * Practical Example (Demonstration)
 */

const path = require("path");

// Join multiple folders into a clean path
const filePath = path.join(__dirname, "data", "users", "info.json");
console.log("Joined Path:", filePath);
// Output: ROOT/nodejs-zero-to-hero/04_Working_With_Files/data/users/info.json


// Resolve absolute path from current working directory
const absolute = path.resolve("logs", "app.log");
console.log("Absolute Path:", absolute);
// Output: ROOT/nodejs-zero-to-hero/04_Working_With_Files/logs/app.log

// Normalize messy paths
const cleaned = path.normalize("/user/desktop///project/../config/");
console.log("Normalized:", cleaned);
// Output: /user/desktop/config/

// Parse a file path into components
const parsed = path.parse("/Users/Anand/Desktop/project/app.js");
console.log("Parsed Path:", parsed);
/**
 * Output:
 * 
 * Parsed Path: {
 *   root: '/',
 *   dir: '/Users/Anand/Desktop/project',
 *   base: 'app.js',
 *   ext: '.js',
 *   name: 'app'
 * }
 */



// ------------- Available methods ----------------------- //
/**
 * path.basename(path[, suffix])
 * path.delimiter
 * path.dirname(path)
 * path.extname(path)
 * path.format(pathObject)
 * path.matchesGlob(path, pattern)
 * path.isAbsolute(path)
 * path.join([...paths])
 * path.normalize(path)
 * path.parse(path)
 * path.posix
 * path.relative(from, to)
 * path.resolve([...paths])
 * path.sep
 * path.toNamespacedPath(path)
 * path.win32
 */
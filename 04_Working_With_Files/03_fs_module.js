/**
 * ---------------------------------------
 * Here we will explore the Node.js `fs` (File System) Module using CommonJS `require()`.
 *
 * 💡 Definition:
 * The FS Module is a core Node.js module that allows JavaScript code to interact
 * directly with the operating system’s file system. This means your Node program
 * can create files, read files, write content, rename files, delete files,
 * create folders, watch changes, and even stream large files efficiently.
 *
 * In simple words:
 *   → FS module helps Node.js talk to your computer’s files and folders.
 *
 * 🎯 Why FS Module Exists?
 * JavaScript originally ran only in the browser and **couldn't access system files**.
 * Node.js introduced the `fs` module to:
 *   - Build backend applications
 *   - Save logs or reports
 *   - Upload files (PDF, images, etc.)
 *   - Store configurations and temporary data
 *   - Process large files (CSV, video chunks)
 *
 * 🧩 Synchronous vs Asynchronous FS Methods
 * 1️⃣ **Synchronous (Blocking)**  
 *    - Code waits until file operation finishes  
 *    - Used rarely (startup scripts or small tools)  
 *
 * 2️⃣ **Asynchronous (Non-Blocking, Preferred)**  
 *    - Code continues execution  
 *    - Uses callbacks, Promises, or async/await  
 *    - Best for real applications and APIs  
 *
 * ---------------------------------------
 * 🏢 Enterprise-Level Use Cases of FS Module
 * ✔ Reading configuration files (JSON, .env, YAML)
 * ✔ Writing logs (app.log, error.log)
 * ✔ Handling uploads (images, PDFs, CSV files)
 * ✔ Caching API data locally
 * ✔ Reading email templates or HTML files
 * ✔ Creating backups or exports
 * ✔ Watching files for auto-reload in dev tools
 * ✔ Streaming large files (videos, large CSV imports)
 *
 * ---------------------------------------
 * This Explains:
 *   ✓ How to create a new file
 *   ✓ How to update (overwrite) file content
 *   ✓ How to rename a file safely
 *   ✓ How fs + path work together for safe file handling
 *
 * ---------------------------------------
 * Practical Example (Demonstration)
 * A simple and clean flow:
 *   1️⃣ Create → 2️⃣ Update → 3️⃣ Rename
 *
 * This is one of the most common real-world workflows.
 * ---------------------------------------
 */

const fs = require("fs");
const path = require("path");

// File paths
const filePath = path.join(__dirname, "demo-file.txt");
const updatedContent = "This is UPDATED content.\n";
const renamedFile = path.join(__dirname, "demo-file-renamed.txt");

// 1️⃣ CREATE a new file ----------------------------------------------------
fs.writeFile(filePath, "This is the initial content.\n", (err) => {
  if (err) return console.error("❌ Error creating file:", err);
  console.log("1️⃣ File created:", filePath);

  // 2️⃣ UPDATE (overwrite) the file content -------------------------------
  fs.writeFile(filePath, updatedContent, (err) => {
    if (err) return console.error("❌ Error updating file:", err);
    console.log("2️⃣ File updated with new content.");

    // 3️⃣ RENAME the file -------------------------------------------------
    fs.rename(filePath, renamedFile, (err) => {
      if (err) return console.error("❌ Error renaming file:", err);
      console.log("3️⃣ File renamed to:", renamedFile);
    });
  });
});

/**
 * ---------------------------------------
 * 🧠 Summary of Concepts:
 *
 * 1️⃣ fs.writeFile()
 *     - Creates a file if it doesn’t exist
 *     - Overwrites file content if file exists
 *
 * 2️⃣ fs.rename()
 *     - Renames or moves a file
 *
 * ---------------------------------------
 * Key Understanding for Beginners:
 *
 * ✓ Node.js cannot work with files without the fs module
 * ✓ Always use `path.join()` to avoid OS path errors
 * ✓ writeFile() = create OR update (overwrite)
 * ✓ rename() is used for renaming OR moving files to another folder
 *
 * ---------------------------------------
 * ⭐ Real-Life Examples:
 *
 * • Creating `error.log` every day in production
 * • Updating user-uploaded images (rename with timestamps)
 * • Overwriting export files (reports, backups)
 * • Preparing temporary files before uploading to AWS S3 or Cloudinary
 *
 * ---------------------------------------
 * End of FS Module Notes
 * ---------------------------------------
 */

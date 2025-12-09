/**
 * ===========================================================
 * 📦 FILE: Task_2.js
 * PRACTICAL 2 — User Info Module
 * -----------------------------------------------------------
 * Exports two functions:
 *   getUserName()  → returns "Hi Anand"
 *   getUserEmail() → returns "Email is hianand@gmail.com"
 * ===========================================================
 */

function getUserName() {
    return "Hi Anand";
}

function getUserEmail() {
    return "Email is hianand@gmail.com";
}

// Exporting both functions as an object
module.exports = {
    getUserName,
    getUserEmail
};

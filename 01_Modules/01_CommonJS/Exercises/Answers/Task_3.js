/**
 * ===========================================================
 * 📦 FILE: Task_3.js
 * PRACTICAL 3 — String Utilities
 * -----------------------------------------------------------
 * Exports two functions:
 *   toLower(str) → converts a string to lowercase
 *   toUpper(str) → converts a string to uppercase
 * ===========================================================
 */

function toLower(str) {
    return str.toLowerCase();
}

function toUpper(str) {
    return str.toUpperCase();
}

// Export both functions
module.exports = {
    toLower,
    toUpper
};

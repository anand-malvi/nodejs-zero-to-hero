process.stdout.write('database coonected\n');
process.stderr.write('something went wrong\n');
process.exit(1);

// High-performance Logging Pattern
function logInfo(msg) {
  process.stdout.write(`[INFO] ${msg}\n`);
}

/// High-performance Error Logging Pattern  
function logError(msg) {
  process.stderr.write(`[ERROR] ${msg}\n`);
}


process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on("data", (key) => {
  const char = key.toString();
  if (char === "q") {
    process.stdout.write("\nExiting...\n");
    process.exit(0);
  }
  process.stdout.write(`Key pressed: ${char}\n`);
});



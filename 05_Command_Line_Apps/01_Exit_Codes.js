setTimeout(() => {
  console.log("Will never run");
}, 1000);

process.exit(0);
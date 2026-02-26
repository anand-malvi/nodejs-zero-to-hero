const args = process.argv.slice(2);

const username = args[0];

if (!username) {
    console.error('Invalid username!');
    process.exit(1);
}

console.log(`Hello ${username}`);
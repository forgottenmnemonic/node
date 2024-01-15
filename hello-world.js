console.log("hello fucker");
// Import the readline module
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for their name
rl.question('Please enter your name: ', (name) => {
    // Repeat the name back to the user
    console.log(`Fuck you ${name}`);

    // Close the readline interface
    rl.close();
});
const readline = require("node:readline"); // Imports Node.js readline module to allow user input through the console
const { main } = require("./PrimeTables"); // Imports the main function which runs the prime table application

const rl = readline.createInterface({ // Creates an interface for reading user input from the terminal
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the number of primes: ", (input) => { // Asks the user how many prime numbers they want in the multiplication table
    console.time("Total program");   // Measures the total execution time of the program
    main(Number(input)); // Converts the user's input to a number and starts the application
    console.timeEnd("Total program"); 
    rl.close();  // Closes the input interface once the program has finished
});
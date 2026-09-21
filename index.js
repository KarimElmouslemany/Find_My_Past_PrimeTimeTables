const readline = require("node:readline");
const { main } = require("./PrimeTables");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the number of primes: ", (input) => {
    main(Number(input));
    rl.close();
});
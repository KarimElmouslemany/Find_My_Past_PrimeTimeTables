const readline = require("node:readline");
const { main } = require("./PrimeTables");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the number of primes: ", (input) => {
    console.time("Total program");
    main(Number(input));
    console.timeEnd("Total program");
    rl.close();
});
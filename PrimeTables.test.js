const test = require('node:test');
const assert = require("node:assert");

const {  IsPrime,generatePrimes, createTable,fillTable,main,formatTable,} = require('./PrimeTables'); // importes all the function that will be tested 
// testing for  is the number a prime number 
test("2 is a prime number", () => {
    assert.strictEqual(IsPrime(2), true);
});
test("4 is not a prime number", () => {
    assert.strictEqual(IsPrime(4), false);
});
test("1 is not a prime number", () => {
    assert.strictEqual(IsPrime(1), false);
});
test("9 is not a prime number", () => {
    assert.strictEqual(IsPrime(9), false);
});
test('return true that this number is a prime number',() =>{
    const result = IsPrime(3);
    assert.strictEqual(result,true);
})
// testing if the right number of N primes will return 
test("returns the first prime when N = 1", () => {
    assert.deepStrictEqual(generatePrimes(1), [2]);
});

test('return the first 3 prime numbers when N = 3',() =>{
    const result = generatePrimes(3);
    assert.deepStrictEqual(result,[2,3,5])
})

test("returns the first 5 primes when N = 5", () => {
    assert.deepStrictEqual(generatePrimes(5),[2, 3, 5, 7, 11]);
});
// testing the number of rows created are correct in the table; 
test("creates 4 rows for 3 primes", () => {
    const primes = [2, 3, 5];
    const table = createTable(primes);

    assert.strictEqual(table.length, 4);
});
test("creates 2 rows for 1 prime", () => {
    const primes = [2];
    const table = createTable(primes);

    assert.strictEqual(table.length, 2);
});
// testing of validation
test("rejects a decimal number", () => {
    assert.strictEqual(main(3.5), false);
});
test("rejects zero", () => {
    assert.strictEqual(main(0), false);
});
test("accepts one", () => {
    assert.strictEqual(main(1), true);
});
test("accepts a valid whole number", () => {
    assert.strictEqual(main(3), true);
});
// testing if the table is fiiled correctly and right order 
test("fills the table correctly for one prime", () => {
    const primes = [2];
    const table = createTable(primes);

    fillTable(table, primes);

    assert.deepStrictEqual(table, [
        ["", 2],
        [2, 4]
    ]);
});

test("fills the table correctly for three primes", () => {
    const primes = [2, 3, 5];
    const table = createTable(primes);

    fillTable(table, primes);

    assert.deepStrictEqual(table, [
        ["", 2, 3, 5],
        [2, 4, 6, 10],
        [3, 6, 9, 15],
        [5, 10, 15, 25]
    ]);
});

// testing for format is correct 
test("formats a table correctly", () => {

    const table = [
        ["", 2, 3, 5],
        [2, 4, 6, 10]
    ];

    const expected =
        "\t2\t3\t5\n" +
        "2\t4\t6\t10\n";

    assert.strictEqual(formatTable(table), expected);
});
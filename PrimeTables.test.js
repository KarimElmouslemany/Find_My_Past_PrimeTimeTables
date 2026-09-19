const test = require('node:test');
const assert = require("node:assert");

const {IsPrime,iteration_loop} = require('./PrimeTables');

test('return true that this number is a prime number',() =>{
    const result = IsPrime(3);
    assert.strictEqual(result,true);
})
test('return the first  prime numbers when N = 1',() =>{
    const result = iteration_loop(1);
    assert.deepStrictEqual(result,[2])
})
test('return the first 3 prime numbers when N = 3',() =>{
    const result = iteration_loop(3);
    assert.deepStrictEqual(result,[2,3,5])
})

test('return the first 5 prime numbers when N = 5',()=>{
     const result = iteration_loop(5);
     assert.deepStrictEqual(result,[2, 3, 5, 7, 11]);
})

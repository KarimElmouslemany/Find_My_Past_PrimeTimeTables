# Find_My_Past_PrimeTimeTables

## How to Run

### Requirements

Before running the application, make sure that Node.js is installed on your computer.

You can check that Node.js is installed by running:

```bash
node --version
```

No additional packages are required because the application uses Node.js built-in modules.

### Running the Application

1. Clone or download this repository.

2. Open a terminal and navigate to the project directory.

For example:

```bash
cd Find_My_Past_PrimeTimeTables
```

3. Run the application using:

```bash
node index.js
```

4. The application will ask you to enter the number of prime numbers you would like to generate.

For example:

```text
Enter the number of primes: 10
```

The input must be a whole number greater than or equal to `1`.

The application will then generate the requested prime numbers and display their multiplication table in the console.

For example, entering `3` will generate:

```text
    2   3   5
2   4   6   10
3   6   9   15
5   10  15   25
```

### Running the Tests

The project uses Node.js's built-in test runner, so no additional testing framework needs to be installed.

To run the unit tests, use:

```bash
node --test PrimeTables.test.js
```

The terminal will display the results of each test and show how many tests passed or failed.

## What I'm Pleased With

I am pleased with the unit testing in this project because this was something I had not done before. I used Node.js's built-in test runner to test the prime-checking logic, prime generation, input validation, table creation, table filling and formatting.

Writing the tests helped me understand how useful testing is when making changes to code. While improving the prime-number algorithm and refactoring the structure of the program, the tests helped confirm that the existing functionality was still working correctly.

I am also pleased with the performance improvements made to the prime-generation algorithm, such as limiting divisor checks to the square root of a number and skipping unnecessary even-number checks.

## What I Would Do With More Time

If I had more time, I would investigate further ways to improve the performance of the program, particularly the table-generation stage, which currently takes around 12–15 ms when using `N = 1000`.

I would also explore more advanced unit testing, including additional edge cases and larger inputs, to improve the reliability and test coverage of the application.
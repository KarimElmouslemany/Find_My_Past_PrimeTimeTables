function createTable(list_prime) {
  console.time("Table creation");
  let Table = []; // Stores the multiplication table as a 2D array
  for (let i = 0; i < list_prime.length + 1; i++) {
    Table[i] = [];  // Creates each row of the table
  }
  console.timeEnd("Table creation");
  return Table;
}
function fillTable(Table, list_prime) {
  console.time("Table filling");
  Table[0][0] = "";
  for (let i = 0; i < list_prime.length; i++) {  // Adds the prime numbers to the top row and left column
    Table[0][i + 1] = list_prime[i]; // top edge
    Table[i + 1][0] = list_prime[i]; // left edge
  }

  for (let i = 0; i < list_prime.length; i++) {  // Calculates each multiplication value in the table
    for (let j = 0; j < list_prime.length; j++) {
      Table[i + 1][j + 1] = list_prime[i] * list_prime[j]; // times the prime numbers and addes them to the table
    }
  }
  console.timeEnd("Table filling");
  return Table;

}
function formatTable(Table) {
  console.time("Table Formatting");
  let output = "";
  for (let i = 0; i < Table.length; i++) {
    output += Table[i].join("\t") + "\n";  // Converts each table row into a tab-separated line
  }

  console.timeEnd("Table Formatting");
  return output;
}
function displayTable(Table) {
  console.log(formatTable(Table));  // Formats and displays the completed multiplication table
}
function generatePrimes(N) {
  console.time("generatePrimes");
  let number_of_prime = 0;
  let count = 0;
  let N_prime_numbers = [];

  while (number_of_prime < N) {  // Continues until the requested number of primes has been found
    if (IsPrime(count) == true) {
      number_of_prime += 1; 
      N_prime_numbers.push(count); // Adds the prime number to the result array
    }
    if (count == 2) {   // After 2, skips even numbers because they cannot be prime
      count += 1; 
    } else {
      count += 2; 
    }
  }
  console.timeEnd("generatePrimes");
  return N_prime_numbers;
}

function IsPrime(number) {
  if (number >= 2) {
    
    for (let i = 2; i <= Math.sqrt(number); i++) { // Only checks divisors up to the square root of the number
      if (number % i === 0) {  // check if the number can be devide by as a whole number
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

function main(N) {
  
  if (Number.isInteger(N) == false) {  // Rejects values that are not whole numbers
    console.log("please enter a whole number");
   
    return false;
  }
  if (N < 1) {  // N must be at least 1
    console.log("Enter a whole number greater than or equal to 1 ");
    return false;
  }
    const primes = generatePrimes(N); // Generates the first N prime numbers
    const created_table = createTable(primes); // Creates the empty table structure
    const filledTable = fillTable(created_table,primes) // Fills the table with values
    displayTable(filledTable); // Displays the completed table
    return true;
}

module.exports = { // Exports functions so they can be accessed by the test file
  IsPrime,
  generatePrimes,
  createTable,
  fillTable,
  main,
  displayTable,
  formatTable,
};

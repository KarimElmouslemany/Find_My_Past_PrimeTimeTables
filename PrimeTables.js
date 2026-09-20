const { table } = require("node:console");

let number_of_prime = 0;
let count = 0;
let N_prime_numbers = [];

function creating_table(list_prime) {
  let Table = []; // creating the table
  for (let i = 0; i < list_prime.length + 1; i++) {
    Table[i] = []; // fill the table and making it into a 2D array
  }
  filling_table(Table, list_prime); // sending the created table to the filling function
}
function filling_table(Table, list_prime) {
  console.log("the list: ", list_prime);
  for (let i = 0; i < list_prime.length; i++) {
    // loops through the N prime numbers and addes them to the top edge and left edge
    Table[0][i + 1] = list_prime[i]; // top edge
    Table[i + 1][0] = list_prime[i]; // left edge
  }

  for (let i = 0; i < list_prime.length; i++) {
    // loops through N prime numbers
    for (let j = 0; j < list_prime.length; j++) {
      // loops through N prime numbers
      Table[i + 1][j + 1] = list_prime[i] * list_prime[j]; // times the prime numbers and addes them to the table
    }
  }
  console.log(Table);
}
function iteration_loop(N) {
  // count until found all N prime numbers
  while (number_of_prime < N) {
    if (IsPrime(count) == true) {
      // checks if Is prime is true
      number_of_prime += 1; // increase counter by one
      N_prime_numbers.push(count); // addes the prime number to the array  N_prime_numbers that was declared at the top of the file
      count += 1; // increase the counter by one
      IsPrime(count);
    } else {
      count += 1; // increase counter by one
      IsPrime(count); // calls the function to check if its a prime
    }
  }

  creating_table(N_prime_numbers); // calls the creating table function
  return N_prime_numbers;
}

function IsPrime(number) {
  if (number >= 2) {
    // checks the number entered is lager then 2
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        // check if the number can be devide by as a whole number
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

iteration_loop(3);
module.exports = { IsPrime, iteration_loop };

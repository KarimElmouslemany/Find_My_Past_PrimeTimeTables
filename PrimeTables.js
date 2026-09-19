const { table } = require("node:console");

let number_of_prime =0;
let count =0;
let N_prime_numbers = [];

function creating_table(list_prime){
  let Table = [];
  for(let i =0; i < list_prime.length; i++){
    Table[i] = [];
  }
  filling_table(Table,list_prime)
}
function filling_table(Table,list_prime){
  for(let i = 0; i < list_prime.length; i++){
    for(let j =0; j< list_prime.length; j++){
        Table[i][j] = list_prime[i]* list_prime[j];
    }
  }
  console.log(Table);
}
function iteration_loop(N){
  while(number_of_prime < N){

      if(IsPrime(count) == true){
        number_of_prime+=1;
        N_prime_numbers.push(count);
        count+=1;
        IsPrime(count);
      }else{
          count+=1;
         IsPrime(count);
      }
  }

  creating_table(N_prime_numbers);
  return N_prime_numbers;
  
}

function IsPrime(number) {
  if(number >= 2){
      for(let i =2; i< number; i++){
          if( number % i ===0){
              return false
          }
      }
      return true
  }else{
    return false;
  }

}

iteration_loop(3);
module.exports = {IsPrime,iteration_loop};

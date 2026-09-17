let number_of_prime =0;
let count =0;
function iteration_loop(N){
  while(number_of_prime < N){
      
      if(IsPrime(count) == true){
        number_of_prime+=1;
        console.log(count);
        count+=1;
        IsPrime(count);
      }else{
          count+=1;
         IsPrime(count);
      }
  }
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

// console.log(IsPrime(3));
iteration_loop(10);
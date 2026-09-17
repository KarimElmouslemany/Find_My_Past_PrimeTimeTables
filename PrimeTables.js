

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

console.log(IsPrime(3));

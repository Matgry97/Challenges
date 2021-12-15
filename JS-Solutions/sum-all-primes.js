function sumPrimes(num) {

    let sum = 0;
    let nxtNum = 1;

    //Checking if a number is a primeNumber; 
    function checkPrime(number) {
      if(number <= 1) {
        return false; 
      } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
        return false;
      }
      }
        return true;
    }
    }

    while(nxtNum <= num) {
        
      //Using checkPrime to see if number we are on is a Prime  
      if(checkPrime(nxtNum)) {
          sum += nxtNum;
      } 

      //Handling the logic of going to nxtNumber;
      nxtNum += 1; 
      

    }
      
    

    return sum; 
}

let result = sumPrimes(10);

console.log(result);

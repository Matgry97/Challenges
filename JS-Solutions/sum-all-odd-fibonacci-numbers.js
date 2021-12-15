function sumFibs(num) {

    let sum = 0;
    let prevNum = 0; 
    let nxtNum = 1;

  
    while(nxtNum <= num) {
        //Checking if number is an odd number;
      if(nxtNum % 2 !== 0) {
          sum += nxtNum;
      } 

      //Handling the logic of going to nxtNumber;
      nxtNum += prevNum; 
      console.log(nxtNum, prevNum);
      prevNum = nxtNum - prevNum;  

    }
      
    

    return sum; 
}

let result = sumFibs(4);

console.log(result);


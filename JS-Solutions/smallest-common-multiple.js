function smallestCommons(arr) {


    //Handling the situation when arr[1] is smaller then arr[0];
      
    if(arr[0] > arr[1]) {

      let biggerNumber = arr[0];
      arr[0] = arr[1]; 
      arr[1] = biggerNumber;

    } 

    //sm = smallest multiple; This sets a starting point for the while loop
    let sm = 1; 
    //Our range of variables between 2 args
    let newRange = [];
  
    for(let i = arr[0]; i <= arr[1]; i++ ) {
        newRange.push(i);
    }

    //Checking against all numbers below 1000 
    //(This fails for numbers that have a SCM higher then 1000 )
    //Brute force way to do this. 
    while(sm < 1000000) {
      // highest multiple; 
     let hm = (arr[0] * sm) * arr[1];
    
      //Counting amount of time we get a "true for if statment in forLoop";
      let checkTrue = 0; 
      for(let i = 0; i < newRange.length; i++) {
        if(hm % newRange[i] === 0) {
          checkTrue++;
          } 

          //if checkTrue is the same as rangeLength then we got our answer; 
          if(checkTrue === newRange.length) {
            return hm; 
          }
        }
      
      sm++
    }

    return arr; 


}


let result = smallestCommons([1,3]);

console.log(result);

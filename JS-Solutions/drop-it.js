function dropElements(arr, func) {

    let checkedVars = [];

  //Scan through arr to find the first value that returns true; 
    for(let i = 0; i < arr.length; i++) {
      //Stop at the first True;
      if(func(arr[i])) {
        //Scan through rest of the array
        for(i; i < arr.length; i++) {
          //Push each element at i
          checkedVars.push(arr[i]);
        }
        //Break out of the loop since we already pushed the rest of the vars
        break;
      }
    } 

 

  return checkedVars;


}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;})

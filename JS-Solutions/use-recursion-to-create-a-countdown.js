// Only change code below this line



function countdown(n){

  if(n < 1) {
    return []; 
  } else{ 
    const nmbrArray = countdown(n - 1);
    nmbrArray.unshift(n); 
    return nmbrArray;
  }

  
}
// Only change code above this line

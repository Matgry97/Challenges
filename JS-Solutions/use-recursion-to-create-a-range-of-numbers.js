function rangeOfNumbers(startNum, endNum) {

  if(endNum - startNum === 0) {
    return [startNum];
  } else {
    const rngArray = rangeOfNumbers(startNum, endNum - 1);
    rngArray.push(endNum); 
    return rngArray; 

  }


 
};

function uniteUnique(arr) {
  

    let sortedUnionArr = [];


    for(let i = 0; i < arguments.length; i++) {
      for(let j = 0; j < arguments[i].length; j++) {               
         if(!sortedUnionArr.includes(arguments[i][j])){
          sortedUnionArr.push(arguments[i][j]);
        }
      
      }
    }

  return sortedUnionArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

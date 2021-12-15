function orbitalPeriod(arr) {
  const GM = 398600.4418; //u 
  const earthRadius = 6367.4447; //earthRadius + avAlt = a = 42241

  let results = [];

  function calculation(altitude) {
    const squareThisNr = ((earthRadius + altitude) ** 3) / GM;
    const squared = Math.sqrt(squareThisNr);

    return Math.PI*2*squared; 

  }


  arr.forEach(function(obj) {

    let transformedObj = {};

    transformedObj.name = obj.name; 
    transformedObj.orbitalPeriod = Math.round(calculation(obj.avgAlt)); 
    results.push(transformedObj);

  })


  console.log(results);
  return results;

  
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);

 function truthCheck(collection, pre) {

   let trueCount = 0;

   for(let i = 0; i < collection.length; i++) {

     console.log(collection[i][pre])
     if(collection[i][pre]) {
       trueCount++;
     } 
   }

   if(trueCount == collection.length) {
     return true;
   } else {
     return false;
   }

   


  


}

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat")

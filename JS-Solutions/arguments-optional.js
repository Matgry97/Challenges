function addTogether() {

    let firstArgs = arguments[0];  

   if(arguments.length > 1) {
     let secondArgs = arguments[1]; 

     if(typeof firstArgs === 'number' && typeof secondArgs === 'number') {
       return firstArgs + secondArgs;
     } else {
       return undefined; 
     }
   } else if(arguments.length === 1) {
     if(typeof firstArgs !== 'number') {
       return undefined;
     } else {
       return function(secondArgs){
        if(typeof secondArgs === 'number') {
       return firstArgs + secondArgs;
     } else {
       return undefined; 
     }
       }
     }
   }

}

addTogether(5)(7);

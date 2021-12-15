function checkCashRegister(price, cash, cid) {
  let change = cash*100 - price*100;
  let total = 0; 


  //Summing all money in the cashDrawer
   for(let element of cid) {
     total += element[1]*100;
   }

  
  
  if(total < change) {
    return {status: "INSUFFICIENT_FUNDS", change: []}; 
  } else if(total === change) {
    return {status: "CLOSED", change: [...cid]}
  } else {

    
    let changeToReturn = [];
    let valueOfMoney = {"ONE HUNDRED": 10000, "TWENTY": 2000 ,"TEN": 1000, "FIVE": 500, "ONE": 100, "QUARTER": 25, "DIME": 10, "NICKEL": 5, "PENNY": 1}
    
    cid = cid.reverse();

    for(let element of cid){
      let diff = [element[0], 0];

      element[1] = element[1] * 100;

      while(change >= valueOfMoney[element[0]] && element[1] > 0) {
          change -= valueOfMoney[element[0]];
          element[1] -= valueOfMoney[element[0]];
          diff[1] += valueOfMoney[element[0]] / 100;
          }   
            if(diff[1] > 0) {
              changeToReturn.push(diff);
            }
       }

          if(change > 0){
            return {status: "INSUFFICIENT_FUNDS", change: []}; 
      
      }

      return {status: "OPEN", change: changeToReturn}
  }
 
  
 
}
 
 
let result = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
 
console.log(result);

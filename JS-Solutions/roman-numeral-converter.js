function convertToRoman(num) {

  let romanNumerals = [];
    
  while(num >= 1) {
    if(num >= 1000) {
      num -= 1000; 
      romanNumerals.push("M"); 
    } else if(num >= 900 && num >= 999) {
      num -= 900; 
      romanNumerals.push("CM");
    } else if (num >= 500) {
      num -= 500; 
      romanNumerals.push("D");
    } else if (num >= 400 && num <= 499) {
      num -= 400; 
      romanNumerals.push("CD");
      } else if (num >= 100 && num <= 399) {
      num -= 100; 
      romanNumerals.push("C");
    } else if(num >= 90 && num <= 99) {
      num -= 90; 
      romanNumerals.push("XC");
    } else if (num >= 50) {
      num -= 50; 
      romanNumerals.push("L");
    }  else if (num >= 40 && num <= 49) {
      num -= 40; 
      romanNumerals.push("XL");
    } else if (num > 10 && num <= 39) {
      num -= 10; 
      romanNumerals.push("X");
    } else if(num >= 9 && num >= 9) {
      num -= 9; 
      romanNumerals.push("IX");
    } else if (num >= 5) {
      num -= 5; 
      romanNumerals.push("V");
    } else if (num >= 4) {
      num -= 4; 
      romanNumerals.push("IV");
    } else if (num >= 1 && num <= 3) {
      num -= 1; 
      romanNumerals.push("I");
    } 
  }

  

  console.log(romanNumerals.join(""));


  return romanNumerals.join("");
  


}

convertToRoman(500);

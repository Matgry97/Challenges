function palindrome(str) {
  
  let reversedStrArray = []; 

  str = str.replace(/[^a-zA-Z0-9]/g, '');

  for(let i = 0; i < str.length; i++) {
    reversedStrArray.unshift(str[i]);
  }

  //let reversedStr = reversedStrArray.join(" ");

  //reversedStr = reversedStr.replace(/[^a-zA-Z0-9]/g, '');

   console.log(reversedStrArray.join("").replace(/\s+/g, "").toLowerCase(), str.replace(/\s+/g, "").toLowerCase());
  
  if(reversedStrArray.join("").replace(/\s+/g, "").toLowerCase() === str.replace(/\s+/g, "").toLowerCase()) {
    return true; 
  } else {
    return false;
  }



}



palindrome("A man, a plan, a canal. Panama");

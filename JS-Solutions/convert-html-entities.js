function convertHTML(str) {
  

  let splitString = str.split(""); 

  for(let i = 0; i < splitString.length; i++) {
    if(splitString[i] === "&") {
      splitString[i] = "&amp;";
    } else if (splitString[i] === "<") {
      splitString[i] = "&lt;";
    } else if (splitString[i] === ">") {
      splitString[i] = "&gt;";
    } else if (splitString[i] === "'") {
      splitString[i] = "&apos;";
    } else if (splitString[i] === '"') {
      splitString[i] = "&quot;";
    }
  }

  return splitString.join("");

}

let result = convertHTML("Dolce & Gabbana");

console.log(result);

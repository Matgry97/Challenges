function rot13(str) {

  let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  str = str.split(""); 

  let decyphered = [];

  for(let i = 0; i < str.length; i++) {
    for(let j = 0; j < alphabet.length; j++) {
      if(str[i] === alphabet[j]) {
        if(alphabet.indexOf(alphabet[j]) >= 13) {
          decyphered.push(alphabet[alphabet.indexOf(alphabet[j]) - 13]); 
        } else if (alphabet.indexOf(alphabet[j]) <= 13){
          decyphered.push(alphabet[alphabet.indexOf(alphabet[j]) + 13]);
        }

      } else if(str[i] === " " || str[i] === "!" || str[i] === "?" || str[i] === ".") {
        decyphered.push(str[i]);
        i++;
      } 
    }
  }


   console.log(decyphered.join("")) 
  return decyphered.join("");


}

rot13("SERR PBQR PNZC!");

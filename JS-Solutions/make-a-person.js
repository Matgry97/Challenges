var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  let splitName = firstAndLast.split(' ');

  console.log(splitName);

  this.getFirstName = function() {
    return splitName[0];
  }; 

  this.getLastName = function() {
    return splitName[1];
  }; 

  this.setFirstName = function(firstName) {
    splitName[0] = firstName;
  }

  this.setLastName = function(lastName) {
    splitName[1] = lastName;
  }

  this.setFullName = function(fullName) {
    let splittedFullName = fullName.split(" ");

    splitName[0] = splittedFullName[0];
    splitName[1] = splittedFullName[1];

    return splitName.join(" ");

  }

  this.getFullName = function() {
    return splitName.join(" ");
  };

  



  return splitName.join(" ");
};

var bob = new Person('Bob Ross');
bob.setFullName("Mateusz Grybos");

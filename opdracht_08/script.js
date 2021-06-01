// Function return statements //

const bigNumber = function (number) {
  if (number >= 100 ){
    return true;
  }
    return false;
}
const awnser = bigNumber(100);

/* console.log(awnser); */

// Bouncer Brenda //

const brenda = function (numberCount, age) {
  const maxPeople = 100;

  if(numberCount < maxPeople && age >= 18) {
    return 'Welcome, come in';
  } else if (numberCount >= maxPeople && age >= 18){
    return 'Sorry its too busy now, come back later';
  } 
  return 'Sorry this is a club for adults!';
}

/* console.log(brenda(100, 19)); */


// Calculating the average

const averageNumber = function(numberOne, numberTwo, numberThree, numberFour, numberFive) {
  const totalNumbers = 5;
  let totalCount = numberOne + numberTwo + numberThree + numberFour + numberFive;

  let average = totalCount / totalNumbers;
  
  return Math.round(average);
}

console.log(averageNumber(35.55,8,22.97,20,25))
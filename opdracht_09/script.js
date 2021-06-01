// Function declaration

function numberCount1(number1, number2) {
  const squaredA = number1 ** 2;
  const squaredB = number2 ** 2;
  const awnserSquared = squaredA + squaredB;
  const finalAwnser = awnserSquared ** 2;

  return finalAwnser;

}

// function expresion 

const numberCount2 = function(number1, number2){
  const squaredA = number1 ** 2;
  const squaredB = number2 ** 2;
  const awnserSquared = squaredA + squaredB;
  const finalAwnser = awnserSquared ** 2;

  return finalAwnser;

}

// Arrow function

const numberCount3 = (number1, number2) => {
  const squaredA = number1 ** 2;
  const squaredB = number2 ** 2;
  const awnserSquared = squaredA + squaredB;
  const finalAwnser = awnserSquared ** 2;

  return finalAwnser;

}

console.log(numberCount1(5,5));
console.log(numberCount2(5,5));
console.log(numberCount3(5,5));
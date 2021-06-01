// Age check and greeting //

const ageCheck = age =>{
  if(age >= 18) {
    return true;
  }
  return false;
}

const greeting = age =>{
  if(ageCheck(age) === true ){
    return 'Hello there';
  } 
  return 'Hey kiddo';
}

// console.log(greeting(15));

// VAT calculations 

const btwCalc = amount => {
  return amount * 0.21;
}

const priceBTW = amount =>{
  return amount + btwCalc(amount);
}

//console.log(priceBTW(100))
const btwPercentage = percentage => {
  return 1 + percentage/100;
}

const priceWithBtw = function(price, percentage) {
  const basePrice = price / btwPercentage(percentage);
    const arrayResult = ['Price: ' + basePrice, 'VAT: ' + btwCalc(basePrice)];

  return arrayResult;
}

//console.log(priceWithBtw(1210));
//console.log(btwPercentage(21))

console.log(priceWithBtw(1210, 21));
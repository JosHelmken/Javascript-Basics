// Opdracht Comparison && logical operators 
const age = 18;
const name = "Sarah";
const totalAmount = 36;


// 50% korting
 
if(age >= 18 && age <= 25){

  console.log('Je krijgt 50% korting!');

} else {

  console.log('Sorry, geen korting voor jou!');
}

// Name actie

if(name === 'Bram' || name === 'Sarah') {

  console.log('Jij krijgt een gratis biertje!');

} else {

  console.log('Sorry geen gratis bier voor jou.');
}

// Jubileum korting 

if(totalAmount >= 25 && totalAmount < 50){

  console.log('Gratis (vega)bitterballen!');

} else if(totalAmount >= 50 && totalAmount < 100) {

  console.log('Gratis portie nachos!');

} else if(totalAmount >= 100){

  console.log('Gratis champange!');

} else {

  console.log('Sorry, bestel voor minimaal 25 euro om mee te doen');

}

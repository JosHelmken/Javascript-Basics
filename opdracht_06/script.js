 
 // makePizza function 
 function makePizza(number) {
   let order = 0;

   while(order < number) {     
    console.log('Stap 1: Maak het deeg.');
    console.log('Stap 2: Beleg de pizza met ingredienten.');
    console.log('Stap 3: Bak de pizza in oven.')
    order++;
   }
}

// makeSuShi function
function makeSuShi(number) {
  let order = 0;

  while(order < number) {
    console.log('stap 1: Snij ingredienten');
    console.log('Stap 2: Rol de shushi in het deeg');
    console.log('Stap 3: Snij de rol in plakken');
    order++;
  }
}

makePizza(2);
makeSuShi(3);

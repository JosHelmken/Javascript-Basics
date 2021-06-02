// Multiplication tables

/* for (table = 1; table <= 10; table++){
  
  for(count = 1; count <= 10; count++){
    const result = count * table;
    
    console.log(count + ' x ' + table + ' = ' + result);
  }
  // adding a empty row for readability 
  console.log(' ');

} */

const tableCalculator = tableNr => {
  for(count = 1; count <= 10; count++){
    const result = count * tableNr;
    
    console.log(count + ' x ' + tableNr + ' = ' + result);
  }
};

for (table = 1; table <= 10; table++){
  
  tableCalculator(table);
  console.log(' ');

}





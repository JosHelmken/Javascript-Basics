// While loop //
const colors = ['yellow', 'blue', 'red', 'orange'];
let i = 0;

/*  while(colors[i]){
  console.log(colors[i]);
  i++
} 

for(;colors[i];){
  console.log(colors[i]);
  i++
} */

const colorsNew = ['yellow', 'blue', 'red', 'orange'];

colorsNew.forEach(element => console.log(element));

// for while loop 5 regels
// forEach 1 regel
// duidelijke  minder variables 

const object = { a: 1, b: 2, c: 3, d: 4, e: 5};

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
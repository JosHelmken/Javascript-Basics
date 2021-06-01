// Function without arguments //

/* const paintWall = function () {
  console.log ('The wall has been painted white');
} */


// Function with a single argument //

/* const paintWall = function (color) {
  console.log ('The wall has been painted ' + color);
} */

// Function with multiple arguments //

const paintWall = function (wallPosition, color) {
  console.log ('The ' + wallPosition + ' wall has been painted ' + color);
}



paintWall('south', 'green');
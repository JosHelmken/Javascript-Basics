
const minNumber = 0;
let maxNumber = 5;
let guessCount = 5;
let playerName;
let guess;

while(playerName === undefined || playerName === null) {

  playerName = prompt('Wat is je naam?')

}

// Name is define so we continue //

alert('Welkom ' + playerName + '\nJe hebt 5 pogingen om het getal te raden.\nHet getal ligt tussen 0 en ' + maxNumber + '.');

let randomNumber = Math.floor(Math.random() * maxNumber + 1);
  console.log('random number: ' + randomNumber);  // console.log for debugging

while(guess !== randomNumber) {

  if(guessCount < 1){
    alert ('Sorry maar je bent door je pogingen heen!\n We beginnen opnieuw met een nieuw nummer.');
    guessCount = 5;
    randomNumber = Math.floor(Math.random() * maxNumber + 1);
  }

  guess = parseInt(prompt('Kies een nummer tussen 0 en ' + maxNumber +  '.\nPogingen: ' + guessCount));
          console.log('guess: ' + guess); // console.log for debugging
    alert ('Dit is jouw gekozen nummer ' + guess);

    if(guess < randomNumber || guess > randomNumber) {
      guessCount--;
      alert ('Sorry dit is niet het juiste nummer, probeer het nogmaals!');
    } else {

      alert ('Correct! \nJouw nummer ' + guess + ' was inderdaad het gekozen nummer!');
      alert ('We sluiten nu dit spel af. Bedankt voor het spelen.');

  }

}
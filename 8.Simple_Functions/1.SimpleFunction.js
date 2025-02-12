function sayMagicWord() {
  console.log('Please!');
  console.log('Thank You!');
}

sayMagicWord();
sayMagicWord();

for (let i = 0; i < 5; i++) {
  sayMagicWord();
}

// Dice rolling

function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls) {
    rollDie();
    rollDie();
    rollDie();
}

throwDice();
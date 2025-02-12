// Single Argument
function greeting(name){
    console.log(`Hello ${name}`);
}

greeting("steve")

// Dice rolling

function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
  }

function throwDice(numRolls) {
    for (let i = 0; i < numRolls; i++) {
      rollDie();
    }
  }
  
  throwDice(3);

  // Multiple Arguments

    function sum(x, y){
        console.log(x + y);
    }
    sum(10, 5);
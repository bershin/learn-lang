// For like while loop
let i = 0;
while( i < 10) {
    if(i === 5) {
        break;
    }
    console.log("Hello: " + i);
    i++;
} 

// Guess game

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
let count = 0;
while(true) {
    if(guess === target) {
        break;
    }
    console.log(`Target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10);
    count++;
}   
console.log(`Target: ${target} Guess: ${guess} Total Guess: ${count}`);

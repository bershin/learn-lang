players = ['Messi', 'Ronaldo', 'Neymar', 'Mbappe'];
// Simple for loop on list
for(let i = 0; i < players.length; i++) {
    console.log(players[i]);
}

// For of loop on list
for (let player of players) {
    console.log(player);
}

// For of loop on string
for (let letter of "Hello") {
    console.log(letter.toUpperCase());
}

// for of loop on 2d array to sum all
const matrix = [
    [1, 2, 3],
    [4, 5, 6]
];
let sum = 0
for (let row of matrix) {
    for (let cell of row) {
        sum += cell;
    }
}
console.log("Sum:", sum);

// for of cannot be used in finding related index item on other array
words1 = ["milk", "tea", "bun"]
words2 = ["shake", "cup", "butter"]
for(let i = 0; i < words1.length; i++) {
    console.log(words1[i], words2[i]);
}

// for of loop on object
const person = {
    name: "John",
    age: 30
};
for(let key of Object.keys(person)) {
    console.log(key, person[key]);
}

// for of loop on object
const fitbit = {
    miles: 20,
    age: 30
};
let tot = 0
for(let val of Object.values(fitbit)) {
    tot += val
}
console.log(tot)

// Find index in "for of"
const items = ["apple", "banana", "cherry"];

for (const [index, value] of items.entries()) {
    console.log(`Index: ${index}, Value: ${value}`);
}


// for in loop on object
for(let key in person) {
    console.log(key, person[key]);
}

// for in loop on object return key of object
for(let key in person) {
    console.log(key, person[key]);
}

// for in loop on array return index of array
for(let index in words1) {
    console.log(index, words1[index]);
}
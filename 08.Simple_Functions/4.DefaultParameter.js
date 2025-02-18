// Older way
const multiply = function (x, y){
    if (y === undefined) {
        y = 2;
    }
    return x * y;
}

console.log(multiply(4, 3)); // 12
console.log(multiply(3)); // 6

// New way
const product = function (x, y = 2){
    return x * y;
}

console.log(product(4, 3)); // 12
console.log(product(3)); // 6

// Order is important when it comes to multi default values
function greet(person, greeting = "Hi", puctuation = "!"){
    return `${greeting}, ${person}${puctuation}`;
}
console.log(greet("Bershin")); // Hi, Bershin!
console.log(greet("Bershin", "!!!")); // !!!, Bershin!
console.log(greet("Bershin", "Hello", ".")); // Hello, Bershin.

// Default parameter needs to come at the end.
const times = function (x=2, y){
    return x * y;
}
console.log(times(4, 3)); // 12
console.log(times(3)); // NaN

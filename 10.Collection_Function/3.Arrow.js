// Function expression for square
const square = function (n) {
    return n * n;
}
console.log(square(4)) // 16

// Arrow function for square
const squareArrow = (n) => {
    return n * n;
}
console.log(squareArrow(4)) // 16

// Arrow function for square - implicit return
const squareArrowShort1 = n => (n * n);
console.log(squareArrowShort1(4)) // 16
const squareArrowShort2 = n => n * n;
console.log(squareArrowShort2(4)) // 16

// Arrow function for isEven
const isEven = n => n % 2 === 0;
console.log(isEven(4)) // true
console.log(isEven(5)) // false

// Arrow function for multiply
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)) // 6

// Arrow function for greet
const greet = () => console.log("Hello there!");
greet();

// Arrow function for doubles
const arr = [1, 2, 3, 4, 5];
const double = arr.map((num) => num * 2)
console.log(double) // [2,4,6,8,10]

// Arrow function for parityList - Cannot have implicit return
const parityList = arr.map((num) => {
    if(num % 2 === 0) return "even";
    return "odd";
})
console.log(parityList) // [ 'odd', 'even', 'odd', 'even', 'odd' ]

// Arrow function for parityList - With implicit return
const parityListShort = arr.map(num => num % 2 !== 0 ? "odd" : "even")
console.log(parityListShort)
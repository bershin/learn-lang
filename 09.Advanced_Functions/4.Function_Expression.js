// Assigning named function expression to a variable
const sum = function add(a, b) {
  return a + b;
}

console.log(sum(1, 2)); // 3
// console.log(add(1, 2)); // ReferenceError: add is not defined

// Assigning anonymous function expression to a variable
const total = function (a, b) {
  return a + b;
}

console.log(total(1, 2)); // 3

console.dir(total);
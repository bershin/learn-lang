// Storing function as items in array
const add = function sum(a, b) {
  return a + b;
}   

function sub(a, b) {
  return a - b;
}   

const multiply = function (a, b) {
  return a * b;
}  

function divide(a, b) {
  return a / b;
}  

const operations = [add, sub, multiply, divide];

console.log(operations[2](1, 2)); // 2

for(let operation of operations){
  console.log(operation(30, 5)); // 35 25 150 6
}

const work = [
    function (a, b) {
    return a * b;
  }, function sub(a, b) {
    return a - b;
  }, function (a, b) {
    return a * b;
  }, function divide(a, b) {
    return a / b;
  }];
  console.log(work[0](1, 2)); // 2
  console.log(work[1](3, 2)); // 1

// Storing functions as value in object.
const calc = {
    sum: add,
    sub: sub,
    multiply: multiply,
    divide: divide
}

console.log(calc.sum(1, 2)); // 3

const math = {
    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
}

console.log(math.add(1, 2)); // 3
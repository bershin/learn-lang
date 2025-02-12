// Return Function
function add(a, b) {
  return a + b;
}
const result = add(1, 2); // 3
console.log(result); // 3

console.log(add(2, 3)); // 5

// Return undefined
function divide(a, b) {
  let result = a/b;
}
console.log(divide(1, 2)); // undefined

// Return in middle of function
function isEven(num) {
  if(num % 2 === 0) {
    return true;
  }
  return false;
}
console.log(isEven(2)); // true

// Return from ternary operator
function isOdd(num) {
  return num % 2 === 1 ? true : false;
}

// Return from ternary operator - shorter 

function isPurple(color) {
    return color.toLowecase() === 'purple';
  }

// Return from function have argument as array

function arrContainColor(arr) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === 'purple' || arr[i] === 'magenta') {
        return true;
      }
    }
    return false;
  }

// Return from function have argument as array - shorter
function arrContainColor(arr, color) {
  return arr.indexOf(color) !== -1;
}

arrContainColor(['red', 'blue', 'green'], 'blue'); // true
const arr = [1,2,3,4,5]

// Copy an array using slice
const copyArr = arr.slice()
console.log(copyArr) // [1,2,3,4,5]
// Copy an array using spread operator
const copyArr1 = [...arr]
console.log(copyArr1) // [1,2,3,4,5]

const num = [1, 2, 3]
const num1 = [4, 5, 6]
const num2 = [7, 8, 9]
const num3 = [...num1, ...num2]
console.log(num3) // [1,2,3,4,5,6]
const num4 = [...num1, 4, 5, 6]
console.log(num4) // [1,2,3,4,5,6]
const num5 = [1, ...num2, 6]
console.log(num5) // [1,4,5,6,6]
// Same as concat
console.log(num.concat(num2,num3)) // [1,2,3,4,5,6,7,8,9,4,5,6]
console.log([...num, ...num1, ...num2]) // [1,2,3,4,5,6,7,8,9]
// Strings to an array - spread operator
console.log([..."Hi", ..."Hello"]) // [ 'H', 'i', 'H', 'e', 'l', 'l', 'o' ]
// String to an array - slice
console.log("Hi".split("")) // [ 'H', 'i' ]

function sum() {
    console.log(arguments)
}

sum(1,2,3) // [Arguments] { '0': 1, '1': 2, '2': 3 }

function sumAll() {
    return arguments.reduce((acc, val) => arr + val)
}

// console.log(sumAll(1,2,3)) // TypeError: arguments.reduce is not a function

// function sumUp() {
//     const arr = [...arguments]
//     return arr.reduce((acc, val) => {
//         return acc + val
//     })
// }

function sumUp() {
    const arr = [...arguments]
    return arr.reduce((acc, val) => acc + val)
}

console.log(sumUp(1,2,3))

// Arrow function does not have arguments object
const test = () => {
    console.log(arguments)
}
test() 
test(1,2,3) // ReferenceError: arguments is not defined
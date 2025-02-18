function sumUp(...arr) {
    return arr.reduce((acc, val) => acc + val)
}

console.log(sumUp(1,2,3)) // 6

function fullName(first, last, ...titles) {
    console.log("first", first)
    console.log("last", last)
    console.log("titles", titles)
}

fullName("John", "Doe", "Mr", "Sir", "Dr") // John Doe [ 'Mr', 'Sir', 'Dr' ]

// const timesAll = (...arr) => { 
//     return arr.reduce((acc, val) => {
//         return acc * val
//     })
// }

// Double implicit return
const timesAll = (...arr) => arr.reduce((acc, val) => acc * val)
console.log(timesAll(5,2,3))

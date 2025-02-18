const max = Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) // 10
console.log(max)

const arr = [1, 2, 3, 4, 5]
const maxArr = Math.max(arr)
console.log(maxArr) // NaN

// Use spread operator to pass array as argument
const maxArrSpread = Math.max(...arr)
console.log(maxArrSpread) // 5

function givemeFive(a, b, c, d, e) {
    console.log("a", a)
    console.log("b", b)
    console.log("c", c)
    console.log("d", d)
    console.log("e", e)
}

givemeFive(1, 2, 3, 4, 5) // 1 2 3 4 5
givemeFive(...arr) // 1 2 3 4 5
givemeFive(1, ...arr) // 1 1 2 3 4
givemeFive(..."fives") // f i v e s

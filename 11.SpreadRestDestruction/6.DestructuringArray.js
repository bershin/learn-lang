const raceResult = [
    "tendulkar",
    "Kambli",
    "Dhoni",
    "Kholi",
    "jadeja"
]

// const first = raceResult[0]
// const second = raceResult[1]
// const third = raceResult[2]

const [first, second, third] = raceResult

console.log(first, second, third) // tendulkar Kambli Dhoni

const [one, , ,four] = raceResult
console.log(one, four) // tendulkar Kholi

const [winner, , ...other] = raceResult
console.log(winner) // tendulkar
console.log(other) // [ 'Dhoni', 'Kholi', 'jadeja' ]

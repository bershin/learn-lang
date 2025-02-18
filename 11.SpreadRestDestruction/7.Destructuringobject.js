const runner = {
    first: "sachin",
    last: "tendulkar",
    country: "India",
    title: "God of cricket"
}

const {first, last: middle, ...other} = runner
console.log(first)
console.log(middle)
console.log(other)
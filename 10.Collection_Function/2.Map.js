const nums = [1,2,3,4,5]
// Create an array with double values - map
const doubles = nums.map(function(n){
    return n*2
})
console.log(doubles) // [2,4,6,8,10]

// Create an array with double values - manual
const doubles2 = []
for(let num of nums){
    doubles2.push(num*2)
}
console.log(doubles2) // [2,4,6,8,10]

// Create an array of object with even values
const evenArr = nums.map(function(n){
    return {
        value: n,
        isEven: n%2 === 0
    }
})
console.log(evenArr) // [ { value: 1, isEven: false }, { value: 2, isEven: true }, { value: 3, isEven: false }, { value: 4, isEven: true }, { value: 5, isEven: false } ]   

// Create an array of object with even values - manual
const evenArr2 = []
for(let num of nums){
    evenArr2.push({
        value: num,
        isEven: num%2 === 0
    })
}
console

// Create an array with all caps
const texts = ["one", "two", "three", "four", "five"]

const caps = texts.map(function(t){
    return t.toUpperCase()
})
console.log(caps) // ["ONE", "TWO", "THREE", "FOUR", "FIVE"]

const withLimiter = texts.map(function(t){
    return t.split("").join(".")
})
console.log(withLimiter) // ["o.n.e", "t.w.o", "t.h.r.e.e", "f.o.u.r", "f.i.v.e"]   

// Create an array with titles
const books = [
    {
        title: "Good Omens",
        authors: ["Terry Pratchett", "Neil Gaiman"],
        rating: 4.25
    },
    {
        title: "Bone: The Complete Edition",
        authors: ["Jeff Smith"],
        rating: 4.42
    },
    {
        title: "American Gods",
        authors: ["Neil Gaiman"],
        rating: 4.11
    },
    {
        title: "A Gentleman in Moscow",
        authors: ["Amor Towles"],
        rating: 4.36
    }
]   

const titleArr = books.map(function(book){
    return book.title
})
console.log(titleArr) // [ 'Good Omens', 'Bone: The Complete Edition', 'American Gods', 'A Gentleman in Moscow' ]

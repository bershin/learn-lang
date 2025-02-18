const arr = [1,2,3,4,5]
const sum = arr.reduce((acc, num) => acc + num, 100)
console.log(sum) // 15

const product = arr.reduce((tot, num) => tot * num)
console.log(product) // 120

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64]
const maximum = grades.reduce((max, num) => {
    if(num > max) return num
    return max
})
console.log(maximum) // 99

const max = grades.reduce((max, num) => num > max ? num: max)
console.log(max) // 99

const min = grades.reduce((min, num) => Math.min(min, num))
console.log(min) // 99

const votes = ['yes', 'no', 'yes', 'yes', 'no', 'yes', 'no', 'yes', 'yes']
const results = votes.reduce((tally, val) => {
    if(tally[val]){
        tally[val]++
    }else{
        tally[val] = 1
    }
    return tally
}, {})
console.log(results) // { yes: 5, no: 3 }

// Shorter version
const resultShort = votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1
    return tally
},{})

console.log(resultShort) // { yes: 5, no: 3 }

// categorise books by rating
const books = [
    {
        title: "Good Omens",
        authors: ["Terry Pratchett", "Neil Gaiman"],
        rating: 4.25,
        genres: ["nonfiction", "essay"]
    },
    {
        title: "Bone: The Complete Edition",
        authors: ["Jeff Smith"],
        rating: 2.42,
        genres: ["fiction", "fantasy"]
    },
    {
        title: "American Gods",
        authors: ["Neil Gaiman"],
        rating: 3.11,
        genres: ["nonfiction", "fantasy"]
    },
    {
        title: "A Gentleman in Moscow",
        authors: ["Amor Towles"],
        rating: 3.36,
        genres: ["history", "novel"]
    }
]

const groupedByrating = books.reduce((groupedBooks, book) => {
    let rating = Math.floor(book.rating)
    if(groupedBooks[rating]){
        groupedBooks[rating].push(book)
    }else{
        groupedBooks[rating] = [book]
    }
    return groupedBooks
}, {})

// const groupedByrating = books.reduce((groupedBooks, book) => {
//     const key = Math.floor(book.rating)
//     if(!groupedBooks[key]) groupedBooks[key] = []
//     groupedBooks[key].push(book)
//     return groupedBooks
// }, {})

console.log(groupedByrating)

// Double implicit return
const timesAll = (arr) => arr.reduce((acc, val) => acc * val)
console.log(timesAll([5,3,2]))
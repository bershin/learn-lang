const number = [1, 2, 3, 4, 5];

const even = number.filter(num => num % 2 == 0)
console.log(even) // [2,4]

const bigNum = number.filter(num => num > 3)
console.log(bigNum) // [4,5]

// Find books with rating greater than 4.3
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
        rating: 4.42,
        genres: ["fiction", "fantasy"]
    },
    {
        title: "American Gods",
        authors: ["Neil Gaiman"],
        rating: 4.11,
        genres: ["nonfiction", "fantasy"]
    },
    {
        title: "A Gentleman in Moscow",
        authors: ["Amor Towles"],
        rating: 4.36,
        genres: ["history", "novel"]
    }
]

const goodBooks = books.filter(book => book.rating > 4.3)
console.log(goodBooks)

const fantasyBooks = books.filter(book => book.genres.includes("fantasy") || book.genres.includes("essay"))
console.log(fantasyBooks)

const booktitle = books.filter(book => book.title.toLowerCase().includes("the"))
console.log(booktitle)
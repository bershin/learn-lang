const words = ['dog', 'log', 'bag', 'wak'];

const len3word = words.every(words => words.length === 3);
console.log(len3word); // true

const lastWord = words.every(word => words[words.length - 1] === 'g');
console.log(lastWord); // false

const anyWord = words.some(word => word[0] === 'd');
console.log(anyWord); // false

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

const allGoodBooks = books.every(book => book.rating > 4.3)
console.log(allGoodBooks) // false

const allFairBooks = books.every(book => book.rating > 3.3)
console.log(allFairBooks) // true

const twoAuthor = books.some(book => book.authors.length > 1)
console.log(twoAuthor) // true

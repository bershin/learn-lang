const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];
console.log(prices.sort()); // [ 12, 3000, 35.99, 400.5, 9500, 99.99 ]
console.log(prices); // [ 12, 3000, 35.99, 400.5, 9500, 99.99 ]

// Avoid mutating the original array
const ascOrd = prices.slice().sort((a, b) => a - b); 
console.log(ascOrd); // [ 12, 35.99, 99.99, 400.5, 3000, 9500 ]
console.log(prices.slice().sort((a, b) => b - a)); // [ 9500, 3000, 400.5, 99.99, 35.99, 12 ]
console.log(prices);

// Sort books by rating
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

books.sort((a,b) => a.rating - b.rating)
console.log(books)
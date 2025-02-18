const movies = [ "The Matrix", "The Godfather", "The Lord of the Rings", "The Dark Knight", "Pulp Fiction" ];

const movie = movies.find(function(movie){
    return movie.includes("Lord")
})
console.log(movie) // The Lord of the Rings

// Shorter version
const movieShort = movies.find(movie => movie.indexOf("Dark") !== -1)
console.log(movieShort) // The Lord of the Rings

console.log(movies.includes("Lord")) // ReferenceError: monitorEventLoopDelay is not defined

// Find books with rating greater than 4.3
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

const goodBook = books.find(book => book.rating >= 4.3)
console.log(goodBook) // { title: 'Bone: The Complete Edition', authors: [ 'Jeff Smith' ], rating: 4.42 }

const nielBook = books.find(book => book.authors.includes("Neil Gaiman")) 
console.log(nielBook) // { title: 'Good Omens', authors: [ 'Terry Pratchett', 'Neil Gaiman' ], rating: 4.25 }   

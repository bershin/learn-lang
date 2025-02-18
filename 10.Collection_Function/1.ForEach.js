const arr = [1,2,3,4,5]

function double(num){
    console.log(num*2)
}

arr.forEach(double) // 2 4 6 8 10

arr.forEach(function(num){
    console.log(num*3)
}) // 2 4 6 8 10


// Print title from array of objects
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

books.forEach(function(book){
    console.log(book.title)
})

// Print same using for loop
for(let book of books){
    console.log(book.title)
}

// Can print index as well
books.forEach(function(book, index){
    console.log(index+1, book.title)
})

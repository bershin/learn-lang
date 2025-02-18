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

const [,{authors},{title: titleName}] = books
console.log(authors)
console.log(titleName)

const [,second] = books
console.log(second.authors)
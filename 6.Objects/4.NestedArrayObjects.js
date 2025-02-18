// Array of objects 

const shoppingCart = [
    {
        id: 1,
        price: 6.88,
        product: 'dog food'       
    },
    {
        id: 2,
        price: 5.65,
        product: 'cat food'       
    }
]
console.log(shoppingCart[0].price); // 6.88
console.log(shoppingCart[1].product); // cat food

/* Object with different data type and accessing value*/
const student = {
    firstName: 'David',
    lastName: 'Jones',
    strengths: ['Music', 'Art'],
    exams: {
        midterm: 92,
        final: 88
    }
}
const avg = (student.exams.midterm + student.exams.final) / 2 
console.log(student.strengths[0]); // Music

/* Object stores a multi dimention array */

const game = {
    player1: {
        username : 'Blue',
        playingAs: 'X'
    },
    player1: {
        username : 'Muffins',
        playingAs: '0'
    },
    board: [
        ['O', null, 'X'],
        [null, 'X', 'O'],
        ['X', 'O', null]
    ]
}
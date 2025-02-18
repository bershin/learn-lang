// const add = function(x, y){
//     return x + y
// }

// const mul = function(x, y){
//     return x * y
// }

// const calc = {
//     val: [1,2,3,4,5],
//     add,
//     mul
// }

// console.log(add(2,3)) // 5
// console.log(mul(2,3)) // 6

/* Can be written as */
// const calc = {
//     val: [1,2,3,4,5],
//     add: function(x, y){
//         return x + y
//     },
//     mul: function(x, y){
//         return x * y
//     }
// }



/* Can be written even shorter as */
const calc = {
    val: [1,2,3,4,5],
    add(x, y){
        return x + y
    },
    mul(x, y){
        return x * y
    }
}

console.log(calc.val) // [ 1, 2, 3, 4, 5 ]
console.log(calc.add(2,3)) // 5
console.log(calc.mul(2,3)) // 6

/* Annother use case */
const auth = {
    username: "John Bershin",
    login(){
        console.log("You are logged in!!!")
    },
    logout(){
        console.log("Good Bye!!!")
    }
}

console.log(auth.username) // John Bershin
auth.login() // You are logged in!!!
auth.logout() // Good Bye!!!
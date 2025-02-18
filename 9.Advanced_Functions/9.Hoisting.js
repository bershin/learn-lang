/* Printing a variable which is defined later using "var" is "undefined, means its hoisted.
It hoist the variable not the value. */
console.log(animal) // ReferenceError, if not defined, if defined below with var, undefined
var animal = "dog"
console.log(animal) // dog

/* For "let" & "const" the variable is not hoisted */
// console.log(bird) // ReferenceError
let bird = "parrot"

/* functions are hoisted */

sayHello() // Hello

function sayHello(){
    console.log("Hello")
}
sayHello() // Hello

/*functions expressions are not hoisted */

talk() // TypeError: talk is not a function // "var"
// ReferenceError: Cannot access 'talk' before initialization // "let"
var talk = function (){
    console.log("Bye")
}

// Variable within function are visible only inside the function.
function lol(){
    let person = "John"
    const age = 47
    var status ="single"
    console.log(age) // 47
}

function color(){
    let name = "Purple"
    const age = 12
    var status ="dark"
    console.log(age) // 12
}

lol()
color()
console.log(age) // ReferenceError

// Variable declared outside function can be redeclared inside function
let bird = "parrot"
function birdWatch(){
    let bird = "penguin"
    console.log(bird) // penguin
}
birdWatch()
console.log(bird) // parrot
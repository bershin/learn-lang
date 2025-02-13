// Scope of var is outside the block
if(true){
    let name = "John"
    const age = 47
    var status = "single"
    console.log(name) // "John"
    console.log(age) // 47
    console.log(status) // "single"
}

// console.log(name) // ReferenceError: name is not defined
// console.log(age) // ReferenceError: name is not defined
console.log(status) 

// Why not use var in block?

var i = 10
for(var i = 0; i < 5; i++){
    console.log(i) // 0 1 2 3 4
}
console.log("Value of i is",i) // Value of i is 5

let j = 10
for(let j = 0; j < 5; j++){
    console.log(j) // 0 1 2 3 4
}
console.log("Value of j is",j) // Value of j is 10

// Var can be redeclared in the same scope
var k = 10
var k = 20

// Inside the block we have access to variables declared outside the block.
let arr = [1,2,3,4,5]
function double(){
    const double = [];
    for(let num of arr){
        double.push(num*2)
    }
    console.log(double) // [2,4,6,8,10]
}
double()

// Inside the block we have access to variables declared outside the block.
let n
for(let m = 0; m < 5; m++){
    n = 7
    console.log(m) // 0 1 2 3 4
}
console.log("Value of n is",n) // Value of n is 7
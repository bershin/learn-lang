/* This is regular function */
function sayHi(){
    var name = "john"
    console.log("Hi")
    console.log(this)
}
// Browser: Window scope
// sayHi() // Node: Object [global] 

var person = {
    fName: "Bershin",
    lName: "John",
    sName: "bjohn",
    fullName(){
        console.log(this)
    }
}
person.fullName()
// { //Output
//     fName: 'Bershin',
//     lName: 'John',
//     sName: 'bjohn',
//     fullName: [Function: fullName]
//   }

var person1 = {
    fName: "Bershin",
    lName: "John",
    sName: "bjohn",
    fullName(){
        console.log(`${this.fName} AKA ${this.sName}`)
    }
}
person1.fullName() // Bershin AKA bjohn

/* Can also be written as */

var person2 = {
    fName: "Bershin",
    lName: "John",
    sName: "bjohn",
    fullName(){
        const {fName, sName} = this
        console.log(`${fName} AKA ${sName}`)
    }
}
person2.fullName() // Bershin AKA bjohn

person2.sName = "Berchin"
person2.fullName() // Bershin AKA Berchin

var person3 = {
    fName: "Bershin",
    lName: "John",
    sName: "bjohn",
    fullName(){
        const {fName, sName} = this
        return `${fName} AKA ${sName}`
    },
    bioData(){
        const fulName = this.fullName()
        console.log(`His name is ${fulName}`)
    }
}
person3.bioData() // His name is Bershin AKA bjohn

/* The value of "this" depends on the "invocation context" the function it is used in */
var person4 = {
    fName: "Bershin",
    lName: "John",
    sName: "bjohn",
    fullName(){
        const {fName, sName} = this
        return `${fName} AKA ${sName}`
    },
    bioData(){
        console.log(this)
        const fulName = this.fullName()
        console.log(`His name is ${fulName}`)
    }
}
const invCont = person4.bioData
// invCont() // <ref *1> Object [global] 

/* In Arrow function as method, this referes to global scope  */
var person5 = {
    fName: "Bershin",
    lName: "John",
    sName: "bjohn",
    fullName(){
        const {fName, sName} = this
        return `${fName} AKA ${sName}`
    },
    bioData(){
        console.log(this)
        const fulName = this.fullName()
        console.log(`His name is ${fulName}`)
    },
    laugh: ()=>{
        console.log(this) // {}
        console.log(`${this.fName} says hahaha`) // undefined says hahaha
    }
}
person5.laugh()
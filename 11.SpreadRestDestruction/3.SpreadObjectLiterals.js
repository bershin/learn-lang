const students = {
    name: 'John',
    age: 25
}

// Copying object
const candidates = {...students}
console.log(candidates) // { name: 'John', age: 25 }
console.log(students === candidates) // false

/* Object don't spread in array - Directly*/
// const arr = [...students] // TypeError: students is not iterable
// Math.max(...students) // TypeError: students is not iterable
const arrObj = [{...students}]
console.log(arrObj) // [ { name: 'John', age: 25 } ]

// Array can spread in object
const arr = [1, 2, 3, 4, 5]
const obj = {...arr}
console.log(obj) // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
// String can spread in object
const str = "Hello"
const obj1 = {...str}
console.log(obj1) // { '0': 'H', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }

// Array can spread both string and object
const combine = [...arr, ...str, {...students}]
console.log(combine) // [ 1, 2, 3, 4, 5, 'H', 'e', 'l', 'l', 'o', 'John', 25 ]  

// Merging objects
const employees = {
    empId: 101,
    role: 'Developer'
}

const person = {...students, ...employees}
console.log(person) // { name: 'John', age: 25, empId: 101, role: 'Developer' }

// Overriding properties - latest property will override the previous property
const person1 = {...students, ...employees, name: 'Smith'}
console.log(person1) // { name: 'Smith', age: 25, empId: 101, role: 'Developer' }

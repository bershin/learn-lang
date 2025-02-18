// Reverse print character in String using loop
const fullName = "John Doe";
for(let i = fullName.length - 1; i >= 0; i--) {
    console.log(fullName[i]);
}


// Loops through an array of items
const exampleArray = [1, 2, 3, 4, 5];
for(let i = 0; i < exampleArray.length; i++) {
    console.log("Hello:", exampleArray[i]);
}

// Loops through an array of objects and find average,
const students = [
    {
        name: "John",
        grade: 90
    },
    {
        name: "Jane",
        grade: 80
    },
    {
        name: "Doe",
        grade: 70
    }
];

let total = 0;
for(let i = 0; i < students.length; i++) {
    total += students[i].grade;
    console.log(`${students[i].name} scored ${students[i].grade}`);
}

console.log("Average grade:", total/students.length);
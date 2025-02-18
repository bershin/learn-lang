const name1 = "rajini";
const role1 = "actor";
const name2 = "mani rathnam";
const role2 = "director";

/* Where Dynamic key don't work */
// const filmCrew = {
//     name1: role1,
//     name2: role2
// } // { name1: 'actor', name2: 'director' }

/* Only way to make Dynamic key work before*/
// const filmCrew = {}
// filmCrew[name1] = role1
// filmCrew[name2] = role2
// console.log(filmCrew) // { rajini: 'actor', 'mani rathnam': 'director' }


/* Where Dynamic key don't work */
const filmCrew = {
    [name1]: role1,
    [name2]: role2,
    [1+6+9]: "sixteen"
} // { '16': 'sixteen', rajini: 'actor', 'mani rathnam': 'director' }

console.log(filmCrew)

/*
    Add property through function
*/

const cinema = {
    name: "Vikram",
    actor: "Kamal"
}
/* Old way */
// const addProp = (obj, k, v) => {
//     const newObj = {...obj}
//     newObj[k]=v
//     return newObj
// }

/* Simpler */
// const addProp = (obj, k, v) => {
//     return {...obj, [k]: v}
// }

/* More simpler */
const addProp = (obj, k, v) => ({...obj, [k]: v})

console.log(addProp(cinema, "actress", "Dimple"))
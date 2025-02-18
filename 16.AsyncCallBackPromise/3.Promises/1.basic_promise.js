const adog = new Promise((resolve, reject) => {

})
console.log(adog) // Promise { <pending> }

const abike = new Promise((resolve, reject) => {
    resolve()
})
console.log(abike)  // Promise { undefined } 

const acat = new Promise((resolve, reject) => {
    reject()
})
console.log(acat) // Promise { <rejected> undefined }

const printPlanet = (response=>{
    const data = response.data
    const next = data.next
    for(let planet of data.results){
        console.log(planet.name)
    }
    return Promise.resolve(next)
})
const getPlanet = (url="https://swapi.dev/api/planets")=>{
    return axios.get(url)
}
getPlanet()
    .then(printPlanet)
    .then(getPlanet)
    .then(printPlanet)
    .then(getPlanet)
    .then(printPlanet)
    .catch(err=>{
        console.log("Error getting Planet list!!", err)
    })


// const printPlanet = (response=>{
//     const data = response.data
//     const next = data.next
//     for(let planet of data.results){
//         console.log(planet.name)
//     }
//     return axios.get(next)
// })
// const getPlanet = (url="https://swapi.dev/api/planets")=>{
//     return axios.get(url)
// }
// getPlanet()
//     .then(printPlanet)
//     .then(printPlanet)
//     .catch(err=>{
//         console.log("Error getting Planet list!!", err)
//     })
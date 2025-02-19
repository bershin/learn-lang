const checkStatusParse = (response)=>{
    if(!response.ok){
        throw new Error(`Status Code Error: ${response.status}`)
    }
    return response.json()
}

const printPlanetNames = (response)=>{
    const next = response.next
    for(let planet of response.results){
        console.log(planet.name)
    }
    return fetch(next)
}

fetch("https://swapi.dev/api/planets")
    .then(checkStatusParse)
    .then(printPlanetNames)
    .then(checkStatusParse)
    .then(printPlanetNames)
    .catch((err)=>{
        console.log("Error on fetch!!", err)
    })
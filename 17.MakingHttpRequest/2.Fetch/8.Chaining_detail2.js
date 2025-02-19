const checkStatusParse = (response)=>{
    if(!response.ok){
        throw new Error(`Status Code Error: ${response.status}`)
    }
    return response.json()
}

const printPlanetNames = (response)=>{
    const next = response.next
    const result = response.results
    for(let planet of result){
        console.log(planet.name)
    }
    return Promise.resolve(next)
}

const fetchNextPlanet = (response)=>{
    return fetch(response)
}
fetch("https://swapi.dev/api/planets")
    .then(checkStatusParse)
    .then(printPlanetNames)
    .then(fetchNextPlanet)
    .then(checkStatusParse)
    .then(printPlanetNames)
    .catch((err)=>{
        console.log("Error on fetch!!", err)
    })
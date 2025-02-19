fetch("https://swapi.dev/api/planets")
    .then((response)=>{
        return response.json()
    })
    .then((planets)=>{
        for(let planet of planets.results){
            console.log(planet.name)
        }
    })
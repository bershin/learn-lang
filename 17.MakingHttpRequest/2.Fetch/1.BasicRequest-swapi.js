fetch("https://swapi.dev/api/planets").then((response)=>{
    console.log(response)
    response.json().then((planets)=>{
        for(let planet of planets.results){
            console.log(planet.name)
        }
    })
})


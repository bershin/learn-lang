fetch("https://swapi.dev/api/planets")
    .then((response)=>{
        return response.json()
    })
    .then((planets)=>{
        return fetch(planets.results[0].films[0])
    })
    .then((filmResponse)=>{
        return filmResponse.json()
    })
    .then((films)=>{
        console.log(films.title)
    })
    .catch((err)=>{
        console.log("Error on fetch!!", err)
    })
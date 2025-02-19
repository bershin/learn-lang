fetch("https://swapi.dev/api/planets")
    .then((response)=>{
        if(!response.ok){
            throw new Error(`Status Code Error: ${response.status}`)
        }
        return response.json()
    })
    .then((response)=>{
        const next = response.next
        for(let planet of response.results){
            console.log(planet.name)
        }
        return fetch(next)
    })
    .then((response)=>{
        if(!response.ok){
            throw new Error(`Status Code Error: ${response.status}`)
        }
        return response.json()
    })
    .then((response)=>{
        const next = response.next
        for(let planet of response.results){
            console.log(planet.name)
        }
        return fetch(next)
    })
    .catch((err)=>{
        console.log("Error on fetch!!", err)
    })
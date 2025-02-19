axios.get("https://swapi.dev/api/planets") 
    .then((response=>{
        const data = response.data
        const next = data.next
        for(let planet of data.results){
            console.log(planet.name)
        }
        return axios.get(next)
    }))
    .then((response=>{
        const data = response.data
        const next = data.next
        for(let planet of data.results){
            console.log(planet.name)
        }
    }))
    .catch((err)=>{
        console.log("Error getting Planet list!!", err)
    })
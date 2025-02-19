fetch("https://swapi.dev/ai/planets").then((response)=>{
    response.json().then((planets)=>{
        for(let planet of planets.results){
            console.log(planet.name)
        }
    })
}).catch((err)=>{
        console.log("Error on fetch!!", err)
})

/* Older version of the code - method-1*/

// fetch("https://swapi.dev/ai/planets")
//     .then((response)=>{
//         if(!response.ok){
//             console.log(`Status Code Error: ${response.status}`)
//         }else{
//             response.json().then((planets)=>{
//                 for(let planet of planets.results){
//                     console.log(planet.name)
//                 }
//             })
//         }
//     })
//     .catch((err)=>{
//         console.log("Error on fetch!!", err)
//     })

/* Older version of the code - using throw*/

// fetch("https://swapi.dev/ai/planets")
//     .then((response)=>{
//         if(!response.ok){
//             throw new Error(`Status Code Error: ${response.status}`)
//         }else{
//             response.json().then((planets)=>{
//                 for(let planet of planets.results){
//                     console.log(planet.name)
//                 }
//             })
//         }
//     })
//     .catch((err)=>{
//         console.log("Error on fetch!!", err)
//     })
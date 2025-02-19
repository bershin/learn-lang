// This is the same as above but with JSON coverted to object
const req = new XMLHttpRequest(); // This is the object that makes the "XMLHttpRequest"
req.addEventListener("load", function(){
    console.log("It worked");
    const planets = JSON.parse(this.responseText);
    for (let planet of planets.results){
        console.log(planet.name);
    }
});
req.addEventListener("error", ()=>{
    console.log("Failed");
});
req.open("GET", "https://swapi.dev/api/planets");
req.send();
console.log("Request Sent"); // Appears first
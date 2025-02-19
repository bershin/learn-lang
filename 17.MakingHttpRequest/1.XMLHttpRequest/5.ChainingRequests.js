// This is the same as above but with JSON coverted to object
const req = new XMLHttpRequest(); // This is the object that makes the "XMLHttpRequest"
req.addEventListener("load", function(){
    const planets = JSON.parse(this.responseText);
    const film = planets.results[0].films[2];
    const req = new XMLHttpRequest();
    req.addEventListener("load", function(){
        console.log("It worked");
        const film = JSON.parse(this.responseText);
        const filmTitle = film.title;
        console.log(filmTitle);
    });
    req.addEventListener("error", ()=>{
        console.log("Film get Failed");
    });
    req.open("GET", film);
    req.send();
    console.log("Film Request Sent"); // Appears first
});
req.addEventListener("error", ()=>{
    console.log("Planet get Failed");
});
req.open("GET", "https://swapi.dev/api/planets");
req.send();
console.log("Planet Request Sent"); // Appears first
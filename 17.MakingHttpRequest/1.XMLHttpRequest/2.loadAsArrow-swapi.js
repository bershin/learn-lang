const req = new XMLHttpRequest();
req.addEventListener("load", ()=>{
    console.log("It worked");
    // console.log(req); // See all the properties of req
    console.log(req.responseText);
});
req.open("GET", "https://swapi.dev/api/planets/1");
req.send();
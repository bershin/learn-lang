const req = new XMLHttpRequest(); // This is the object that makes the "XMLHttpRequest"
req.addEventListener("load", ()=>{
    console.log("It worked");
    // console.log(req); // See all the properties of req
    console.log(req.responseText);
    // console.log(this.responseText); // For this to work change arrow function to normal function
});
req.addEventListener("error", ()=>{
    console.log("Failed");
});
req.open("GET", "https://swapi.dev/api/planets/1");
req.send();
console.log("Request Sent"); // Appears first
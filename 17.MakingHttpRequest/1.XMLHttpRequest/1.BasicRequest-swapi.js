function reqListener() {
    console.log(this.responseText);
  }
  
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://swapi.dev/api/planets/1");
req.send();
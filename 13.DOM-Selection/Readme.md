## Basic identifier for Html / CSS
- h1 -> h1{}
- class="special" -> .special{}
- id="bear" -> #bear{}
- input type="text" -> input[type="text"] {}

## Document Object Model
When a webpage loads up the browser turns all elemnts into objects in heirrarcial order.
- Every webpage has "document"
    - type "console.dir(document)" in console and expand to check url changes for each website.
    - Document contains many properties and methods.
    - Document is the entrypoint we use to access, manipulate and view the content in the dom.
        - `document.all` -> shows all element in page as object. Each one has its own properties.
- In google page, run in console below command.
    - `const btnObj = document.querySelector("#gbqfbb")`
    - `btnObj` -> gives a html tag
    - `console.dir(btnObj)` -> Give you object
    - `btnObj.value` -> See the value set in it
    - `btnObj.value = "Iam Unlucky` -> See the value change in browser.
    - `btnObj.addEventListener("mouseover", ()=>alert("your over"))` -> Add event to that button

# Selecting 
##  getElementByID
- See image object
    - `const img = document.getElementById("bear-photo")` 
    - `console.dir(img)` return "null" if no math, otherwise return object.
    - Look for type in '__proto__' property

##  getElementsByTagName
- `const p = document.getElementsByTagName('p')` or `document.getElementsByTagName('input')` Return HTMLCollection(2)[...] or empty HTMLCollection[] if not found.
    - HTMLCollection is type in DOM for representing collection of objects not an array.
    - Few array operation like `p.length`, `p[0]` & iteration over it is possible.
    - Its a light weight structure store elements.
    - Turn it to array `const parArr = [...p]`
```
    // Fill input with value.
    const inputs = document.getElementsByTagName('input')
    for(let input of input){
        console.log(input.value)
    }
```

##  getElementsByClassName
- `const spl = document.getElementsByClassName('.special')` Return HTMLCollection(2)[...] or empty HTMLCollection[] if not found.
- Narrow search -> `const ul = document.getElementsByTagName('ul')[0]` then `ul.getElementsByClassName('.special')`

##  querySelector & querySelectorAll
- querySelector: Can select every thing. But return single element. If multiple match returns first match.
    - Tag -> `document.querySelector('p')`
    - Class -> `document.querySelector('.special')`
        - First class in li -> `document.querySelector('li.special')`
        - `document.querySelector('body section ul li.special')`
    - Id -> `document.querySelector('#main')`
    - Attribute -> `document.querySelector('input[type="password"]')`
- querySelectorAll: Can select every thing. Returns a NodeList()[]
    - NodeList is same like HTMLCollection
    - has forEach


## Fun on javascript
```
const imgObj = document.createElement('img');
imgObj.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/1200px-2010-kodiak-bear-1.jpg';
imgObj.style.width = "200px";
imgObj.style.position = 'absolute';  // Ensures movement is across the entire body
imgObj.style.transition = 'all 2s';  // Smooth animation
document.body.append(imgObj);

setInterval(() => {
    const maxX = window.innerWidth - imgObj.clientWidth; // Prevents image from going out of bounds
    const maxY = window.innerHeight - imgObj.clientHeight;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    imgObj.style.left = `${x}px`;
    imgObj.style.top = `${y}px`;
}, 2000);


```

Rotate All Element
```
imgObj.style.transition = 'all 2s';

const allEl = document.body.children;

setInterval(() => {
    for (let el of allEl) {  // Use for...of instead of for...in
        const rot = Math.floor(Math.random() * 360);  // Add parentheses to Math.random
        const x = Math.floor(Math.random() * document.body.clientWidth);
        const y = Math.floor(Math.random() * document.body.clientHeight);
        
        el.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg)`; // Fix "rotation" -> "rotate"
        el.style.transition = 'all 2s'; // Ensure smooth animation
    }
}, 2000);
```
### Two ways not to add events
- onclick()
    - <button onclick(alert("single clicked"))>Submit</button>
    - <input id="clicker" type="range" min="100" max="500">
    - document.querySelector("#clicker").ondblclick = function(){alert("double clicked")}
- mouseover()
    - <img onmouseover(onme) type="range" min="100" max="500">
    - function onme(){alert("on me")}

### Get Screen & Browser dimension

Screen -> `window.screen.availHeight`, `window.screen.availWidth`
Browser -> `window.innerHeight`, `window.innerWidth`
    - document.body.clientWidth

### Event Object
- e / evt / event
- keydown -> Event for all keys, quickly when key is pressed down.(when not released, value increases)
    - "tab" respond to keydown, when focused inside input, but not outside to tab.
- keyup -> Event for all keys, when key is released
    - Event happens after keydown.
    - "tab" respond to keyup, when not focused, but insode focused it doesn't respond.
- keypress -> Only respond for printable 'characters' & numbers that shows up. , quickly when key is pressed down.
    - Not for special characters and symbols.
    - happens between keydown & keyup.(when not released, value don't increases)
    - "Delete" is not keypress. But "Return" is a keypress


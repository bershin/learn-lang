AJAX -> Asynchronous JavaScript And XML

Diffference between single & Multi page
- Page refresh/reloads when we search or click a new document inside it.
    - Each time a New URL is processed by server and rendered in browser. Eg) MDN Page -> Multipage
    - When search or clicked the page doesn't refresh but the content changed. - Eg) caniuse.com Single page
    - Inspect caniuse.com
### JSON - Java Script object notation
XML & JSON - 2 Way fo formatting data

JavaScript Object
```
{
    person:{
        name: {
            first: 'Berchin',
            last: 'John',
        }
        email: 'bershin@gmail.com',
        age: 34,
        degrees: ['B.E', 'M.S']
    }
}
```

JSON
```
{
    "person": {
        "name": {
            "first": "Berchin",
            "last": "John"
        },
        "email": "bershin@gmail.com",
        "age": 34,
        "degrees": [
            "B.E",
            "M.S"
        ]
    }
}
```
- In JSON all keys & strings are surrounded by double quotes.
- ALl lines are terminalted by comma, except last item optional.
- See the network XHR for https://swapi.dev/
- validate json https://jsonformatter.org
XML
```
<person>
    <name>
        <first>Berchin</first>
        <last>John</last>
    </name>
    <email>bershin@gmail.com</email>
    <age>34</age>
    <degrees>
        <degree>B.E</degree>
        <degree>M.S</degree>
    </degrees>
</person>
```
- XML requires a root element
- In XML, there’s no strict distinction between arrays (lists) and objects (dictionaries) like in JSON.
    - If an XML tag contains only one occurrence of a sub-element, it’s treated as an object (dictionary).
    - Can use attribute to differentiate `<degrees type="array">`

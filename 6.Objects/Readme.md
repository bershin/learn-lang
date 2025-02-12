### What is Objects(Python calls "dictionary")
- Objects are collection of properties
- Properties are a key-value pair.
- Object uses "custom keys" rather than using index.

### Representation of object
- All keys are converted to string
- value can be "john", 2, true
- Not printed in order.
### Creating object
- `const myObj = { key1:value1, key2:value2}`
    - Objects are enclosed by curly braces {}
    - Key and value are seperated by colon(:)
    - Each item is seperated by comma(,) last item is optional.
### Ways of accessing value
- `obj.key` -> If the key is a string with no spaces.
- `obj["key"]` -> for key as numbers and have space between them.
- `obj[key]` -> if key is a variable.
### Adding & Updating object
- `obj.key` (or) `obj["key"]`
    - If the key doesn't exists key/value is "created"
    - If the key exist "value" is "updated"
    - Value incremented by `obj.key++` or `obj["key"] += 2`
    
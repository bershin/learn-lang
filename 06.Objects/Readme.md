### What is Objects(Python calls "dictionary")
Object allows us to store data where we can associate things in group, pieces of data together in group.
    - Rather than ordering data by index, we can specify labels.
    - In Python Objects are called 'Dictinaries'
    - Here we associate value to variable and group them.
- Object is a container, contain information in pairs(ket/value)
    - Key is a kind of label given to associate a value.

### Representation of object
- Objects are collection of properties, enclosed by curly braces {}
    - Properties are a key-value pair, they uses "custom keys" rather than using index.
        - Example `"hello".length` length is a propery in string object.
    - Key and value are seperated by colon(:). Space doesn't matter.
    - Each item is seperated by comma(,) last item is optional.
    - Unlike 'JSON' except string values other key and value doesn't need to be enclosed in quotes.
- All keys are converted to string
    - value can be "john", 2, true
    - Not printed in order like arrays because it can be distinquesed by keys.

### Creating object literals
- `const myObj = { key1:value1, key2:value2}`
    - Here "myObj" is reference to the object
    - Objects are always represent by "const".
    - Key is converted to string, except symbols.
    - Value can be string, number, boolean, arrays or object itself.

### Ways of accessing value
Instead of index, we use keys, Access all keys using quotes, except dynamic variable and invalid identifier.
- Valid variables like key can be accessed by '.'
    - `obj.key` -> If the key is a string with no spaces.
- Use [] for invalid identifier(invalid variables). With or without quote
    - Valid identifier needs quotes to enclose it.
        - `obj["key"]` -> for key as numbers and have space between them.
    - Key as dynamic variable do not needs quote to enclose it.
        - `obj[key]` -> if key is a variable.
- "undefined" while accessing keys not in the object.
### Adding & Updating object
Access the keys if 'undefined' - add value. If contains, update value.
- `obj.key` (or) `obj["key"]`
    - If the key doesn't exists key/value is "created"
    - If the key exist "value" is "updated"
    - Value incremented by `obj.key++` or `obj["key"] += 2`
    
### Object are reference like array
Object value are not stored in variable instead reference of object value is stored in variable like array, just store "address".
- Objects variables are reference like array, so use "const"
    - Using "const" we can add/change key/value
    - But cannot assign existing object variable to this object.
- Assign the object to another variable and updating/adding value will change in both because they refer to one address. In this case object cannot be "const".
    - Compare those two with "====" or "==" says true because both have same address.
- If you need same copy but not same reference clone object.
    - Compare those two with "====" says false because both have different address with same value.
- No straight way to check both object have same value

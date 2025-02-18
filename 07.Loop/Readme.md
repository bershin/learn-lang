## Iterate over numbers, for string & array 
### Simple for loop
For loop syntax
```
for(initialExpresion; condition; incrementExpression)
```
- incremental or decrement expression can be one or more
- For String & Array use length
- Can print index in String & Array
- Use index to print String & Array item.

### While loop
- Use while, when you don't know how many times its going to run. Like "guess game" or "chess game"

### Break & Continue
- Break the loop in which it is. Not the outer loop
- Continue skip the later part od code in the loop and goes back to check condition.

### Infinite loop
- Avoid using equality operator in conditions.
- While using > or <, make sure it moves towards it not in opposite side.

### Nested loops
- For each item in outer loop the item in inner loop runs.
- Can loop through numbers, multi dimension array.

## Iterating over array(String) and object.
- Runs for each element in the arra/string or Object.
### "For of" loop - Prefered to iterating over array(String)
```
for(let item of array/string)
```
- Use `for of` with "arrays" & "string" to get item/value from it.
- for object cannot use directly instead `Object.keys(<obj>)` which return a array of keys.
- for object cannot use directly instead `Object.values(<obj>)` which return a array of values.
- To get index in "for of" use `items.entries()`

### "For in" loop - Prefered to iterating over object.
```
for(let key in object)
```
- Use `for in` with "object" to get "key" from it.
- You can use it with "array" to get "index", because array is also an object.
    - But the index is array is of "string" type.
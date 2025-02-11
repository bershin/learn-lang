### Simple for loop
For loop syntax
```
for(initialExpresion; condition; incrementExpression)
```
- incremental expression can be one or more

### Infinite loop
- Avoid using equality operator in conditions.

### While loop
- Use while, when you don't know how many times its going to run.

### For of loop
```
for(item of array/string)
```
- Use `for of` with "arrays" & "string" to get item/value from it.
- for object cannot use directly instead `Object.keys(<obj>)` which return a array of keys.

### For in loop
```
for(key in object)
```
- Use `for in` with "object" to get key from it.
- You can use it with array to get index.
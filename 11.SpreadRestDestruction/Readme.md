## Spread
- Not supported in IE
- Expands an interable(array, string, etc) into a list of arguments.
- Used to duplicate array
    - Array can duplcated using slice.
- Combine arrays to a new array
- add item to arrays to form a new array
- Spread Strings to array
    - Same as split string to array
- Make copies of object
    - Combination of object
    - Object don't spread in arrays but array can spread in object
## Argument Object - Old Way
- Arguments is Not an array, So do not have array methods.
- but we can convert to array
- there is no functionality provided to collect remaining arguments.
- Cannot use arguments in arrow function

## Rest - New way
- Collect as a real array, no need to convert
- Can collect remaining argument after specific parameters. Hence Rest
- Opposite of spread, as we collect arguments in to an array
- Order matters in Rest
- Only one rest is possible.
- Rest has to be at the last parameter
- Can use in arrow function

## Destructuring
- Clean way of unpack Values from array and properties from object.
- Position matters in array destructuring
- can skip results
- Can Use rest

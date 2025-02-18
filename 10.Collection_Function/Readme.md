## Array callback methods
- Runs once per element in an array

### Foreach
- ForEach accepts a callback function and calls the callback function once per each element in the array.
    - Just like we do `arr.indexOf('m')`
- Elements in the array becomes placeholder in the argument of the callback function.
- Index can also be printed in forEach.

### Map
- Create a new array from an existing array.
    - Creates a new array with the result of calling a callback on every element in the array.
    - Can duplicate an array.
- Values has to be "returned" from the callback function.
    - Not returned means the array will have "undefined" items.
- Element can be manupulated and stored back in array.
- Use Map instead of creating a new array and pushing in it. 

### Arrow Functions
- An alternate way of defining function expression.
    - Same as function expression but without "function" keyword.
    - But a arrow between parenthesis and braces
    - NOt supported in IE.
- No need parenthesis if only "one" argument.
    - Need parenthesis if "no argument" or more than one argument.
- Implicit return - No return keyword required
    - For one /expression is returned, remove return & braces.
    - If expression is long surround with ()
    -  Do not use implicit return if it has more than one return 

### Array find
- Return the elemenent, if the element has a string within it.
    - Return the value of first element in the array matched
    - Use "includes" or indexOf in callback function to match string and return the element.
    - Use comparator operator for numbers
    - arr.includes(), looks for exact match
    - arr.indexOf() looks for exact match in list.
    - Usually used to find the object in an array and delete or update based on its id.
    - some is aso used 
### Array Filter
- Create a new array with all elements that passes the test.

### Some & Every
- Both returns "true" or "false"
- Every: All elements pass the test
    - Will return if one element fail
- Some: Atleast one element pass the test.
    - Will return if one element pass
### Sorting
- Lexical sort : Sort based on character.
- Sort use compare function
    - (a,b) <- positive = sort b before a
    - other - leave as it is
- Sort mutates/modifies the original array
    - Avoid inplace update, make a copy using slice()
### Reduce
- Resulting in a single value. 
- accumulator is where a return us stored.
- initial value is optional
## Scope
Variable visibility: Which part of the program have access to the variable.
### Function Scope
- Variable within function are visible only inside the function.
- Variable declared outside function can be redeclared inside function

### Block Scope
- Any thing inside {} like "if" or "for" loop are block scope. Object block doesn't come under block scope.
- Scope of var is outside to the block, but not for let and const. 
- "Var" can be redeclared in the same scope
- Inside the block we have access to variables declared outside the block.

### Lexical Scope
- In a nested function the variable doesn't have scope outside. But the variable is available in nested function and can be overritten.
- You cannot execute the inner function directly.
- React has nested function all the time.

### Function Expression
- Function do not have a name and stored in variable.
    - Function without name is called "Anonymous function"
    - Both anonymous & named function can be assigned to variable
- Its possible because in JS "functions" are object. That means,
    - Function can be stored in variable,
    - Functions can be stored as items in array
    - Function can be passed as argument.
- `console.dir(<func_name>)` -> proves function is an object

### Higher order function - Function as values
- Storing function as items in array
- Storing functions as value in object.
    - Function to an object is "method" like `arr.indexOf(2)` here this function property is inside array.
- The functions can be executed from array or object.

### Higher order function - Function as Arguments
- Function accept another function as argument

### Higher order function - Function as return values
- Function itself returns a function
- Also called function factories.
- Lexical scope gets effect here.

### Callback
- A Callback function is a function passed into another function(outer) as an argument, which is then invoked inside the outer function.
- Same as "Higher order function - Function as Arguments" instead we use anonymous function instead of named function.
- Function definition is passed as argument instead of function variable.
- Mostly used for one time function rather than reusable function which can be a standalone.
- Build-in callback functions like setTimeout
- Use callback if you think the data will take time to respond or based on user action eg) Api calls & events.

### Hoisting
- Printing a variable not defined is "Reference Error"
- Printing a variable which is defined later using "var" is "undefined, means its hoisted.
    - It hoist the variable not the value.
- For "let" & "const" the variable is not hoisted
- functions are hoisted
- function expression are not hoisted
    - With let the variable not not hoisted
    - with var variable is hoisted but not value, so executing "undefined" is error
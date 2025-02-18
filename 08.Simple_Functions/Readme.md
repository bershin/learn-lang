## Simple Function
Functions allows us to write reusable, modular code.
- Two parts of function "Defining" & "Running"
- For build-in functions "Definition" ia already done for you. You have to Just run the function!
    - `"Hello".toUpperCase()`
Defining Function
```
function <func_name>(){
    // Some code
}
```
Running function
```
<func_name>()
```

## Function with arguments
- Build-in functions with arguments
    - `"Hello".indexOf('l')` -> 2
- Multiple parameter seperated by commas
- Arguments not passed are "undefined" in parameter

## Return Value
- Function return value needs to be 
    - Assign function to variable and printed the variable in console.log() to see the return value (or)
    - Directly run the function in console.log() to see the return value.
    - Capturing values for function that do not return anything is `undefined`
- Cannot return two seperate value
    - In that case return the value as string or array.
- In console functions return value is understood by `<` sign
    - `"Hello".toUpperCase()`
- Having return in middle of a function, the code after that will not execute.
    - So its good to surround returm with conditions.

## Default Parameter
- Default parameter needs to come at the end.
- Order is important when it comes to multi default value
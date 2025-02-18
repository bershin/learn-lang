## Shorthand Object Property
- If the key and value name is same, you can use any one in object literals.

## Computed Properties
- Dynamic keys is possible only by assignment before.
- You can have synamic key by enclosing it in square bracket.
- Evaluate an calculation in dynamic key

## Adding Methods/Functions to our objects.
- We can add function as property to our object.
    - This is called methods instead of functions.
- We do this to group functions together and organization.
- "Hello".toUpperCase() - This is a method, lives in string object.
- Can be written shorter removing "function" and no key.

## "This" keyword
- Reference to an object and the object referes to the current execution scope. It gives the object back
- In a regular function it referes to the window in browser
    - In Browser: Variable declared using "var" are added to global scope. i.e. "Window". But not with "let" & "const"
        - var color = "red"; window.color
        - window.alert("HI")
    - In node it referes to the global object "Object [global] ".
- In an object, this referes to the object itself, not the window.
    - This is important because it helps to refer the properties inside object by the method.
- Method can call another method inside it using this keyword.
- The value of "this" depends on the "invocation context" the function it is used in.
- Arrow functions are not used as methods because inside arrow function "this" does not referes to properties inside it.
## Arrow function doesn't get "this" but sometimes its helpful
- Arrow function get the this value if the this value is inside another function inside it.

## Deck challange
- Object pass as reference in nodejs
- As function 
    - Writing as function, you may need to pass the created deck each time. Which is  not look nice.
    - You may also need to return values.
    - You may also need to have hold of values.
    - ** Keeping deck as global value, will not allow us to create more than one deck.
- As Object
    - All relevent info are kept in one blace.
    - Grouping values with functionality.(things qith actions)
    - Not need to keep hold of any variables.(Every thing is stored inside object and methods act on object)
    - Its possible by "this" keyword.
    - ** Cannot create more than one deck
# `Closure`

Closure in JavaScript refers to the ability of a function to remember and access its lexical scope even when that function is executed outside that scope.

## `Example 1`: Apply debugger for better understanding
```javascript
function makeFunc() {
    const name = "Mozilla";
    
    // Inner function 'displayName' is defined within the lexical scope of 'makeFunc'
    function displayName() {
        // 'displayName' has access to the 'name' variable declared in the outer function scope
        console.log(name);
    }

    // Returning the inner function 'displayName' from 'makeFunc'
    return displayName;
}

// 'myFunc' now holds the reference to the inner function 'displayName' returned by 'makeFunc'
const myFunc = makeFunc();

// Executing 'myFunc' triggers the execution of 'displayName' which logs the value of 'name'
myFunc(); // Output: "Mozilla"
```

- **Closure** allows a function to maintain access to the variables and parameters of its lexical scope even after the outer function has finished executing.
- In this example, the inner function `displayName` maintains access to the variable `name` declared in the outer function `makeFunc`'s scope, even after `makeFunc` has returned.
- When `myFunc` is called, it executes `displayName`, which still has access to `name`, and thus logs `"Mozilla"`.
- Closures are commonly used in JavaScript for data privacy, encapsulation, and creating modules. They allow for the creation of functions with persistent private state.

## `Example 2`:

```js
// document.getElementById("orange").onclick = function(){
//     document.body.style.backgroundColor = `orange`
// }
// document.getElementById("green").onclick = function(){
//     document.body.style.backgroundColor = `green`
// }

function clickHandler(color){
    // document.body.style.backgroundColor = `${color}`

    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById('orange').onclick = clickHandler("orange")
document.getElementById('green').onclick = clickHandler("green")
```
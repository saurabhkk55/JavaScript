# `Primitive` and `Non-Primitive` Data Types

## `Memory Storage in JavaScript`

### 1. `Primitive Types (Stack Memory)`

Primitive types, such as `number`, `BigInt`, `string`, `boolean`, `null`, `undefined`, and `symbol` are typically stored directly in the stack memory. Since primitive types have a fixed size, they can be efficiently stored in this way. Let's consider an example:

```javascript
let a = 10;
let b = a; // assigning copy of a to b
b = b * 10;

console.log("a:", a); // Output: a: 10
console.log("b:", b); // Output: b: 100
```

In this example, `a` and `b` are independent variables, each containing their own separate copy of the primitive value `10`. Modifying `b` does not affect the value of `a`.

### 2. `Non-Primitive Types (Heap Memory)`

Non-primitive types, such as objects and arrays, are stored in the heap memory. When assigned to a variable, they are stored by reference, meaning the variable holds a reference (pointer) to the location in memory where the actual data is stored. Consider the following example:

```javascript
let myObj1 = { 
		name: "saurabh", 
		skill: "Go" 
	};

console.log("myObj1:", myObj1); // Output: myObj1: { name: "saurabh", skill: "Go" }

let myObj2 = myObj1; // assigning memory location of myObj1 to myObj2
myObj2.skill = "JS";

console.log("myObj1:", myObj1); // Output: myObj1: { name: "saurabh", skill: "JS" }
console.log("myObj2:", myObj2); // Output: myObj2: { name: "saurabh", skill: "JS" }
```

In this example, both `myObj1` and `myObj2` reference the same object in heap memory. Therefore, modifying `myObj2.skill` also affects `myObj1.skill`.


## `call by value` and `call by reference`

### 1. `Primitive Types`

Primitive types encompass `number`, `BigInt`, `string`, `boolean`, `null`, `undefined`, and `symbol`. When passing a primitive type to a function, the function receives a copy of the value. Modifications made to the parameter inside the function do not affect the original value outside the function. This behavior is akin to **`call by value`**.

### Example:

```javascript
function modifyPrimitive(x) {
    x = 10; // Changes made here won't affect the original value outside the function
    console.log(x); // 10
}

let num = 5;
modifyPrimitive(num);
console.log(num); // 5
```

### 2. `Non-Primitive Types (Reference Types)`

Non-primitive types include `object`, `array`, `function`, etc. When passing a reference type to a function, the function receives a reference to the original value. Modifications made to the parameter inside the function will affect the original value outside the function. This behavior is akin to **`call by reference`**.

### Example:

```javascript
function modifyArray(arr) {
    arr.push(4); // This modification affects the original array
    console.log(arr); // [1, 2, 3, 4]
}

let myArray = [1, 2, 3];
modifyArray(myArray);
console.log(myArray); // [1, 2, 3, 4]
```


# Homework 2
## 1. Why are closures useful in JavaScript? Give an example use case.
Closure preserves the variable environment from the original scope in which the function is created. This is useful in JavaScript because allows the function to access those variables even if the original scope is closed.

An example use case would be when you want to return a function from another function and the returned function needs access to variable(s) from its parent function:

```js
function createUrl(baseUrl) {
    return function(directory) {
        return `${baseUrl}${directory}`;
    };
}
```

## 2. When should you choose to use “let” or “const”?
"let" and "const" are both keywords used in JavaScript to declare variables. The key difference between "let" and "const" is that let is mutable while const is immutable. Given these characteristics, you should use "let" when you need to modify the variable in the future and "const" on variables that should not be reassigned. 

## 3. Give an example of a common mistake related to hoisting and explain how to fix it.
Hoisting is a behavior in which variables are lifted up to the top of their scope. Technically, all variables in JavaScript are hoisted regardless of which keyword was used to declare it. However, variables declared with "let" and "const" have temporary dead zones meaning that those variables can not be accessed before their declaration or else the program will throw errors. variables declared with the "var" keyword, on the other hand, are accessible before their declaration with "undefined" as their initial values. On the contrary, functions declared by function declaration have their initial value as the actual function.

One common mistake related to hoisting would be when developers use function expressions or arrow functions and assume they are hoisted in the same way as function declarations. This can lead to errors when trying to call the function before its declaration. function expressions and arrow functions will be either "undefined" or throw errors depending on which keyword was used if it was called before its actual declaration. To avoid this mistake, you can either ensure to call the function after its declaration or initialize it using function declaration.

## 4. What will the outcome of each console.log() be after the function calls? Why?
```js
const arr = [1, 2];
function foo1(arg) {
  arg.push(3);
}
foo1(arr);
console.log(arr);
/*
* [1, 2, 3]
* Because arr is an object and thus the reference is passed to foo1, and foo1 adds 3 at the end of arr.
*/

function foo2(arg) {
  arg = [1, 2, 3, 4];
}
foo2(arr);
console.log(arr);
/*
* [1, 2, 3]
* The reference of arr is passed to foo2 and stored in arg but arg is a local variable to foo2.
* Reference itself is passed by value and therefore changing the reference stored in arg does not alter the original arr.
*/

function foo3(arg) {
  let b = arg;
  b.push(3);
}
foo3(arr);
console.log(arr);
/*
* [1, 2, 3, 3]
* The reference of arr is passed to foo2 and stored in arg, then b is assigned to the reference.
* Thus pushing 3 to b alters arr.
*/

function foo4(arg) {
  let b = arg;
  b = [1, 2, 3, 4];
}
foo4(arr);
console.log(arr);
```
/*
* [1, 2, 3, 3]
* The reference of arr is passed to foo2 and stored in arg, and then local variable b is assigned to the reference.
* Reference itself is passed by value and therefore changing the reference stored in b does not alter the original arr.
*/

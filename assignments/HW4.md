# Homework 4
## 1. What is the difference between instance methods and static methods?
Instance methods are methods that are called on instances of the class and are defined on the prototype of the class. 
Static methods on the other hand are defined using the static keyword and called on the class itself.
## 2. How does Javascript handle concurrency?
Since JavaScript is a single-threaded language, meaning that only one task can be executed at a time. It allows asynchronous operations to
run in the background(Web API) to avoid blocking the main thread. When asynchronous functions finish running, their callback will be added 
to the callback queue or microtask queue depending on the type of asynchronous function. The event loop will continuously check the call stack
and if the call is empty, it will process the next callback from the microtask queue first, then from the callback queue for execution.
## 3. What is async/await? How does it differ from using the promise instance methods?
async/await are keywords that allow you to handle asynchronous operations and write asynchronous code in a more readable manner as it reminisces
synchronous code. Promise instance methods require chaining with .then, .catch, and .finally methods which can make the code look messy and 
harder to maintain.
## 4. Can you use await outside of an async function?
No. The await keyword can only be used inside an async function.
## 5. What is callback hell and why is it considered a problem?
Callback hell refers to a pyramid structure caused by nested callback functions. It is a problem because nested callbacks make the code 
harder to read and maintain. It also adds complexity for error handling and scaling.

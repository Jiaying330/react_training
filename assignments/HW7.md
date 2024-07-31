# Homework 7
## 1. What is useEffect? What are the different behaviors of useEffect? What is a dependency array?
useEffect is a hook in React for performing side effects in functional components. It can have different behavior
depending on the dependency array that is passed in. The dependency array is the second argument that useEffect takes 
and it is a list of variables that the effect depends on. React use this array to determine when to re-run the effect.
When there is no dependency array, the effect runs after every render. When there is an empty dependency array, the 
effect runs only once after the initial render and its cleanup runs on unmount. When there are elements in the array,
the effect will run when any of the variables in the array changes.
## 2. What is useRef and when do you want to use it?
useRef is a hook in React that allows you to create a mutable object. it is used when you need to store values that 
persist across re-renders of a component without triggering re-rendering.
## 3. How to reuse hook logic in React?
You can reuse hook logic in React by creating custom hooks. Custom hooks allow you to encapsulate and share reusable 
logic among different components. To define a custom hook, you declare and export a function that starts with 'use' 
and encapsulate reusable hook logic.

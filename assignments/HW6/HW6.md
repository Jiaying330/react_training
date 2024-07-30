# Homework 6
## 1. What is useState?
useState is a hook in Reack that allows you to create and maintain state and used in functional components. It is a way to store and manage data
in a component that can change over time and when it changes, it can trigger re-rendering of the component
## 2. What is props drilling and state lifting?
Prop drilling refers to the process of passing data from a parent component to deeply nested child components through multiple layers of 
intermediate components. This can lead to less organized and maintainable code. 

State lifting is a scenario when two or more sibling components need to share state, the state is lifted up to their closest common ancestor. The
parent component holds the shared state and provide it to its children via props.
## 3. What is the ‘key’ attribute?
The 'key' attribute is a special attribute in React that helps identify which items have changed, been added, or been removed from a list. This
is crucial for optimizing performance and ensuring that the UI updates efficiently.
## 4. What is synthetic event?
A synthetic event is an object in React that acts as a cross-browser wrapper around the native browser event. it is designed to ensure that events
behave consistently across different browsers. 
## 5. What is virtual dom?
It is a representation of the real DOM saved in memory. React uses this virtual representation of the actual DOM to perform UI updates efficiently.

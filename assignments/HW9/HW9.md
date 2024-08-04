# Homework 9
## 1. How do you decide when to split a component into subcomponents?
A component should be split into subcomponents when it handles multiple
responsibilities, needs reusability, involves complex logic, or becomes difficult
to read and maintain. Smaller subcomponents can help improve the clarity of the coding
structure, testing and making the codebase more modular thus easier to reuse and manage
## 2. What is the difference between state and props?
While both state and props are used to manage data in components, they serve different purposes
and have distinct characteristics. Props are immutable data passed from parent to child components
and are used for passing information and functions. States are created and managed within the component
and are mutable.
## 3. How to trigger rerender in a component?
A rerender is triggered in a component when a state is updated using useState, or the props received from
its parent is updated. You can also force a rerender by using forceUpdate in class component
## 4. Why do you like react over other front-end libraries and frameworks?
React has many features that improve the efficiency of the development. It is a component-based 
architecture and uses Virtual DOM to improve performance. Its JSX syntax is intuitive and blends in nicely
with JavaScript code. Its powerful React hooks for managing states and side-effects in components also help
in improving code management. It is a library and thus also provides flexibility to integrate with other libraries.
## 5. What’s the difference between controlled components and uncontrolled components?
Controlled components in React are components where the form data is handled by the component state, making it the single 
source of truth for the form data. It ensures that the values are synchronized with the component's state. Uncontrolled
components, on the other hand, store their own state internally within the DOM, which means the form data is managed by the 
DOM rather than React. 
## 6. How to prevent components from unnecessary rerendering?
For functional components, you can use React.memo to memoize the component and prevent re-renders if the props haven't changed.
useCallback and useMemo can be used to memorize callback functions and expensive operations, which can also prevent unnecessary 
updates due to reference changes. For class components, you can implement shouldComponentUpdate to manually control when a component
should update based on changes in props or state. 
## 7. Why are props needed to be immutable?
Props in React need to be immutable to ensure predictable and consistent behavior across components. Immutability allows React to 
efficiently determine when changes occur by comparing previous and current props, which helps in optimizing re-renders and improving 
performance. When props are immutable, components can rely on a stable set of inputs, making it easier to reason about the component's
behavior and avoid unintended side effects, which can also help simplify debugging and testing.
## 8. Explain the Virtual DOM and how React uses it to improve performance.
The Virtual Dom is a lightweight, in-memory representation of the actual DOM used by React to optimize updates and improve performance.
When a component's state or props change, React first updates the Virtual DOM, which is a virtual copy of a real DOM. It then compares to
the updated Virtual DOM with a previous snapshot using a process called "reconciliation." This comparison identifies the differences between
the two versions. React then only updates these changes to the real DOM in a batch, rather than changing the entire DOM. This minimizes the
direct manipulations of the DOM and enhances overall performance.
## 9. Can you explain the useMemo and useCallback hooks and provide examples of when you might use them?
The useMemo and useCallback hooks in React are used to optimize performance by preventing unnecessary re-computations and re-creations of 
functions and values. useMemo memoizes a computed value, recalculating it only when its dependencies change, which is useful for optimizing 
expensive calculations or rendering large lists. For example, if you have a complex function that processes data and you only want it to re-run 
when specific dependencies change, you can use useMemo to avoid recalculating on every render. useCallback memoizes a function, ensuring it 
maintains the same reference between renders unless its dependencies change, which is helpful for preventing unnecessary re-renders of child 
components that rely on this function. For instance, if you pass a callback function to a child component as a prop and want to avoid re-rendering 
the child component unnecessarily, you would use useCallback to keep the function reference stable.
## 10. Explain the concept of Higher-Order Components (HOCs) and provide an example use case.
Higher-Order Components in React are functions that take a component and return a new component with added functionality or enhanced props, enabling 
code reuse and logic abstraction. For example, an HOC can be used to add authentication checks to multiple components: it wraps a component and 
conditionally renders it based on authentication status, or redirects to a login page if the user is not authenticated. This pattern helps avoid 
code duplication and centralizes common logic, making components cleaner and easier to maintain.
## 11. Discuss the differences between React's class components and functional components. Which one do you prefer and why?
React's class components and functional components differ primarily in their syntax and lifecycle management. Class components use ES6 classes and 
offer lifecycle methods like componentDidMount and componentDidUpdate for managing side effects and component states. Functional components, on the other 
hand, use simpler function syntax and, since the introduction of hooks, can manage state and side effects through useState and useEffect without needing 
class methods. I prefer functional components due to their concise syntax, easier readability, and the powerful capabilities provided by hooks, which simplify 
state and side-effect management while promoting cleaner and more modular code.
## 12. How do you ensure your code is maintainable and scalable?
To ensure code is maintainable and scalable, modular design can be used by breaking the application into smaller, reusable components, adhering to clear naming 
conventions and consistent coding standards, and implementing effective state management. I also write unit tests to catch bugs early, document components and complex 
logic for clarity, and engage in code reviews to maintain code quality and share knowledge. These practices help keep the codebase organized, adaptable, and easy 
to manage as the project evolves.

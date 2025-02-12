---
date : 2024-12-01T21:25:51+05:30
draft : false
title : Components in React
---

React components are the building blocks of React applications. They allow developers to break the UI into reusable, independent pieces.

---
### Functional Components vs Class Components

| **Aspect**               | **Functional Components**                                             | **Class Components**                                 |
| ------------------------ | --------------------------------------------------------------------- | ---------------------------------------------------- |
| **Definition**           | Plain JavaScript functions that return JSX.                           | ES6 classes that extend `React.Component`.           |
| **State**                | Uses the `useState` and `useEffect` hooks (introduced in React 16.8). | Uses `this.state` for managing state.                |
| **Lifecycle Methods**    | Replaced by hooks like `useEffect`.                                   | Explicit lifecycle methods like `componentDidMount`. |
| **Syntax**               | Simpler and more concise.                                             | More verbose due to class structure.                 |
| **Performance**          | Generally lighter and faster.                                         | Slightly heavier because of class overhead.          |
| **Example**              |                                                                       |                                                      |
| Functional Component:    | Class Component:                                                      |                                                      |
| ```jsx                   | ```jsx                                                                |                                                      |
| function Greet() {       | class Greet extends React.Component {                                 |                                                      |
| return `<h1>Hello</h1>`; | render() {                                                            |                                                      |
| }                        | return `<h1>Hello</h1>`;                                              |                                                      |
| ```                      | }                                                                     |                                                      |

---
### When to Use?

- Use functional components whenever possible; they are the modern and preferred approach. Class components are now rarely used in new projects.

---
### How to Create and Export Components

1. Creating a Functional Component
	```jsx
	// Greet.jsx
	function Greet() {
    return <h1>Hello, World!</h1>;
	}
	export default Greet;
	```
	
2. Creating a Class Component
	```jsx
	// Welcome.jsx
	import React, { Component } from 'react';
	class Welcome extends Component {
    render() {
        return <h1>Welcome to React!</h1>;
	    }
	}
	export default Welcome;
	```

3. Named Exports
	You can export multiple components from a file:
```jsx
// Greetings.jsx
export function Hello() {
    return <h1>Hello!</h1>;
}

export function Goodbye() {
    return <h1>Goodbye!</h1>;
}

```

---
### Importing Components and Using Them Inside Other Components

1. Default Export
	Import and use a default exported component
```jsx
import Greet from './Greet';

function App() {
    return (
        <div>
            <Greet />
        </div>
    );
}
export default App;

```

2. Named Exports
	Import and use named exported components
```jsx
import { Hello, Goodbye } from './Greetings';

function App() {
    return (
        <div>
            <Hello />
            <Goodbye />
        </div>
    );
}
export default App;
```

3. Aliasing Components
	Rename components during import
```jsx
import { Hello as Hi } from './Greetings';

function App() {
    return <Hi />;
}
export default App;
```

4. Composing Components
	Use components inside other components to build a hierarchy
```jsx
import Greet from './Greet';

function Header() {
    return (
        <header>
            <Greet />
            <h2>This is a header</h2>
        </header>
    );
}

export default Header;
```

---
### Summary

- **Functional Components** are the modern standard due to hooks and simplicity.
- Components can be exported as default or named exports.
- You can compose a rich UI by importing and using components inside other components.  
    This modular structure makes React scalable and maintainable.

---
# References

- https://www.freecodecamp.org/news/function-component-vs-class-component-in-react/
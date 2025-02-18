---
date : 2024-12-01T21:29:05+05:30
draft : false
title : Props in React
---

**Props** (short for properties) are used to pass data from a parent component to a child component. Props are **read-only**, meaning they cannot be modified by the child component receiving them.

---
### Key Features of Props

- Passed as an object to the component.
- Immutable (cannot be changed by the component receiving them).
- Used for dynamic data and reusability.

---
### How to Pass Props Between Components

1. Define props in the parent component
	```jsx
	function Parent() {
    const name = "John";
    return <Child name={name} />;
	}
	```

2. Access props in the child component
	```jsx
	function Child(props) {
    return <h1>Hello, {props.name}!</h1>;
	}
	```

3. Destructure props for cleaner syntax
	```jsx
	function Child({ name }) {
    return <h1>Hello, {name}!</h1>;
	}
	```

___
### Example of Props

```jsx
function Button({ label, onClick }) {
    return <button onClick={onClick}>{label}</button>;
}

function App() {
    const handleClick = () => alert("Button clicked!");
    return <Button label="Click Me" onClick={handleClick} />;
}
```

---
# References

- https://legacy.reactjs.org/docs/components-and-props.html
- https://www.freecodecamp.org/news/how-to-use-props-in-reactjs/
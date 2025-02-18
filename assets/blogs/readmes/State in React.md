---
date : 2024-12-01T21:31:26+05:30
draft : false
title : State in React
---

**State** is used to manage data that changes within a component. Unlike props, state is **mutable** and controlled by the component itself.

---
### Using the `useState` Hook

1. Import `useState`
	```jsx
	import { useState } from 'react';
	```

2. Initialize state
	```jsx
	const [count, setCount] = useState(0);
	```

3. Update state
	```jsx
	setCount(count + 1);
	```

---
### Example of State

```jsx
function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
```

---
### Updating and Managing State

1. Updating State
	- State updates are asynchronous. React batches multiple state updates for performance.
	- Use the previous state for calculations
	```jsx
	setCount((prevCount) => prevCount + 1);
	```

2. Managing Complex State
	- For objects or arrays, update using the spread operator
	```jsx
	const [user, setUser] = useState({ name: "John", age: 25 });
	setUser((prevUser) => ({ ...prevUser, age: 26 }));
	```

3. Conditional Rendering Based on State
	```jsx
	function Toggle() {
    const [isOn, setIsOn] = useState(false);

    return (
        <button onClick={() => setIsOn(!isOn)}>
            {isOn ? "ON" : "OFF"}
        </button>
	    );
	}
	```

4. State in Forms
	Manage input fields using state
	```jsx
	function Form() {
    const [name, setName] = useState("");

    return (
	        <input
	            type="text"
	            value={name}
	            onChange={(e) => setName(e.target.value)}
	        />
	    );
	}
	```

---
### Summary

|**Feature**|**Props**|**State**|
|---|---|---|
|**Mutability**|Immutable (read-only)|Mutable (can be updated)|
|**Scope**|Passed from parent to child|Local to the component|
|**Use Case**|Passing data between components|Managing dynamic, interactive data|
|**Example**|`<Child name="John" />`|`const [count, setCount] = useState(0)`|
- **Props** make components reusable by passing dynamic data.
- **State** manages component-specific data that changes over time.

---
# References

- https://www.freecodecamp.org/news/full-guide-to-react-hooks/
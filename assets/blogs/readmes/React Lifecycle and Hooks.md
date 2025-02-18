---
date : 2024-12-01T21:40:04+05:30
draft : false
title : React Lifecycle and Hooks
---

React hooks allow functional components to manage side effects, state, and other lifecycle events. The introduction of hooks has simplified component lifecycle management and enabled functional components to become more powerful and feature-rich.

---

### 1. Introduction to React Hooks

React hooks are functions that allow you to "hook into" React features from functional components. They provide a more declarative approach to handling component logic compared to class components. The most commonly used hooks are:

- `useState`: To manage state in functional components.
- `useEffect`: For handling side effects, such as fetching data or subscribing to external services.
- `useContext`: For accessing context data.

The `useEffect` hook, in particular, is essential for dealing with side effects in React.

---

### 2. The `useEffect` Hook

The `useEffect` hook allows you to perform **side effects** in functional components. Side effects refer to operations that affect something outside the component, such as:

- Fetching data from an API.
- Subscribing to a service or event.
- Manipulating the DOM.
- Setting up timers.

The `useEffect` hook replaces the lifecycle methods found in class components (`componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`).

#### Basic Syntax of `useEffect`

```jsx
useEffect(() => {
    // Code to run on component mount or state change
}, [dependencies]);
```

- The first argument is a **function** containing the side-effect logic.
- The second argument is an **array of dependencies**. If any of the dependencies change, the effect will run again.

#### Example: Basic `useEffect` Usage

```jsx
import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []); // Empty dependency array ensures effect runs only once (componentDidMount)

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Data</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}
```

In this example:

- **`useEffect`** fetches data from an API when the component mounts (similar to `componentDidMount` in class components).
- The empty dependency array `[]` means the effect runs only once after the initial render.

---

### 3. Cleanup with `useEffect`

Sometimes, you need to clean up after an effect, such as clearing timers or unsubscribing from an event. You can return a **cleanup function** from `useEffect`.

#### Example: Cleanup in `useEffect`

```jsx
import React, { useEffect, useState } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        // Cleanup function to clear the interval
        return () => {
            clearInterval(timerId);
        };
    }, []); // Runs once, equivalent to componentDidMount

    return <h1>Seconds: {seconds}</h1>;
}
```

In this example:

- A timer is set using `setInterval` in the `useEffect` hook.
- The **cleanup function** returned from `useEffect` clears the interval when the component is unmounted or before the effect is re-run.

---

### 4. Conditional Execution of `useEffect`

By specifying **dependencies**, you can control when the `useEffect` hook runs:

- If the dependency array is empty `[]`, the effect runs only once when the component mounts.
- If the array contains values (e.g., `[prop, state]`), the effect runs when any of those values change.

#### Example: Conditional `useEffect`

```jsx
import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]); // Runs whenever count changes

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}
```

In this example:

- The effect runs only when the `count` state changes, and it updates the document title with the current count.

---

### 5. Use Case Examples of `useEffect`

- **Fetching data on mount:**
    
    ```jsx
    useEffect(() => {
      fetchData();
    }, []);  // Runs once after component mount
    ```
    
- **Subscribing to an event:**
    
    ```jsx
    useEffect(() => {
      const handleResize = () => {
        console.log('Window resized');
      };
      window.addEventListener('resize', handleResize);
    
      // Cleanup on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); // Runs once
    ```
    
- **Setting up a timer:**
    
    ```jsx
    useEffect(() => {
      const timer = setInterval(() => {
        console.log('Timer ticked');
      }, 1000);
    
      return () => clearInterval(timer);  // Cleanup on unmount
    }, []);
    ```
    

---

### Summary of `useEffect`

|**Feature**|**Description**|**Example**|
|---|---|---|
|**Basic usage**|Handles side effects like fetching data, setting up timers, etc.|`useEffect(() => { fetchData(); }, []);`|
|**Dependencies**|Array of values that the effect depends on.|`useEffect(() => { console.log(count); }, [count]);`|
|**Cleanup function**|Cleans up after effects (e.g., clearing timers).|`return () => { clearInterval(timer); }`|
|**Conditional execution**|Control when the effect runs by setting dependencies.|`useEffect(() => { console.log('Mounted!'); }, []);`|

---

### Conclusion

- **`useEffect`** is a powerful hook for managing side effects in functional components.
- It allows you to **fetch data**, **subscribe to events**, and handle **cleanups** in a declarative way.
- By using the dependency array, you can control when the effect should run, making it highly flexible and efficient.

---
# References

- https://www.freecodecamp.org/news/react-lifecycle-methods-and-hooks-for-beginners/
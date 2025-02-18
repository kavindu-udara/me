---
date : 2024-12-01T21:35:23+05:30
draft : false
title : Conditional Rendering in React
---

Conditional rendering allows components to decide what to display based on certain conditions. React provides several ways to implement conditional rendering, making it easy to display different UI elements based on the state or props of a component.

---

### 1. Using `if-else` Statements

You can use standard JavaScript `if-else` statements for conditional rendering within a component. Typically, you would do this outside of the JSX return statement, such as within the render function or directly before the return.

#### Example: Using `if-else`

```jsx
function Greeting({ isLoggedIn }) {
    let message;
    
    if (isLoggedIn) {
        message = <h1>Welcome Back!</h1>;
    } else {
        message = <h1>Please Sign In</h1>;
    }

    return <div>{message}</div>;
}
```

In this example, `if-else` is used to set the value of `message` based on the `isLoggedIn` prop, which is then rendered inside the component.

---

### 2. Using Ternary Operators

A **ternary operator** is a shorthand for `if-else` and is commonly used for inline conditional rendering within JSX. It has the following syntax:

```jsx
condition ? expression_if_true : expression_if_false;
```

#### Example: Using Ternary Operator

```jsx
function Greeting({ isLoggedIn }) {
    return (
        <div>
            {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Sign In</h1>}
        </div>
    );
}
```

In this example, if `isLoggedIn` is `true`, "Welcome Back!" is rendered; otherwise, "Please Sign In" is shown. Ternary operators are great for simple conditions.

---

### 3. Using `&&` (Logical AND) Operator

The `&&` (logical AND) operator can be used for conditional rendering when you want to display something only if a condition is `true`. This is useful for scenarios where you only want to render an element when a certain condition holds.

#### Example: Using `&&` Operator

```jsx
function Notification({ message }) {
    return (
        <div>
            {message && <p>{message}</p>}
        </div>
    );
}
```

In this example, the paragraph will only be rendered if `message` is truthy. If `message` is `null` or `undefined`, nothing will be displayed.

---

### 4. Conditional Rendering Based on Multiple Conditions

You can also combine `if-else`, ternary operators, and `&&` logic for more complex conditions.

#### Example: Multiple Conditions

```jsx
function UserStatus({ user }) {
    return (
        <div>
            {user ? (
                user.isAdmin ? (
                    <h1>Welcome, Admin!</h1>
                ) : (
                    <h1>Welcome, {user.name}!</h1>
                )
            ) : (
                <h1>Please log in</h1>
            )}
        </div>
    );
}
```

In this example, multiple conditions are checked using nested ternary operators to display different messages based on whether the user is logged in and whether they are an admin.

---

### Summary of Conditional Rendering Methods

|**Method**|**Use Case**|**Example**|
|---|---|---|
|**`if-else`**|For more complex conditions or multiple branches|`if (isLoggedIn) { return <h1>Welcome!</h1>; } else { return <h1>Please Sign In</h1>; }`|
|**Ternary Operator**|Inline conditionals, simpler cases|`{isLoggedIn ? <h1>Welcome!</h1> : <h1>Please Sign In</h1>}`|
|**`&&` (Logical AND)**|When you want to render something only if a condition is true|`{isLoggedIn && <h1>Welcome!</h1>}`|

---

### Best Practices

- Use **ternary operators** for simple conditions, especially within JSX.
- Use **`&&`** for conditional rendering when you only want to render an element when a condition is true.
- For more complex logic, prefer **`if-else` statements** outside of JSX.

By using these techniques, you can conditionally render content in React based on various states, props, or conditions, enabling dynamic and interactive user interfaces.

---
# References

- https://www.w3schools.com/react/react_conditional_rendering.asp
- https://legacy.reactjs.org/docs/conditional-rendering.html
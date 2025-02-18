---
date : 2024-12-01T20:54:27+05:30
draft : false
title : React Virtual DOM
---

- The **Virtual DOM (VDOM)** is a lightweight in-memory representation of the real DOM.
- React uses the VDOM to manage updates efficiently without directly manipulating the real DOM.

---
### Key Concepts

- The actual structure rendered in the browser.
- Updating it is slow because it triggers reflows and repaints.

---
### How the Virtual DOM Works

- **Initial Render**:
    - React creates a VDOM representation of the UI.
    - The VDOM is then used to create the real DOM for the browser.
- **Updating State or Props**:
    - React creates a new VDOM tree based on the updated state/props.
    - It compares the new VDOM tree with the previous one (a process called **diffing**).
    - Only the differences (changes) are applied to the real DOM.
- **Efficient Updates**:
    - React batches multiple updates and applies them in one operation to minimize performance costs.

---

### Benefits of the Virtual DOM

- **Performance**:
    - Reduces direct interactions with the real DOM.
    - Optimizes updates by calculating the smallest number of changes.
- **Declarative UI**:
    - Developers focus on what the UI should look like, and React handles how to update the DOM.
- **Cross-Browser Compatibility**:
    - React abstracts browser-specific quirks in DOM manipulation.

---

### Real-Life Analogy

- Think of updating the DOM like editing a book.
- Instead of rewriting the entire book (real DOM), React keeps a draft copy (virtual DOM), compares the draft with the original, and only updates the changed parts.

---

### Virtual DOM Diffing Algorithm

- **Tree Comparison**: React compares the new VDOM tree with the old one.
- **Key-Based Optimization**:
    - Keys in lists help React identify moved or updated elements efficiently.
- **Minimal Updates**:
    - React calculates and applies only the minimal required changes to the real DOM.

---
### Example

```jsx
function App() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
```

When the button is clicked:

1. React updates the state (`count`).
2. React creates a new VDOM tree for `<App />`.
3. It compares the new tree with the old one.
4. Only the `<p>` element is updated in the real DOM.

---
### Summary

The Virtual DOM is a powerful feature of React that:

- Improves performance.
- Simplifies the UI development process.
- Provides a smooth and efficient user experience.

---
# References

- https://www.freecodecamp.org/news/what-is-the-virtual-dom-in-react/
- https://legacy.reactjs.org/docs/faq-internals.html
- https://www.geeksforgeeks.org/reactjs-virtual-dom/
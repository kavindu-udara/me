---
date : 2024-12-01T20:41:07+05:30
draft : false
title : React Reusable Components
---

- Reusable components are building blocks of a React application designed to be reused in multiple places.
- They promote modularity, maintainability, and efficiency.

---
### Key Benefits

- **Code Reusability**: Write once, use multiple times.
- **Consistency**: Maintain consistent design and behavior across the app.
- **Ease of Maintenance**: Updates to a component reflect across all its instances.
- **Efficiency**: Reduces the need for duplicate code.

---
### Best Practices for Creating Reusable Components

- **Single Responsibility Principle**: Each component should have one clear purpose.
- **Props**: Use props to make components configurable and dynamic.
- **Composition Over Inheritance**: Combine smaller components to build larger ones.
- **Avoid Hardcoding**: Parameterize data through props instead of hardcoding values.
- **Styling Flexibility**: Use CSS modules, styled-components, or className props for flexible styling.
- **Granularity**: Balance between too granular (many small components) and too monolithic (large components).

---
### Examples of Reusable Components

1. Button

```jsx
const Button = ({ onClick, children, style }) => (
    <button onClick={onClick} style={style}>
        {children}
    </button>
);
```

2. Input Field

```jsx
const Input = ({ type, value, onChange, placeholder }) => (
    <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
    />
);

```

3. Card

```jsx
const Card = ({ children, style }) => (
    <div style={{ ...defaultStyle, ...style }}>
        {children}
    </div>
);

const defaultStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "5px",
};

```

---
### Tips

- **Test Components**: Ensure each component works in isolation.
- **Prop Validation**: Use `PropTypes` or TypeScript for better validation and type safety.
- **Document Components**: Add comments or maintain documentation to explain usage.

---
# References

- https://www.freecodecamp.org/news/how-to-build-reusable-react-components/
- https://buttercms.com/blog/building-reusable-components-using-react/
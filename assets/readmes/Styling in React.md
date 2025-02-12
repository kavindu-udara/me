---
date : 2024-12-01T21:42:01+05:30
draft : false
title : Styling in React
---

In React, styling can be done in multiple ways depending on your preferences and the requirements of the project. You can use inline styles, external CSS, CSS Modules, or even CSS-in-JS solutions like **Styled Components** and utility-first frameworks like **Tailwind CSS**. This note will explore these approaches and when to use each.

---

### 1. Inline Styles vs External CSS vs CSS Modules

#### 1.1 Inline Styles

Inline styles are applied directly within a component using a JavaScript object. Each style property is written in camelCase instead of hyphenated format.

**Advantages**:

- Simple and quick for small styles or individual components.
- Styles are scoped to the component, preventing accidental global styles.

**Disadvantages**:

- Not ideal for complex styles or media queries.
- Limited to basic styles and does not support pseudo-classes like `:hover` or `:focus`.

#### Example of Inline Styles:

```jsx
function MyComponent() {
    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px',
        borderRadius: '5px'
    };

    return <button style={buttonStyle}>Click Me</button>;
}
```

#### 1.2 External CSS

External CSS is the traditional way of styling websites. You create a `.css` file, and then link it to your React component by importing it. This approach is great for global styles and standard CSS features like pseudo-classes, media queries, and more.

**Advantages**:

- Good for global styles and shared styles between components.
- Easier to maintain for larger projects.

**Disadvantages**:

- Global scope can lead to unintended side effects (i.e., styles affecting unrelated components).
- No automatic scoping of styles, which can lead to conflicts.

#### Example of External CSS:

1. **Create a CSS file** (`styles.css`):

```css
/* styles.css */
.button {
    background-color: blue;
    color: white;
    padding: 10px;
    border-radius: 5px;
}
```

2. **Import and use in a React component**:

```jsx
import './styles.css';

function MyComponent() {
    return <button className="button">Click Me</button>;
}
```

#### 1.3 CSS Modules

CSS Modules help in **scoping CSS locally** to the component, meaning styles are applied only to the specific component and won't interfere with other components. They use a unique class name behind the scenes to prevent style conflicts.

**Advantages**:

- Localized styling, meaning styles are scoped to the component.
- Prevents class name conflicts.

**Disadvantages**:

- Can become verbose if not structured well.
- Requires an additional setup (though this is done automatically in most React build tools).

#### Example of CSS Modules

1. **Create a CSS Module file** (`MyComponent.module.css`):

```css
/* MyComponent.module.css */
.button {
    background-color: blue;
    color: white;
    padding: 10px;
    border-radius: 5px;
}
```

2. **Import and use the CSS Module in the component**:

```jsx
import styles from './MyComponent.module.css';

function MyComponent() {
    return <button className={styles.button}>Click Me</button>;
}
```

---

### 2. Introduction to Styling Libraries

#### 2.1 Styled Components (CSS-in-JS)

**Styled Components** is a popular **CSS-in-JS** library that allows you to write CSS directly in your JavaScript/JSX files. It provides the benefit of scoped styling (like CSS Modules), but also supports more dynamic styles by utilizing JavaScript to control the style based on props or state.

**Advantages**:

- Styles are scoped to the component by default.
- Supports dynamic styles based on props or state.
- Full access to JavaScript logic in styling (e.g., conditional styles).

**Disadvantages**:

- May add some overhead for small projects.
- Can result in larger JavaScript bundles due to the CSS-in-JS runtime.

#### Example of Styled Components:

1. **Install Styled Components**:

```bash
npm install styled-components
```

2. **Usage in a Component**:

```jsx
import styled from 'styled-components';

const Button = styled.button`
    background-color: blue;
    color: white;
    padding: 10px;
    border-radius: 5px;

    &:hover {
        background-color: darkblue;
    }
`;

function MyComponent() {
    return <Button>Click Me</Button>;
}
```

In this example, the `Button` component is styled using `styled-components`, and the styles are applied only to that component.

---

#### 2.2 Tailwind CSS

**Tailwind CSS** is a utility-first CSS framework that provides low-level utility classes to build custom designs. It’s often used with React to create fast and responsive UIs without writing custom CSS.

**Advantages**:

- Fast to develop with, as it avoids the need to write custom CSS.
- Encourages reusable and consistent styles with utility classes.
- Built-in responsive design and other common design patterns.

**Disadvantages**:

- May result in long class names in JSX, which can be harder to read.
- Over-reliance on utility classes can lead to repetitive code.

#### Example of Tailwind CSS:

1. **Install Tailwind CSS**:

```bash
npm install tailwindcss
npx tailwindcss init
```

2. **Setup and use in your React component**:

```jsx
function MyComponent() {
    return (
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Click Me
        </button>
    );
}
```

In this example, Tailwind utility classes are used to style the `button` element with background color, text color, padding, rounded corners, and a hover effect.

---

### Summary of Styling in React

|**Method**|**Advantages**|**Disadvantages**|
|---|---|---|
|**Inline Styles**|Quick to implement, scoped to component|Limited features (no pseudo-classes), not ideal for complex styles|
|**External CSS**|Great for global styles and easy to maintain|Global scope can lead to conflicts, no automatic scoping|
|**CSS Modules**|Scoped to components, prevents style conflicts|Requires extra setup, can become verbose|
|**Styled Components (CSS-in-JS)**|Scoped styles, dynamic styling based on props or state|Can add overhead, larger bundle sizes|
|**Tailwind CSS**|Fast development, utility classes for consistent design|Long class names in JSX, can result in repetitive code|

---

### Conclusion

- **Inline styles** are useful for simple, scoped styling but are limited for complex scenarios.
- **External CSS** is great for global styles but can cause conflicts in larger projects.
- **CSS Modules** provide scoped styles without the global leakage of external CSS.
- **Styled Components** offer powerful, dynamic styling capabilities within React using JavaScript.
- **Tailwind CSS** is an efficient utility-first CSS framework that speeds up development with a consistent design pattern.

Choosing the right approach depends on the project size, requirements, and preferences. For small projects, inline styles or external CSS might suffice, while larger projects may benefit from CSS Modules, Styled Components, or Tailwind CSS.

---
# References

- https://legacy.reactjs.org/docs/faq-styling.html
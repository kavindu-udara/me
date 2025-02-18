---
date: 2024-12-01T21:18:48+05:30
draft: false
title: What Is JSX TSX and How It Differs From HTML
---

- **JSX (JavaScript XML)**: A syntax extension for JavaScript used in React to describe the UI structure.
- **TSX (TypeScript XML)**: Similar to JSX but used in React projects with TypeScript for type safety.
- Both allow developers to write code that looks like HTML, but they are not HTML—they are syntactic sugar that gets transpiled into JavaScript.

---
### Key Differences Between JSX/TSX and HTML

|**Feature**|**JSX/TSX**|**HTML**|
|---|---|---|
|**Syntax**|Combines JavaScript/TypeScript with XML-like tags.|Pure markup language.|
|**Attributes**|Uses `camelCase` (e.g., `className`, `onClick`).|Uses standard HTML attributes (e.g., `class`, `onclick`).|
|**Dynamic Content**|Allows embedding of JavaScript expressions using `{}`.|Requires separate scripting with `<script>` tags.|
|**Rendering**|Transpiles to `React.createElement()` calls to render the DOM.|Directly rendered by the browser.|
|**Custom Components**|Supports reusable React components as tags.|Does not support custom tags unless extended by frameworks.|
|**Type Safety**|TSX supports type-checking for props and components.|HTML has no type-checking capabilities.|

---
### JSX/TSX Attributes and How to Use Them

1. Commonly Used Attributes
	- **className**: Replace `class` with `className` to define CSS classes.
	```jsx
	<div className="container">Hello, World!</div>
	```
	- **htmlFor**: Replace `for` with `htmlFor` in `<label>` tags.
	```jsx
	<label htmlFor="name">Name:</label>
	<input id="name" type="text" />
	```
	- **style**: Use a JavaScript object for inline styles.
	```jsx
	<div style={{ color: 'blue', fontSize: '18px' }}>Styled Text</div>
	```

2. Dynamic Content with `{}`
	- Embed JavaScript expressions inside curly braces:
	```jsx
	const name = "John";
	<h1>Hello, {name}!</h1> // Output: Hello, John!
	```

3. Event Handlers
	- Pass JavaScript functions to event attributes
	```jsx
	<button onClick={() => alert('Button clicked!')}>Click Me</button>
	```

4. Conditional Rendering
	- Use ternary operators or logical `&&` inside JSX
	```jsx
	const isLoggedIn = true;
	<p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
	```

5. Spreading Props
	- Spread attributes dynamically using the `...` operator
	```jsx
	const props = { id: "name", placeholder: "Enter your name" };
	<input {...props} />;
	```

6. TSX-Specific Features
	- Type-check props
	```tsx
	type ButtonProps = { label: string; onClick: () => void };
	const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
	  <button onClick={onClick}>{label}</button>
	);
	```

---

### Summary

- JSX/TSX provides a declarative, powerful way to describe UI with JavaScript/TypeScript.
- While it resembles HTML, key differences like `camelCase` attributes, dynamic expressions, and type safety make it much more flexible and suited for modern application development.

---
# References

- https://abhishekdhapare.hashnode.dev/jsx-vs-tsx-choosing-the-right-syntax-for-your-react-app
---
date : 2024-12-01T21:08:32+05:30
draft : false
title : Setting Up the Development Environment for React With Vite
---

### 1. Installing Node.js and npm

Node.js and npm (Node Package Manager) are prerequisites for creating and running React applications.

1. **Download and Install Node.js**:
	- Visit the [Node.js official website](https://nodejs.org).
	- Download the **LTS** version for stability.
	- Follow the installation instructions for your operating system.
2. **Verify Installation**:
	- Open a terminal and run the following commands:
```bash
node -v
npm -v
```

- These commands will display the installed versions of Node.js and npm.

---

### 2. Setting up a React Project

1. Install Vite
	Vite is a fast frontend build tool.
	- Open a terminal and run
```bash
npm create vite@latest my-react-app --template react
```
	
	- Replace `my-react-app` with your desired project name.

2. **Navigate to the Project Directory**:
```bash
cd my-react-app
```

3. **Install Dependencies**
	Run the following command to install all the dependencies
	```bash
	npm install
	```

4. **Run the Development Server**
	Start the Vite development server to preview your app
	```bash
	npm run dev
	```

	- The terminal will display a URL (e.g., `http://localhost:5173`) where you can view your app in the browser.

---
### 3. Overview of the Project Folder Structure

Once the setup is complete, your project folder will look like this:

```perl
my-react-app/
├── node_modules/           # Installed npm packages
├── public/                 # Static assets (e.g., images, icons)
│   └── vite.svg            # Default Vite logo
├── src/                    # Source code of your application
│   ├── App.css             # Styles for the App component
│   ├── App.jsx             # Main React component
│   ├── main.jsx            # Entry point for the application
│   └── index.css           # Global styles
├── .gitignore              # Files and folders to ignore in Git
├── package.json            # Project metadata and dependencies
├── vite.config.js          # Configuration file for Vite
└── README.md               # Project documentation
```

**Key Files and Folders**:

- **`src/main.jsx`**: Entry point for your React app. It renders the root component (`App.jsx`).
- **`src/App.jsx`**: Default React component created by Vite. Customize this file to start building your app.
- **`public/`**: Store static assets like images or fonts.
- **`package.json`**: Manages dependencies, scripts, and project metadata.
- **`vite.config.js`**: Customize the build tool's behavior (e.g., plugins, server options).

---
# References

- https://vite.dev/guide/
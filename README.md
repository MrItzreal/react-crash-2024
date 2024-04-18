## How to Start a Project on React + Vite + Tailwind CSS

This guide will walk you through setting up a new React project using Vite & Tailwind CSS which are blazing-fast development tools.

**Prerequisites:**

- Node.js (check installation with `node -v` in your terminal)

**Project Setup:**

1. **Create a new project:**

   ```bash
   npm create vite@latest [project-name]
   ```

   Replace `[project-name]` with your desired project name.

2. **Select Framework and Variant:**

   Choose React as the framework and JavaScript as the variant during the prompts if you are only using Vanilla JS along with React.

3. **Navigate and Install Dependencies:**

   ```bash
   cd [project-name]
   npm install
   ```

   This installs the necessary dependencies for your React project.

4. **Start Development Server:**

   ```bash
   npm run dev
   ```

   This will start the development server, usually accessible at `http://localhost:5173/` (the port may vary).

**Optional Configurations:**

- **Server Port:**

  Vite uses a random port by default. You can optionally change it to `3000` (or any preferred port) by editing the `vite.config.js` file. Refer to the React Crash-2024 project for guidance if needed.

- **Tailwind CSS:**

  1.  Follow the official Tailwind documentation for Vite integration: [Search Tailwind CSS with Vite ON tailwindcss.com]
  2.  Install dependencies:

      ```bash
      npm install -D tailwindcss postcss autoprefixer
      ```

  3.  Generate Tailwind configuration files:

      ```bash
      npx tailwindcss init -p
      ```

  4.  Configure `tailwind.config.js` and `index.css` by copying the relevant code snippets from Tailwind's documentation (sections #3 and #4).

**Notes:**

- Feel free to delete `App.css` if you're using Tailwind CSS.
- Clear the content of `App.jsx` and `index.css` as they'll house your main component and styles.

## Project Dependencies

This document outlines the Node Package Manager (NPM) dependencies used in this project.

### Important Packages

- **react-router-dom:** Provides routing functionalities for navigating between different pages within your React application. You can install it using:

```bash
npm i react-router-dom
```

### Useful Packages

- **react-icons:** Enables the usage of icons from popular icon libraries like Font Awesome. Install it with:

```bash
npm i react-icons
```

- **react-spinners:** Offers a variety of loading spinner components to enhance user experience. Install it using:

```bash
npm i react-spinners
```

- **react-toastify:** Provides notification functionality. Refer to the `MainLayout` component for setup instructions after installation:

```bash
npm i react-toastify
```

### Development Dependency

- **json-server** (dev dependency): A lightweight JSON server for creating a mock API. Install it for development purposes with the `-D` flag:

```bash
npm i -D json-server
```

**Note:**

- Remember to add `json-server` to your `package.json` file before running the server.
- Start the mock server using:

```bash
npm run server
```

This guide provides a basic setup for a React + Vite project with optional Tailwind CSS integration. Remember to consult the official documentation for further customization and advanced features.

# Chapter 08 - Jo Dikhta Hai, Vo Bikta Hai

## Q: Explore all the ways of writing CSS

A: In a React app, there are several ways to write CSS to style your components. Here are the most common methods:

1. `Inline Styles`:
   We can use inline styles directly within JSX elements using the style attribute. Styles are written as objects with camel-cased property names and values as strings. Example:

   ```JSX
   const MyComponent = () => {
     const myStyle = {
       color: 'blue',
       fontSize: '16px',
       fontWeight: 'bold',
     };
     return <div style={myStyle}>This is a styled div</div>;
    };
   ```

2. `Internal CSS with CSS Modules`:
   You can write CSS in separate files and import them into your components using CSS Modules. This allows you to scope styles to individual components, preventing conflicts. Example:

   ```CSS
   /* styles.module.css */
   .myButton {
     background-color: green;
     color: white;
     padding: 10px 20px;
     border: none;
     border-radius: 4px;
   }
   ```

   ```JSX
     // MyComponent.js
     import React from 'react';
     import styles from './styles.module.css';

     const MyComponent = () => {
       return <button className={styles.myButton}>Click me</button>;
     };
   ```

3. `Styled Components`:
   Styled Components is a popular library that allows you to write CSS directly inside your JavaScript components using template literals. This creates a new React component with the specified styles. Example:

   ```JSX
   import React from 'react';
   import styled from 'styled-components';

   const Button = styled.button`
     background-color: blue;
     color: white;
     padding: 10px 20px;
     border: none;
     border-radius: 4px;
   `;

   const MyComponent = () => {
     return <Button>Click me</Button>;
   };
   ```

4. `MUI (Material-UI)`:
   MUI is a popular React UI framework that comes with its own styling solution. It provides a set of pre-styled components that follow the Material Design guidelines. We can customize the styles using theme objects or use their built-in classes and utility functions.

5. `Tailwind CSS`:
   Tailwind CSS is a utility-first CSS framework that allows us to quickly build complex UI designs by composing small utility classes. It's not directly tied to React but can be used in React projects to style components by applying various utility classes.

### Configure `Tailwind Css`

1. `INSTALL TAILWIND CSS`
   Install `tailwindcss` and its peer dependencies via npm, and then run the init command to generate `tailwind.config.js`.

   ```sh
     npm install -D tailwindcss postcss
     npx tailwindcss init
   ```

2. `Configure PostCSS`
   Create a `.postcssrc` file in your project root, and enable the `tailwindcss` plugin.

   ```.postcssrc
     {
       "plugins": {
       "tailwindcss": {}
       }
     }
   ```

3. `Configure your template paths`
   Add the paths to all of your template files in your `tailwind.config.js` file.

   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

4. `Add the Tailwind directives to your CSS`
   Create a `./src/index.css` file and add the `@tailwind` directives for each of Tailwind’s layers.

   ```CSS
     @tailwind base;
     @tailwind components;
     @tailwind utilities;

   ```

5. Start using Tailwind in your project.

## Customize the configuration of Tailwind CSS

In the `tailwind.config.js` file, `content`, `theme`, `extend`, and `plugins` are key sections used to customize the configuration of Tailwind CSS. Here's what each of them means:

**`content`**:
The `content` key allows you to specify the `files` that Tailwind CSS should `scan` to find classes used in your project. By default, Tailwind CSS scans your project's HTML, JSX, or Vue files to extract the classes. You can add additional files or directories to be scanned here. For example:

```js
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.vue"],
  // Other Tailwind CSS configurations...
};
```

`theme`:
The `theme` key is used to `customize` the default design system and styling values of Tailwind CSS. You can override various properties such as colors, fonts, spacing, and more. By modifying the theme object, you can create a unique visual style for your application. For example:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#FF6347",
      },
      fontFamily: {
        custom: ["Roboto", "sans-serif"],
      },
      // Other customizations...
    },
  },
};
```

`extend`:
The `extend` key is used to add or `override` the existing styles provided by Tailwind CSS. This is useful when you want to add custom utility classes or extend existing ones with new properties. For example, if you want to add a new font size to the existing set:

```js
module.exports = {
  extend: {
    fontSize: {
      "4xl": "2.5rem",
    },
    // Other extensions...
  },
};
```

`plugins`:
The `plugins` key allows you to include `additional plugins` to `extend` Tailwind CSS's functionality. Plugins can provide custom utilities, components, or other features. To use a plugin, you need to require it as a package and add it to the plugins array. For example:

```js
const myPlugin = require("path/to/my/plugin");

module.exports = {
  plugins: [
    myPlugin,
    // Other plugins...
  ],
};
```

## Why do we have `.postcssrc` file

`PostCSS` is a versatile tool that allows you to transform CSS using JavaScript through a series of plugins. This flexibility makes it ideal for seamlessly integrating with the tailwindcss processing steps by leveraging the `tailwindcss` PostCSS plugin.

By utilizing JavaScript, PostCSS converts your CSS into an abstract syntax tree (AST). This tree-like representation of the CSS provides an accessible API, enabling developers to analyze and modify it programmatically using JavaScript plugins.

In essence, PostCSS acts as a powerful bridge between CSS and JavaScript, empowering developers to apply transformations, optimizations, and customizations to their CSS code efficiently and effectively. The `tailwindcss` PostCSS plugin is just one example of how PostCSS can be leveraged to enhance CSS workflows and enable rich and dynamic CSS processing.

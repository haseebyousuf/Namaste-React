# Chapter 11 - Data Is The New Oil

## Q: Prop Drilling

A: `Prop drilling` occurs when you have a `hierarchy` of components, and you need to pass data (props) from the `top-level component` through intermediate components to reach a `deeply nested component` that requires that data. Each intermediate component doesn't use the prop itself but only passes it down to its children. It can lead to code that is harder to maintain and understand, especially in large projects with deeply nested components.

![prop-drilling](https://blog.logrocket.com/wp-content/uploads/2021/10/react-prop-drilling-dashboard-example.png)

## Lifting State Up

A: In React, components can have their own local state, which is only accessible within that specific component. However, sometimes, multiple components need access to the same data or need to stay in sync with changes made to that data. Lifting state up refers to the process of moving the shared state to the closest common ancestor of those components in the component tree, making it accessible to all of them.
Lifting state up is necessary to establish a single source of truth for shared data. When multiple components need to access or modify the same data, keeping that data at a higher level in the component tree ensures consistency and prevents data duplication.

```JSX
  // ParentComponent.js
  import React, { useState } from 'react';
  import ComponentA from './ComponentA';
  import ComponentB from './ComponentB';

  const ParentComponent = () => {
    const [count, setCount] = useState(0);

    return (
      <div>
        <ComponentA count={count} setCount={setCount} />
        <ComponentB count={count} setCount={setCount} />
      </div>
    );
  };


  // ComponentA.js
  import React from 'react';

  const ComponentA = ({ count, setCount }) => {
    const increment = () => {
      setCount(count + 1);
    };

    return (
      <div>
        <p>Component A Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
  };

  // ComponentB.js
  import React from 'react';

  const ComponentB = ({ count, setCount }) => {
    const decrement = () => {
      setCount(count - 1);
    };

    return (
      <div>
        <p>Component B Count: {count}</p>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  };
```

## React Context

- Context is designed to `solve the problem of prop drilling`, where we have to pass props through multiple intermediate components just to get data from the top-level component to a deeply nested one.
- Context is a feature that allows us to pass data through the component tree without having to pass props manually at every level.
- It provides a way to `share` state or data between components that are not directly related in the component hierarchy.
- It is a `global state` that can be accessed from any component in the component tree.

### Creating a Context

- We can create a context using the `createContext()` method from the React library.
- The `createContext()` method returns an object with two properties: `Provider` and `Consumer`.
- The `Provider component` is used to wrap the components that need access to the context.
- The `Consumer component` is used to access the context from within a component.

```JSX
  // ThemeContext.js
  import { createContext } from 'react';

  const ThemeContext = createContext(defaultValue);

  export default ThemeContext;
```

### Providing a Context

- The Provider component is used to `wrap the components that need access to the context`.
- The Provider component accepts a value prop that is used to pass the data to the components that need it.
- The value prop can be any data type, such as a string, number, array, or object.
- If the value prop is not provided, then it will use the default value given in createContext and if that value is also not present, then the default value is `undefined`.

```JSX
  // App.js
  import React from 'react';
  import ThemeContext from './ThemeContext';
  import ComponentA from './ComponentA';
  import ComponentB from './ComponentB';

  const App = () => {
    const theme = 'dark';

    return (
      <ThemeContext.Provider value={theme}>
        <ComponentA />
        <ComponentB />
      </ThemeContext.Provider>
    );
  };
```

### Consuming a Context

- The Consumer component is used to `access the context from within a component`.
- The Consumer component accepts a `function` as a child, which receives the context value as an argument.
- The Consumer component can be used multiple times within a component to access different contexts.

```JSX
  // ComponentA.js
  import React from 'react';
  import ThemeContext from './ThemeContext';

  const ComponentA = () => {
    return (
      <ThemeContext.Consumer>
        {(theme) => <p>Current theme: {theme}</p>}
      </ThemeContext.Consumer>
    );
  };
```

### Consuming Context with useContext Hook

- The useContext hook can be used to `consume a context`.
- The useContext hook accepts a context object as an argument and returns the context value.
- The useContext hook can be used multiple times within a component to access different contexts.

```JSX
  // ComponentA.js
  import React, { useContext } from 'react';
  import ThemeContext from './ThemeContext';

  const ComponentA = () => {
    const theme = useContext(ThemeContext);

    return <p>Current theme: {theme}</p>;
  };
```

### Updating a Context

- The Provider component can be used to update the context value.
- The Provider component accepts a `value prop` that is used to pass the data to the components that need it.
- The value prop can be any data type, such as a string, number, array, or object.
- When the `value prop is updated`, the Provider `component re-renders` all the components that are consuming the context.

```JSX
  // App.js
  import React, { useState } from 'react';
  import ThemeContext from './ThemeContext';
  import ComponentA from './ComponentA';
  import ComponentB from './ComponentB';

  const App = () => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
      <ThemeContext.Provider value={theme}>
        <ComponentA />
        <ComponentB />
        <button onClick={toggleTheme}>Toggle Theme</button>
      </ThemeContext.Provider>
    );
  };
```

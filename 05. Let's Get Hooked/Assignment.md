# Chapter 05 - Let's get Hooked!

## Q: What is the difference between `Named export/import`, `Default export/import`, and `* as export/import`?
A: ES6 provides three ways to export/import a module from a file: `default export/import`, `named export/import` and `Export/Import All`.

* `Default Export/Import:`
  - Default export allows you to export a single value, function, or component as the default export of a module.
  - When using default export, you use the export default statement followed by the value, function, or component you want to export.
     ```
      export default myComponent;
    ```
  - To import the default export of a module, you can use import statement followed by the module's path
    ```
      import myComponent from './path';
    ```

* `Named Export/Import:`
  - Named exports allow you to export multiple values, functions, or components from a module using specific names.
  - When using named exports, you need to specify the names of the exports within the export statement.
     ```
      export const myVariable = 42;
      export const myComponent = () => { /* code */ }
    ```
  - To import named exports, you must explicitly specify the names of the exports you want to import within curly  braces {} in the import statement.
    ```
      import { myVariable, myComponent } from './path';
    ```

* `Export/Import All:`
  - Using * as export allows you to export all exports from a module as properties of a namespace object.
  - The export * statement is used to export all the exports from a module.
    ```
      export * from './otherModule';
    ```
  - To import all exports from a module using *, you use the `import * as` statement followed by a variable name, which will hold the namespace object containing all the exported values, functions, or components.
    ```
      import * as myModule from './path';
    ```



## Q: What is the importance of `config.js` file?
A: `config.js` files are essentially editable text files that contain information required for the successful operation of a program. The files are structured in a particular way, formatted to be user configurable.
Most of the computer programs we use: whether office suites, web browsers, even video games are configured via menu interfaces.
Configuration files are very simple in structure. For instance, if you were to write an application, and the only thing it ever needed to know was its user's preferred name, then its one and only config file could contain exactly one word: the name of the user. For example:
```
Chetan
```
Usually, though, an application needs to keep track of more than just one piece of information, so configuration often uses a key and a value:
```
NAME='Chetan'
SURNAME='Nada'
```

## Q: What are `React Hooks`?
A: React Hooks are a feature introduced in React 16.8 that are `simple JavaScript functions`. They allow you to use `state`, `lifecycle methods`, and other React features without writing a class. Hooks provide a simpler and more concise way to manage component state and reuse logic.

Before React Hooks, stateful logic and lifecycle methods were mainly handled by class components. However, this led to a lot of boilerplate code and made it harder to reuse and share logic between components. Hooks address these issues by enabling functional components to have their own state and lifecycle management.

### React provides a bunch of standard in-built hooks:
- useState: To manage states. Returns a stateful value and an updater function to update it.
- useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
- useContext: To return the current value for a context.
- useReducer: A useState alternative to help with complex state management.
- useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
- useMemo: It returns a memoized value that helps in performance optimizations.
- useRef: It returns a ref object with a current property. The ref object is mutable. It is mainly used to access a child component imperatively.
- useLayoutEffect: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
- useDebugValue: Helps to display a label in React DevTools for custom hooks.


## Q: Why do we need `useState Hook`?
A: The `useState hook` is a built-in hook in React that allows `functional components to have state`. It provides a simple way to add and manage state within a functional component without the need for a class.

#### Importing Syntax for useState hook
To use the useState hook, you need to import it from the 'react' library. The syntax to use useState is as follows:
```
import React, { useState } from 'react';
```

#### Initializing State:
- The useState hook is called within the functional component to initialize state. It takes an initial value as its argument and `returns an array with two elements`:
- The `first element` is the `current state value`, which is usually assigned to a variable.
- The `second element` is a `function used to update the state`.

```
const [state, setState] = useState(initialValue);
```

- In the example above, state represents the current state value, and setState is the function used to update that state.

#### State Updates:
- To update the state, you call the state update function (setState) and pass the new value.
- React will re-render the component and update the UI to reflect the new state value.

```
setState(newValue);
```

- It's important to note that state updates with useState `replace` the old value with the new value, rather than merging the changes like `this.setState()` in class components.

#### Functional Updates:
- The state update function returned by useState can also accept a `function as an argument`. This allows you to perform updates based on the previous state value.
- By using functional updates, you ensure that the state value used in the update is the most up-to-date value at the time the update is applied.
- This is important because state updates in React are `asynchronous` and may not immediately reflect the latest value when using the regular state update syntax.

```
setState(prevState => newState);
```

- By using a functional update, you guarantee that the prevState value is the most recent count when the update is applied.
- This is particularly important when multiple state updates are triggered in `quick succession`, ensuring that each update is based on the latest state value.


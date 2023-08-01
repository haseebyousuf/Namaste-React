# Chapter 12 - Let's Build Our Store

## Redux

Redux is a state management library that helps manage the state of a React application in a predictable and centralized way. It follows the principles of Flux architecture. Redux is based on three main concepts: the store, actions, and reducers.

### The Store

The store is a JavaScript object that holds the state of the application. It is the single source of truth for the application state. The store is created using the `createStore()` method from the Redux library.

```JSX
  import { createStore } from 'redux';

  const store = createStore();
```

### Actions

Actions are plain JavaScript objects that describe the changes in the state of the application. They are the only source of information for the store. Actions are created using the `dispatch()` method from the store.

```JSX
  store.dispatch({
    type: 'INCREMENT',
  });
```

### Reducers

Reducers are pure functions that take the current state and an action as arguments and return a new state. They are responsible for updating the state of the application. Reducers are passed to the store using the `createStore()` method.

```JSX
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      default:
        return state;
    }
  };

  const store = createStore(reducer);
```

## Difference between Redux and useContext

- Redux is a separate library, while useContext is part of React's built-in Context API.
- Redux follows a more structured and opinionated approach with a clear separation of concerns (store, actions, reducers), while useContext is more lightweight and flexible.
- Redux is generally used for larger applications with complex state management needs, whereas useContext is often used for simpler scenarios or when state needs to be shared among a few related components.

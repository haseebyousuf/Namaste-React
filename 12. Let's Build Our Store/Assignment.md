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

## Redux Toolkit

Redux Toolkit is the official recommended way to write Redux logic. It is a package that contains utilities to simplify common Redux use cases. It includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and even creating entire "slices" of state at once.
Redux Toolkit is used for writing redux code but in a more concise way. Redux Toolkit (RTK) solves three bigger problems that most of the developer’s face who used redux in a react application.

1. Too much code to configure the store.
2. Writing too much boilerplate code to dispatch actions and store the data in the reducer.
3. Extra packages like Redux-Thunk and Redux-Saga for doing asynchronous actions.

### Creating a Store

The `configureStore()` method from the Redux Toolkit library is used to create a store. It accepts a configuration object as an argument. The configuration object can have the following properties:

- `reducer`: A function that returns the root reducer.
- `middleware`: An array of middleware functions.
- `devTools`: A boolean value that enables the Redux DevTools Extension.

```JSX store.js
  import { configureStore } from '@reduxjs/toolkit';

  export const store = configureStore({
    reducer: {},
    middleware: [],
    devTools: true,
  });
```

### Providing store to React App

The `Provider` component from the React Redux library is used to provide the store to the React app. It accepts a store as a prop.

```JSX App.js
  import { Provider } from 'react-redux';
  import {store} form './store.js';

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
```

### Creating a Slice

The `createSlice()` method from the Redux Toolkit library is used to create a slice. It accepts a configuration object as an argument. The configuration object can have the following properties:

- `name`: A string that is used as the prefix for action types.
- `initialState`: An object that represents the initial state.
- `reducers`: An object that contains reducer functions.

```JSX slice.js
  import { createSlice } from '@reduxjs/toolkit';

  const initialState = {
    name: [],
    food: [],
  };

  const customerSlice = createSlice({
    // An unique name of a slice
    name: 'customer',
    // Initial state value of the reducer
    initialState,
    // Reducer methods
    reducers: {
      addCustomer: (state, action) => {
      state.name.push(action.payload);
      },

      orderFood: (state, action) => {
        state.food.push(action.payload);
      },
    },
  });

  // Action creators for each reducer method
  export const { addCustomer, orderFood } = customerSlice.actions;
  export default customerSlice.reducer;

```

Even though the above code, we use to push it doesn’t mutate the state value, since Redux toolkit uses `immer library` internally to update the state immutably.

Now, we import the reducer into the `store.js` file we created earlier. By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.

```js store.js
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slice.js";

export default configureStore({
  reducer: {
    customers: reducer,
  },
  middleware: [],
  devTools: true,
});
```

### accessing the store using useSelector

The `useSelector()` hook from the React Redux library is used to access the store. It accepts a selector function as an argument. The selector function can have the following arguments:

- `state`: The current state of the store.
- `getState`: A function that returns the current state of the store.
- `dispatch`: A function that dispatches an action.

```JSX
  import { useSelector } from 'react-redux';

  const App = () => {
    const customers = useSelector((state) => state.customers);
    return (
      <div>
        <h1>Customers</h1>
        <ul>
          {customers.map((customer) => (
            <li>{customer}</li>
          ))}
        </ul>
      </div>
    );
  };
```

### dispatching actions using useDispatch

The `useDispatch()` hook from the React Redux library is used to dispatch actions. It returns a dispatch function.

```JSX
  import { useDispatch } from 'react-redux';
  import { addCustomer } from './slice.js';

  const App = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
      dispatch(addCustomer('John'));
    };
    return (
      <div>
        <h1>Customers</h1>
        <button onClick={handleClick}>Add Customer</button>
      </div>
    );
  };
```

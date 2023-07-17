# Chapter 08 - Let's get Classy

## Q: How do you create `Nested Routes` react-router-dom configuration?

A: We can create a `Nested Routes` inside a react router configuration as follows:
first call createBrowserRouter for routing different pages

```JSX

const router = createBrowserRouter([
   {
      path: "/", // show path for routing
      element: <Parent />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children: [ // show children component for routing
         {
            path: "/path",
            element: <Child />
         }
      ],
   }
])
```

Now we can create a nested routing for `/path` using `children` again as follows:

```JSX

const router = createBrowserRouter([
   {
      path: "/",
      element: <Parent />,
      errorElement: <Error />,
      children: [
         {
            path: "/path",
            element: <Child />,
            children: [ // nested routing for subChild
               {
                  path: "/child",
                  element: <SubChild />,
               }
            ],
         }
      ],
   }
])
```

## Q: Read about `createHashRouter`, `createMemoryRouter` from React Router docs

A: `createHashRouter` is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the `hash (#)` portion of the URL to manage the "application URL".
Other than that, it is functionally the same as `createBrowserRouter`.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-hash-router)

`createMemoryRouter` Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-memory-router)

## What are the Life Cycle methods of a class component?

Lifecycle methods are special methods that are automatically called at different stages of a component's life cycle. These methods allow us to perform certain actions or implement specific behaviors during different phases of a component's existence. Here are some commonly used lifecycle methods in class-based components:

- `componentDidMount()`: This method is called immediately after the component is inserted into the DOM. It is commonly used to perform initialization tasks, fetch data from an API, or set up event listeners.
- `componentDidUpdate(prevProps, prevState)`: This method is invoked after a component has been updated and re-rendered. It receives the previous props and previous state as arguments, allowing you to compare them with the current props and state and perform side effects or additional updates if needed.
- `componentWillUnmount()`: This method is called right before a component is removed from the DOM. It is used to clean up resources, cancel ongoing network requests, or remove event listeners to prevent memory leaks.

## Explain the Component's Life Cycle

The component's lifecycle refers to the different stages or phases that a component goes through during its existence in a React application.
Here are the main stages in a component's lifecycle:

1. `MOUNTING`: This stage occurs when a component is being inserted into the DOM.
   Methods that are invoked in this stage: (In Sequence)

   - constructor()
   - render()
   - componentDidMount()

2. `UPDATING`: This stage occurs when a component's props or state changes, triggering a re-render.
   Methods that are invoked in this stage: (In Sequence)

   - render()
   - componentDidUpdate(prevProps, prevState)

3. `UNMOUNTING`: This stage occurs when a component is being removed from the DOM.
   Methods that are invoked in this stage:
   - componentWillUnmount()

The component's lifecycle provides hooks for performing actions and implementing specific behavior at different points in the component's existence. However, with the introduction of React Hooks, functional components offer an alternative and more flexible way to handle component logic and lifecycle-related tasks.

## Different Phases of Rendering Process

The rendering process consists of two distinct phases: the render phase and the commit phase. These phases are part of React's reconciliation algorithm, which determines what changes to apply to the DOM.

1. `Render Phase`:

   - In the render phase, React determines what updates need to be applied to the component's virtual DOM (also known as the "fiber tree") based on changes in props or state.
   - During this phase, React performs a `diffing` process, comparing the previous and current virtual DOM representations of the component to identify the minimal set of changes needed.
   - This phase includes calling the `render()` method and any other lifecycle methods that are triggered during updates, such as `componentDidUpdate()`.
   - The render phase is purely a "reconciliation" process and `doesn't make any changes to the actual DOM`.
   - It is important to note that React collects all the updates and performs a `single re-render` for the `component and its child components`. It `batches` these updates together instead of rendering each component separately.
   - By batching the updates, React `avoids unnecessary re-renders and DOM manipulations`.

2. Commit Phase:
   - Once the render phase is complete and the updates have been determined, React enters the commit phase.
   - In the commit phase, React `applies the updates to the actual DOM`, making the necessary changes visible to the user.
   - This phase includes operations such as inserting, updating, or deleting DOM nodes based on the changes identified during the render phase.

By splitting the rendering process into separate phases, React can optimize performance and improve the perceived responsiveness of the application. The render phase focuses on efficiently determining the necessary updates, while the commit phase handles the actual DOM manipulation and finalizing the component updates.

## Q: Why do we use `componentDidMount`?

A: The `componentDidMount()` method is called immediately after the component is inserted into the DOM. It is commonly used to perform initialization tasks, fetch data from an API, or set up event listeners.

## Q: Why do we use `componentWillUnmount`? Show with example

A: The `componentWillUnmount()` method is called right before a component is removed from the DOM. It is used to clean up resources, cancel ongoing network requests, or remove event listeners to prevent memory leaks.

## Q: What is the order of life cycle method calls in `Class Based Components`?

A: Following is the order of lifecycle methods calls in `Class Based Components`:

1. constructor()
2. render ()
3. componentDidMount()
4. componentDidUpdate()
5. componentWillUnmount()

For more reference [React-Lifecycle-methods-Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## Q: (Research) Why do we use `super(props)` in constructor?

A: Using `super(props)` inside the constructor serves two purposes:

- First, it ensures that the parent class's constructor is properly called, allowing the child component to inherit all properties and methods from the parent.

- Second, it allows the child component to access the `this.props` object within the constructor, providing access to the props passed to the component.

If `super(props)` is not called in the constructor, a "Reference Error: Must call super constructor in derived classes before accessing `'this'` or returning from derived constructor" error is thrown. This error occurs because without calling `super(props)`, the child component's constructor is unable to access `this.props`, resulting in an undefined value.

## Q: (Research) Why can't we have the `callback function` of useEffect as `async`?

A: The reason behind not allowing `async` directly on the callback function of `useEffect` is related to how promises are handled. When an async function is declared, it automatically returns a promise. However, useEffect expects the callback function to either return nothing or return a cleanup function. It doesn't handle promises returned by async functions.
To work with asynchronous operations inside useEffect, we can make use of a separate async function and call it from the callback function.

```JSX
   useEffect(() => {
  const fetchData = async () => {
    try {
      //Async operation
    } catch (error) {
      // Handle error
    }
  };

  fetchData();
}, []);
```

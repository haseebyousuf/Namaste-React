# Chapter 08 - Optimizing our app

## Q: What are `custom hooks`?

A: custom hooks are a way to extract and reuse stateful logic from components. They allow you to create reusable functions that can encapsulate certain functionalities, making your code more organized and easier to maintain.

### Creating a Custom Hook

To create a custom hook, we simply write a JavaScript function that uses built-in React hooks or other custom hooks. The name of the custom hook should start with "use" to follow the convention.
Here's an example of a simple custom hook for to check online status of an user:

```JSX

import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => setOnlineStatus(true));
    window.addEventListener("offline", () => setOnlineStatus(false));
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;

```

We can use this custom hook in our components as:

```JSX

import useOnlineStatus from "./useOnlineStatus";

const MyComponent = () => {
  const onlineStatus = useOnlineStatus();
  return(
    <div>
      Online Status: {onlineStatus ? "🟢" : "🔴"}
    </div>
  )
}
```

## Q: What is `Code Splitting` / `Lazy Loading`?

A: - `Code Splitting` in React is a technique used to improve the performance and loading speed of web applications. - With Code Splitting, the JavaScript code for a React application is split into smaller, more manageable chunks or bundles. - Instead of Loading the entire application code at once, only the necessary code is loaded. - It allows users to load only the code they need at any given moment, reducing initial load times and improving performance. - Code Splitting or Lazy Loading is commonly achieved using dynamic imports or `React.lazy()`.

## What is `React.lazy()`?

- `React.lazy()` is a function provided by React that enables `Code Splitting` and `Lazy Loading` of components.
- With React.lazy(), we can dynamically import a component and render it as a regular component.
- The lazy-loaded component is loaded separately from the main bundle, resulting in smaller initial bundle sizes and faster page load times.
- React.lazy() accepts a function as an argument, that function must call the `dynamic import()` in its body.

```JSX
import {lazy} from 'react';

//Normal Import of a component
import AboutUs from './AboutUs';

//Dynamic Import using lazy()

const AboutUs = lazy(() => import('./AboutUs'));

```

## What is `Suspense`?

- `Suspense` is a component provided by React that is used in conjunction with React.lazy() to handle loading states for lazy-loaded components.
- When we use React.lazy() to dynamically load a component, there is brief period when the component is being fetched from the server. During this time, we might want to display a loading state or a `fallback UI` to let the user know that something is being loaded.
- The suspense component is wrapped around the lazy-loaded component and specifies a fallback UI that will be displayed while the lazy-loaded component is loading.
- Once the lazy-loaded component is ready, it will be rendered and the fallback UI will no longer be visible.

```JSX
  import React, {lazy, Suspense} from 'react';

  //dynamic import using lazy()
  const AboutUs = lazy(() => import('./AboutUs'));

  const App = () => {
    return(
      <div>
        <Suspense fallback={<div> Loading... </div>}> //suspense with fallback UI
          <AboutUs />  //lazy-loaded
        </Suspense>
      </div>
    );
  }
```

## Variations of Code Splitting

1. **Lazy Loading**: Code splitting is often referred to as lazy loading because it defers the loading of certain parts of the application until they are required. This approach helps reduce the initial loading time, especially for larger applications.

2. **Deferred Loading**: Another name for code splitting, emphasizing the deferred loading of code resources. It defers loading until the resource is explicitly requested or required by the application's flow.

3. **On-Demand Loading**: This term highlights the concept of loading code resources precisely when they are demanded during the application's execution, instead of loading everything upfront.

4. **Fragmentation/Chunking**: In some contexts, code splitting is described as fragmentation/chunking. It breaks down the application bundle into smaller fragments or chunks, allowing for more granular loading and improved performance.

5. **Bundle Splitting**: Since code splitting divides the main application bundle into smaller bundles, it is sometimes called bundle splitting. This emphasizes the process of splitting one large bundle into multiple smaller ones.

6. **Dynamic Module Import**: Specifically in the context of ES modules, code splitting is sometimes referred to as dynamic module import. It leverages the `import()` function to load modules dynamically.

## Why we got this error: `A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.` How does Suspense fix this error?

A: When a lazily-loaded component starts to fetch its code, it can potentially cause this error. To address this problem, React's Concurrent Mode and the Suspense component come into play. When we use lazy loading with components, we can wrap the lazily-loaded component with the Suspense component. The Suspense component allows us to specify what to show to the user while waiting for the lazily-loaded component and its data to be fetched.

## Q: Advantages and disadvantages of code splitting pattern?

Advantages:

- `Faster Initial Page Load`: Code splitting allows you to load only the essential code required for the initial page view. By loading smaller chunks first, the initial page load time is significantly reduced, resulting in a faster and more responsive user experience.

- `Reduced Network Payload`: Smaller code chunks mean that users download less data when they visit your website or use your application. This can be particularly beneficial for users on slow or limited internet connections, as it reduces data usage and speeds up loading times.

- `Improved Performance`: Since only the necessary code is loaded, the application's overall performance is enhanced. Users experience faster page transitions and interactions because the application fetches additional code only when needed.

Disadvantages:

- `Complexity`: Implementing code splitting can add complexity to the development process. Developers need to manage and coordinate various code chunks, which may require additional tooling and configuration.

- `Build Tool Overhead`: Code splitting often relies on build tools and bundlers, which can introduce additional build-time overhead. This can result in longer build times and potentially more complex configuration setups.

- `Runtime Overhead`: Code splitting can introduce a slight runtime overhead since the application needs to fetch and load additional code chunks when they are needed. This overhead is usually minimal but may be noticeable on low-end devices or under slow network conditions.

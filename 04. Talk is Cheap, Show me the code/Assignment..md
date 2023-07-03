# Chapter 04 - Talk is Cheap, show me the code

## Q: Is `JSX` mandatory for React?
A: JSX is `not a requirement for React` because React can be used with plain JavaScript as well. Instead of using JSX, we can use React's createElement function to create and manipulate React elements directly. However, JSX offers several benefits, such as improved readability, easier component composition, and the ability to use familiar HTML syntax.


## Q: Is `ES6` mandatory for React?
A: No, ES6 is `not mandatory` for React, but it is `highly recommended` and commonly used. React itself does not require ES6, as it can be used with older versions of JavaScript. However, many modern React development practices and libraries make use of ES6 features. These features include `arrow functions`, template literals, destructuring assignment, spread syntax, and class syntax, among others. These features and syntax improvements enhance developer `productivity` and `code readability`.


## Q: How can I write `comments` in JSX?
A: In JSX, you can add comments using curly braces `{/* */}` - for single or multiline comments
#### Example
```
{/* A JSX single line comment */}
{/* 
  Multi
  line
  JSX
  comment
*/}  
```


## Q: What is `Reconciliation` in React?
A: `Reconciliation` is the process through which React updates the Browser DOM and makes React work faster. React use a `diffing algorithm` so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components.
React stores a copy of Browser DOM which is called `Virtual DOM`. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by `Diffing Algorithm`.
React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.


## Q: What is `React Fiber`?
A: React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter.
The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React.
Because Fiber is asynchronous, React can:
- Pause, resume, and restart rendering work on components as new updates come in
- Reuse previously completed work and even abort it if not needed
- Split work into chunks and prioritize tasks based on importance


## Q: What are `keys` in React?
A: In React, keys are `special attributes` that are used to uniquely identify and differentiate elements in a collection or list of components. 
When rendering a collection of components, such as in a `map()` function, React uses the keys to keep track of each component's identity. Keys help React determine which components are new, updated, or removed, enabling it to perform targeted updates instead of re-rendering the entire list.
```
  {items.map(item => <Component key={item.id} data={item} />)}
```
### Need of Keys:
- `Efficient updates`: Keys help React identify which components have changed, allowing it to update only the necessary components instead of re-rendering the entire list. This improves performance and reduces unnecessary computational  overhead.

- `Component reordering`: When the order of the elements in the list changes, React relies on keys to associate the old and new instances of each component correctly. This ensures that component state is preserved, and avoids unnecessary re-rendering of components that have moved within the list.

- `Element identification`: Keys help React distinguish between elements that have similar content or are derived from the same data source. This differentiation is important when updating or removing specific elements within the list.

*NOTE: It's worth mentioning that keys are not accessible as props within the components. They are solely used by React internally for `optimization` and `tracking` purposes.

## Q: Can we use `index as keys` in React?
A: While it is possible to use the index of an element as the key in React, it is generally `not recommended` and should be used as a `fallback option` when no other unique identifier is available. However, it can lead to potential issues and unintended behavior in certain scenarios.
### Issues using index as keys:
- `Lack of stability`: The index of an element can change if items are added, removed, or reordered in the list. When the index changes, React may mistakenly identify elements as new or updated, leading to incorrect rendering and potential performance issues.

- `Negative impact on performance`: Using the index as keys can negatively affect performance when items are added or removed from the middle of the list. React needs to re-render all components after the modified index, even if the other elements have not changed. This can result in unnecessary re-renders and decreased performance.

- `Component state issues`: If components in the list have their own state, using the index as keys can cause problems. For instance, if a component's state is not properly associated with its key, reordering the list could result in incorrect state updates or loss of component state altogether.


## Q: What is `props in React`?
A: props, short for `properties` are a way to pass data from a parent component to its child components. Props at the end of the day are just normal arguments to a function. Props are received as an `object (intended to be read-only)` in the child component.
Note: We should not modify props directly in the child component as it can create inconsistencies between the parent's data and the child's understanding of that data. This can result in bugs and unexpected behavior. If we want to modify the data, we can create a local state within the child component or pass callback function as props to update parent's state/data. 
#### Example
```
function ParentComponent() {
  return <ChildComponent name="John" age={25} />;
}

function ChildComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

```

## Q: What is `Config Driven UI`?
A: A `config-driven UI`, also known as a configuration-driven user interface, is an approach where the appearance and behavior of a user interface are determined by a configuration or data it receives rather than hardcoding them in the application's code. It involves using external configurations or data structures to define the structure, layout, and behavior of the UI elements.


## Q: Difference between `Virtual DOM` and `Real DOM`?
A: DOM stands for `Document Object Model`, which represents your application UI and whenever the changes are made in the application, this DOM gets updated and the user is able to visualize the changes. DOM is an interface that allows scripts to update the content, style, and structure of the document.
- `Virtual DOM`
    - The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn’t have the ability to write to the screen like the real DOM.
    - Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.
    - Reconciliation is a process to compare and keep in sync the two files (Real and Virtual DOM). Diffing algorithm is a technique of reconciliation which is used by React.
- `Real DOM`
    - The DOM represents the web page often called a document with a logical tree and each  branch of the tree ends in a node and each node contains object programmers can modify the content of the document using a scripting language like javascript and the changes and updates to the dom are fast because of its tree-like structure but after changes, the updated element and its children have to be re-rendered to update the application UI so the  re-rendering of the UI which make the dom slow all the UI components you need to be rendered for every dom update so real dom would render the entire list and not only those item that receives the update .

|   `Real DOM`    |   `Virtual DOM` |
|-------------|-----------------|
| DOM manipulation is very expensive  | DOM manipulation is very easy  | 
| There is too much memory wastage  | No memory wastage  |
| It updates Slow | It updates fast |
| It can directly update HTML | It can’t update HTML directly  |
|  Creates a new DOM if the element updates. | Update the JSX if the element update |
| It allows us to directly target any specific node (HTML element) | It can produce about 200,000 Virtual DOM Nodes / Second. |
| It represents the UI of your application | It is only a virtual representation of the DOM |
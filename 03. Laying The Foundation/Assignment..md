# Chapter 03 - Laying the Foundation

## Q: What is `scripts` in package.json?
A: In a package.json file, scripts are used to define a set of commands that can be executed from the command line. These scripts are typically used for various development tasks such as building, testing, and running our application.

Here's an example of how scripts can be defined in a package.json file:
  ```
    "scripts": {
      "start": "parcel index.html",
      "build": "parcel build index.html",
      "test": "jest"
    }
  ```
In this example, we have three scripts defined:

 - "start": This script is used to start our application. It executes the command `parcel index.html`, which runs the index.html file using Parcel.

 - "build": This script is used to build our application using webpack. It executes the command parcel, which invokes the parcel bundler to generate a production-ready bundle.

 - "test": This script is used to run tests for our application using Jest. It executes the command jest, which runs the test suite defined in our project.

To run these scripts, we can use the `npm run` command followed by the script name. For example, to start the application, we can run `npm run start`. Similarly, we can run `npm run build` and `npm run test` to execute the corresponding scripts.

## Q: What is `JSX`?
A: JSX stands for JavaScriptXML. 
It is an extension to the JS Language syntax that allows us to write `HTML-like Code` within JS.
Note that JSX is not a part of React, It is simply a different syntax which looks similar to HTML.
JSX is a powerful and intuitive syntax extension that simplifies the process of creating React Elements as we don't have to use `React.createElement()` when using JSX. JSX at the end of the day gives us a React Element.

### Example 1 using JSX:
```
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```
### Example 2 Without JSX:
```
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```


## Q: What is `Babel`?
A: `Babel` is an `open-source JS Transpiler` that converts ECMAScript 2015+ (ES6+) code into backward compatible versions of JS that can be run by current and previous JS Engines.
* Example: `Arrow Functions` which are defined in ES6 are translated to ordinary function deceleration.


## Q: Babel and JSX?
A: We know that browsers can only understand JS Objects but `JSX is not a valid pure JS Code`. Thus to enable browsers to understand JSX, it is `transpiled by Babel` before it goes to the JS Engine.


## Q: Attributes in JSX?
A: JSX uses attributes same as regular HTML but here the attributes are written in `camelCase` format.

### Attribute as a string literal:
```
const heading = <h1 className="heading"> Hello World! <h1>
```
### Attribute as an expression:
```
const heading = <h1 className={someVariable}> Hello World! <h1>
```


## Q: What is a `Component` in React?
A: In React, a component is a `reusable and self-contained piece of code` that encapsulates the UI and its related behavior. Components are the building blocks of a React application, and they allow us to break down the user interface into smaller, modular parts, making it easier to manage and maintain our codebase.

### Types Of Components:
There are two types of components in React:
* Class Based Components (Old Way).
* Functional Components (New Way).


## Q: What is a `Functional Component`?
A: It is just a normal JS Function that accepts `props as argument` and `returns JSX elements`. It is a good practice to start the name of the component with a Capital Letter.
### Example 1:
```
const HeadingComponent = () => {
  return <h1> Namaste React, from a Functional Component </h1>;
}
```
### Example 2:
```
const HeadingComponent = () => <h1> Namaste React, from a Functional Component </h1>;
```
### Example 3:
```
const HeadingComponent = () => {
  return (
    <h1 id="heading" className="heading"> 
      Namaste React, from a Functional Component 
    </h1>
  );
}
```


## Q: How to render a component?
A: To render a normal React Element, we used to pass the name of that element in the render() method as an argument. However to render a component, we pass the name of the component as a `JSX tag syntax` :
```
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
```


## Q: What is `Component Composition?
A: It refers to the practice of `Combining smaller and reusable components together` to build larger and more complex components or UIs. Its like putting one component inside another component.


## Q: Superpowers of `JSX`.
A: 
### 1. Injecting JS Code Inside JSX: 
We can inject JavaScript code by enclosing it within curly braces {} anywhere inside the JSX code. This feature allows for dynamic content and computation within your user interface components. 

```
const name = "Haseeb";
const greeting = <h1>Hello, {name}! </h1>
```
```
const count = 2;
const Greeting = () => <h1>Count:  {count * 2} </h1>
```

### 2. Preventing `Cross-site Scripting`: 
JSX prevents Cross-site Scripting by `sanitizing` the incoming data inside the curly braces.


## Q: How can we combine React Element and Components.
A: We can combine a React Element with another Element or with a Component. Similarly we can combine a Component with another Component or with an Element
### 1. React Element inside another React Element: 
A React Element can be used inside another React Element by using curly braces {}.

```
const titleElement = <h2> Namaste React! </h2>; 
const headerElement = (
  <div>
    <h1> Header Element </h1>
    {titleElement}
  </div>
)
```
### 2. React Element inside a Component: 
Similarly, a React Element can be used inside a Component by using curly braces {}.

```
const titleElement = <h2> Namaste React! </h2>; 
const HeaderComponent = () => {
  return (
    <div>
      <h1> Header Component </h1>
      {titleElement}
    </div>
  );
}
```
### 3. A Component inside a React Element: 
A Component can be used inside a React Element by using Component's `JSX Tag Syntax`.

```
const TitleComponent = () => <h2> Namaste React! </h2>; 
const headerElement = (
  <div>
    <h1> Header Element </h1>
    <TitleComponent />
  </div>
)
```
### 4. A Component inside a another Component: 
Similarly, a Component can be used inside a another Component by using Component's `JSX Tag Syntax`.

```
const TitleComponent = () => <h2> Namaste React! </h2>;  
const HeaderComponent = () => {
  return (
    <div>
      <h1> Header Component </h1>
      <TitleComponent />
    </div>
  );
}
```


## Q. What is `React Fragment`?: 
A: A `React Fragment` is a built-in component that allows us to `group multiple elements together` without introducing an additional wrapping element to the DOM.

### Why React Fragment?
A: In React, the fundamental concept is that a component should return a single element. In other words, a component can have a `single root element`. The reason for this limitation is primarily due to how React updates and reconciles the Virtual DOM with Actual DOM. By enforcing a single root element, React can easily identify and manipulate that element and its child.

### Before React Fragment:
A: Prior to React Fragment, if we wanted to return multiple elements from a component, we had to wrap them in a parent element such as a '<div>'. However, this resulted in unnecessary elements being added to DOM, which could affect the structure of our HTML and CSS.

### Example:
```
const title = <h2> Namaste React! </h2>;  
const HeaderComponent = () => {
  return (
    <>
      <h1> Header Component </h1>
      {title}
    </>
  );
}
```


## Q: Role of `type` attribute in script tag? What options can I use there?
A: The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.
### `type` attribute can be of the following types:
- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
    ### Syntax
    ```
    <script type="text/javascript"></script>
    ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.


## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
A: The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable. 
The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
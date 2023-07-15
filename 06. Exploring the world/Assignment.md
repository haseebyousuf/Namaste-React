# Chapter 06 - Exploring the world

## Q: What is `Microservice`?
A: In a `microservice architecture`, an application is divided into a collection of smaller,` loosely coupled services`. Each service is responsible for a specific functionality and can be developed, deployed, and scaled `independently`. These services communicate with each other through well-defined APIs.

## Q: What is `Monolith architecture`?
A: In a `monolithic architecture`, the entire application is built as a `single, self-contained unit`. All the components of the application, such as the user interface, business logic, and data access layers, are `tightly coupled` and deployed together. In other words, the application is a single, large codebase that handles all the functionalities.

## Q: What is the difference between `Monolith and Microservice`?
A: Here are some key differences between monolithic and microservice architectures:

  - `Structure`:
      * In a monolithic architecture, the entire application is structured as a single, unified unit. All components are tightly coupled and run together within the same process or container.
      * In a microservice architecture, the application is divided into multiple independent services, each responsible for a specific functionality. These services communicate with each other through APIs.
  - `Coupling and Independence`:
      * In a monolithic architecture, components are tightly coupled, meaning they directly reference and depend on each other. Changes to one component may require rebuilding and redeploying the entire application.
      * In a microservice architecture, services are loosely coupled, meaning they can be developed, deployed, and scaled independently. Changes to one service do not necessarily require changes to other services.
  - `Scalability`:
      * Scaling a monolithic application typically involves replicating the entire application, even if only certain components require additional resources. This can be inefficient and may limit scalability.
      * Microservices can be individually scaled based on demand. Each service can be replicated or scaled independently, allowing for better resource utilization.
  - `Development and Deployment`:
      * Developing and deploying a monolithic application involves working with a single codebase. Developers need to coordinate changes, and the entire application is deployed as a single unit.
      * Developing and deploying microservices involves working with multiple codebases and services. Each service can be developed, tested, and deployed independently, allowing for faster development cycles and continuous deployment.
  - `Fault Isolation and Resilience`:
      * In a monolithic architecture, if one component fails or experiences a bug, it can potentially affect the entire application, leading to downtime or degraded performance.
      * Microservices provide better fault isolation. If one service fails, other services can continue functioning, reducing the impact of failures and improving overall system resilience.
  - `Technology Diversity`:
      * In a monolithic architecture, all components use the same technology stack and programming language, as they are part of a single application.
      * Microservices allow for technology diversity. Different services can be developed using different technologies and programming languages, as long as they can communicate via APIs.

## Q: Why do we need a `useEffect Hook`?
A: The `useEffect hook`, a built-in React Hook, is simply a JavaScript function that allows us to `perform side effects` in functional components. Side effects are actions that occur outside the scope of the component's rendering, such as fetching data from an API, subscribing to events, or manipulating the DOM.
The useEffect hook is called after the component has rendered, and it accepts two parameters: a callback function and an optional array of dependencies.

- `Callback function`: The first parameter of useEffect is a callback function that represents the side effect we want to perform. This function will be executed after the component has rendered or re-rendered. It can contain any code that performs side effects, such as fetching data, subscribing to events, or modifying the DOM. 
- `Dependencies array`: The second parameter of useEffect is an optional array of dependencies. This array specifies the values that the effect depends on. When any of the dependencies change between renders, React will re-run the effect. If the dependencies array is omitted, the effect will run after every render. If the dependencies array is an empty array, the effect will run only once, similar to componentDidMount.

```
  useEffect(() => {
    // Side effect logic goes here
  }, [dependencies]);
```

`Cleaning up side effects`: If your effect requires any cleanup, such as unsubscribing from a subscription or clearing a timeout, you can return a cleanup function from the effect. This cleanup function will be executed when the component is unmounted or before the effect is re-run. To handle cleanup, simply return a function from the effect's callback function.

```
  useEffect(() => {
    // Effect code
    console.log('Component rendered');

    // Cleanup function
    return () => {
      console.log('Component unmounted');
      // Perform cleanup operations here
    };
  }, []);
```


## Q: What is `Optional Chaining`?
A: `Optional Chaining` (`?.`) allows us to safely access properties or methods of an object without causing an error or breaking our application if any intermediate property is null or undefined. If the property or method is not present then instead of a throwing key error, it returns `undefined`.

### Example:
```
  const user = {
    name: "Haseeb",
    address:{
      street: "Ajar",
      zip: 193502,
    },
  }

  //without optional chaining
  const town = user.location.street; //throws error as location is not defined

  //with optional chaining
  const town = user?.location?.street; //returns undefined
```


## Q: What is `Shimmer UI`?
A: `Shimmer UI`, also known as `skeleton screens` or `loading placeholders`, is a user interface design technique used to provide visual feedback to users while content is being loaded or fetched asynchronously. The concept behind shimmer UI is to display a `lightweight`, `animated` placeholder that mimics the structure and layout of the actual content that is being loaded. By using shimmer UI, developers can give the impression that the application is actively loading and processing data, which helps to manage user expectations and provides a more seamless user experience.


## Q: What is the difference between `JS expression and JS statement`?
A: A `JS expression` returns a value that we use in the application. for example: 
```
1 + 2 // expresses 
"foo".toUpperCase() // expresses 'FOO'
console.log(2) // logs '2'
isTrue ? true : false // returns us a true or false value based on isTrue value
```
A `JS statement` is a larger unit of code that does not return a value but perform an action or series of actions. for example:
```
let x; // variable declaration
for(){} //for loop
if () { } // if condition
return x * 2; //terminates the execution of a function and specifies the value to be returned
```
If we want to use `JS expression` in JSX, we have to wrap in `{/* expression slot */}` and if we want to use `JS statement` in JSX, we have to wrap in `{(/* statement slot */)}`;


## Q: What is `Conditional Rendering`? explain with a code example.
A: Conditional rendering in React refers to the practice of displaying different content or components based on certain conditions. It allows developers to control what is rendered to the user based on the state or props of a React component.
```
function MyComponent(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome, User!</h1>
      ) : (
        <h1>Welcome, Guest!</h1>
      )}
    </div>
  );
}
```
By using the ternary operator (condition ? expression1 : expression2), the code evaluates the condition and renders the appropriate JSX expression accordingly.
Conditional rendering can be based on various conditions, such as user authentication, form inputs, or data availability. It allows you to create dynamic and interactive user interfaces by showing or hiding components or content based on specific conditions.


## Q: What is `CORS`?
A: CORS stands for `Cross-Origin Resource Sharing`.
   - It is a security feature implemented in web browsers that blocks requests made by JavaScript code to different origins (Domains, Protocols or Ports) than the one hosting the JavaScript File.
   - This is done to prevent malicious websites from accessing sensitive information or executing actions on behalf of the user on another website.
   - To allow JavaScript code to access a resource from a different origin, the server hosting the resource must return an HTTP header with `Access-Control-Allow-Origin` set to the origin of the request or to `*` to allow any origin to access the resource. 


## Q: What is `async and await`?
A: `Async`: It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a promise. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.
`Await`: Await function is used to wait for the promise. It could be used within the `async` block only. It makes the code wait until the promise returns a result. It only makes the async block wait.
for example: 
```
// async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    const data = await fetch(
      "Swiggy_API_URL"
    );
    const json = await data.json();
    // we get the Swiggy API data in json format
    console.log(json);
  }
```


## Q: What is the use of `const json = await data.json()`; in `getRestaurants()`?
A: When we make a request to an API endpoint, the response returned by the server can be in various formats, such as JSON, XML, HTML, plain text, etc. The .json() method is specifically designed to handle and parse responses that are in JSON format. The .json() method takes the response body and automatically parses it, converting it into a JavaScript object. This allows you to access and work with the data as regular JavaScript objects and arrays, making it much simpler to extract and manipulate the data in your application.
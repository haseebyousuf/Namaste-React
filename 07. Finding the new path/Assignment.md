# Chapter 07 - Finding the Path


## Q: What are various ways to `add images` into our App? Explain with `code examples`.
A: Using the `full URL of the image` for the web (CDN) or any public images.
Example : 
```
<img src="https://reactjs.org/logo-og.png" alt="React Image" />
```
Adding the image into the project 
`Drag your image into your project` and `import it` into the desired component
```
import reactLogo from "./reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```
The correct way to structure images in your project is to add them in an `images` folder. If you are using other `assets` than just images, you might want to add all in the `assets` folders. 
```
import reactLogo from "../../assets/images/reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```


## Q: What would happen if we do `console.log(useState())`?
A: If we do `console.log(useState())`, we get an array `[undefined, function]`  where first item in an array is `state` is `undefined` and the second item in an array is `setState` `function` is bound dispatchSetState.


## Q: How will `useEffect` behave if we `don't add` a `dependency array`?
A: Syntax of `useEffect` is:
```
useEffect(() => {}, []);
```
Case 1 : When the `dependency array is not included` in the arguments of `useEffect() hook`, the callback function will be executed `every time` the component is rendered and re-rendered.
```
useEffect(() => {
	console.log("I run everytime this component rerenders")
});
```
Case 2 : When the `dependency array is empty` in the arguments of `useEffect() hook`, the callback function will be executed `only one time` during the initial render of the component.
```
useEffect(() => {
	console.log("I Only run once (When the component gets mounted)")
}, []);
```
Case 3 :  When the `dependency array contains a condition`,  the callback function will be executed  `one time` during the initial render of the component and also rerender if there is a `change in the condition`.
```
useEffect(() => {
	console.log("I run every-time when my condition changed")
}, [condition]);
```


## Q: What is `SPA`?
A: `Single Page Application is a type of web application architecture where the entire application is contained within a single web page, and the content is dynamically loaded and updated as the user interacts with the application, without requiring a full page reload. In contrast to traditional multi-page web application, a Single-Page Application loads the initial HTML, CSS, and JavaScript files from the server just once when the application is first accessed. Subsequent interactions, such as clicking on links, submitting forms, or fetching data, are handled dynamically within the same web page, without requiring a full reload.


## Q: What is the difference between `Client Side Routing` and `Server Side Routing`?
A: In `Client-side routing or rendering (CSR)`, the routing logic is handled by the browser and JavaScript running on the client-side. When a user navigates within the application, the browser updates the URL in the address bar without making a request to the server. 

In `Server-side routing or rendering (SSR)`, the routing logic is handled by the server. When a user navigates to a new URL, the browser sends a request to the server, which responds with the appropriate HTML document for that route. Each page or route corresponds to a separate server request.
# _Chapter 01 - Inception_

## Q: What is `Emmet`?

A: Emmet provides a set of powerful tools and shortcuts for quickly generating HTML, CSS, and other markup languages. It allows developers to write code using simple abbreviations and then expand them into complete HTML or CSS structures.

## Q: Difference between a `Library and Framework`?

A: `Library` provides developers with predefined functions and classes to make their work easier and boost the development process. On the other hand, a `framework` is a more structured approach to building Software. It is a set of rules and guidelines that dictate how developer should write their code, and provides a foundation for building an application


## Q: What is `CDN`? Why do we use it?
A: A `content delivery network (CDN)` refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content.
The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.


## Q: Why is `React known as React`?
A: `React` is named React because of its ability to `react to changes in data`. It was designed to allow developers to react to changes in state and data within an application, and to update the UI in a declarative and efficient manner


## Q: What is `crossorigin in script tag`?
A: The crossorigin attribute is used to control how resources, like images or scripts, can be shared between different websites. It helps manage Cross-Origin Resource Sharing (CORS) requests, which determine if it's safe to allow sharing of resources from one domain to another. In simpler terms, it's a way to check if it's okay for websites to share things with each other from different domains.
### _Syntax_
```sh
<script crossorigin="anonymous|use-credentials">
```

## Q: What is difference between `React and ReactDOM`?
A: Both React and ReactDOM are JS Libraries but `React` is used for building UI's where as `ReactDOM` is allows react to interact with the DOM. 


## Q: What is difference between `react.development.js` and `react.production.js` files via `CDN`?
A: `Development` is the stage of an application before it's made public while `production` is the term used for the same application when it's made `public`.
`Development build` is several times (maybe 3-5x) `slower` than the `production build`.


## Q: What is `async and defer`?
A: `Async` - Async attribute is used to specify that a script should be downloaded in the background while the rest of the page continuous to load and then execute once it has finished downloading. It helps to improve performance as it allows the browser to continue rendering the page while the script is being downloaded.
### _Syntax_
```sh
<script src="demo_async.js" async></script>
```

`Defer` - Defer attribute is used to specify that a script should be downloaded in the background while the rest of the page continuous to load but the script is not executed until the page has finished parsing. It helps to improve performance as it allows the browser to load the page faster without being blocked by scripts.

### _Syntax_
```sh
<script src="demo_defer.js" defer></script>
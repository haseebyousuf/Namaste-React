# _Chapter 02 - Igniting our App_


## Q: What is `NPM`?
A: - If we want to use packages in our code, we have to use a package manager.
   - `npm` makes it easy to share and reuse code and also makes it easy to manage different versions of code.
   - `npm` is a standard repository for packages.
   - `npm` alternative is `yarn`
   - initializing npn:
      ```
      npm init
      ```
   - `npm init -y` can be used to skip the setup step, `npm` takes care of it and creates the `package.json` json file automatically , but without configurations.


## Q: What is `package.json`?
A: `package.json` is a configuration for npm which keeps track of all the packages/dependencies our app is using. It is a metadata file that contains the information about our app, its dependencies, scripts and other configuration details.


## Q: What is `package-lock.json`?
A: `package-lock.json` is automatically created and ensures consistent dependency versions for reliable builds. It keeps track of the exact version of packages installed in your app.


## Q: What is `Caret (^)` and `Tilde (~)` in package.json
* **~** : `Approximately equivalent to version`, will update major versions of packages used in our app, without incrementing the minor version.
* **^** : `Compatible with version`, will update minor versions of packages used in our app, without incrementing the major version.

> If none of them is present, that means only the version specified in `package.json` file is used in the development.


## Q: Why should we not modify `package-lock.json`?
A: package-lock.json contains the information about the dependencies and their versions installed in our app. Modifying/Deleting it could cause dependency issues in the production environment. So it is better to not modify them as they are being handled by `npm` automatically.


## Q: What is `npx`? How is it different from `npm`?
A: `npx` is a command-line utility that comes bundled with npm, starting from npm version 5.2.0. The main difference between npx and npm lies in their functionality. When you use npm to install a package globally, it adds the package to your system's PATH and makes it accessible from any directory. On the other hand, when you use npx, it allows you to run a package without the need for a global installation. npx downloads the package temporarily and executes it, ensuring that you're using the latest version of the package.


## Q: What is difference between `dependencies` vs `devDependencies`?
A: `Dependencies`: 
  - These are such dependencies which are required in development as well as in production. 
  - Such as Vue, React, Angular, Express, JQuery and etc. 
  -   ```
        npm install react
      ```
`DevDependencies`:
  - These are such dependencies which are required in development only.
  - Such as, `parcel, webpack, vite, mocha`.
  - `These packages` are `necessary only while you are developing your project`, not necessary on production.
  -   ```
        npm install -D parcel
      ```


## Q: What are `Node Modules`?
A: `node_modules` is kind of database where all the external packages required by our app are kept. When we use `npm install`, the packages are downloaded from web and copied into the `node_modules` folder and Node is trained to look for them there when we import them (without a specific path).


## Q: Why not push `node_modules` to github or on production?
A: - `node_modules` contains a lot of files and it will cost a lot of memory space if we push them on github or on production.
   - Also, if we have `package.json` and `package-lock.json` we can recreate our node_modules using `npm install`, so there is no need to push node_modules to github.


## Q: What is `.gitignore`? What should we `add and not add` into it?
A: The `.gitignore file` is a text file that tells `Git` which files or folders to `ignore` in a project during `commit to the repository`. The types of files you should consider adding to a .gitignore file are any files that do not need to get committed. for example, For security, the security key files and API keys should get added to the gitignore.


## Q: What is a `Bundler`?
A: A `Bundler` is a tool that allows us to package our code into a single file or a bundle. Bundlers are used to reduce the size of our app and improve performance. Bundlers minify our code, do optimization, remove console logs etc.


## Q: What is `Parcel/Webpack`? Why do we need it?
A: `Parcel/Webpack` are popular bundler which are used in web development to bundle and optimize JavaScript, CSS, and other assets for deployment in a web app.
Parcel/Webpack are type of bundlers that we use to power our application with different type functionalities and features.


### Parcel Features:
* Requires zero configuration: Works out of the box.
* Includes a development server.
* Offers Hot Reloading.
* Displays beautiful Diagnostics.
* Reliable Caching.
* Tree Shaking.
* Minification.
* Image Optimization.
* Compression.
* Code Splitting.
* HTTPS in Development.
* Consistent Hashing Algorithm.

### installation commands:
- Install:
```
npm install -D parcel
```
`-D` is used for development and as a development dependency.

- Parcel Commands :
    - For development build:
    ```
    npx parcel <entry_point> 
    ```
    - For production build :
    ```
    npx parcel build <entry_point> 
    ```


## Q: List down your favorite `5 superpowers of Parcel` and describe any 3 of them in your own words.
A: `5 superpowers of Parcel`:
* `Hot Reloading` 
    - As we make changes to our code, Parcel automatically rebuilds the changed files and updates our app in the browser. 
    - By default, Parcel fully reloads the page, but in some cases it may perform `Hot Module Replacement (HMR)`.
    - HMR improves the development experience by updating modules in the browser at runtime without needing a whole page refresh.
    - HMR works by replacing the code for a module, and then re-evaluating it and along with all of its parents.
* `File watcher algorithm` 
    - To support an optimal caching and development experience Parcel utilizes a very fast watcher written in C++.
    - Using this watcher Parcel watches every file in our project root (including all node_modules).
    - Based on events and metadata from these files, Parcel determines which files need to be rebuilt.
* `Tree Shaking`
    - Parcel statically analyzes the imports and exports of each module, and removes everything that isn't used. 
    - This is called `Tree Shaking` or `Dead Code Elimination`.
    - Tree shaking is supported for both static and dynamic import, CommonJS and ES modules, and even across languages with CSS modules.
* `Minification` 
* `Image optimization`
* `Caching while development`


## Q: What is `.parcel-cache`?
A: - The ".parcel-cache" folder is a directory that is automatically generated during the bundling process. 
   - It serves as a cache for storing intermediate and compiled files to speed up subsequent builds.
   - Parcel checks the cache to see if any of the source files or dependencies have changed. If no changes are detected, Parcel retrieves the compiled assets from the cache instead of recompiling them, resulting in a faster build process.


## Q: What is the `dist` folder?
A:  - The `/dist` folder, short for `distribution`, is a directory commonly used to store the output or bundled files generated during the build process.
    - The `/dist` folder typically contains the `final optimized version` of our application or project that is ready for deployment.


## Q: What is `browserslist`?
A: `Browserslist` is a configuration file or option used to define the targeted browsers or environments that our web application should support. It allows us to specify a list of browsers or browser versions that our code should be compatible with.
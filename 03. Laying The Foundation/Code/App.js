import React from "react";
import ReactDOM  from "react-dom/client";

const title =  <h1 id="heading" >This is a Title 🚀</h1>;

const HeadingComponent = () => {
  return (
    <>
    <div id="container">
      <>
      {title}

      </>
      <h1>This is a Functional Component</h1>
    </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root.render(<HeadingComponent/>);
root2.render(<HeadingComponent/>);
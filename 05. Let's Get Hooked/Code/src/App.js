import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Search from "./components/Search";
import RestaurantContainer from "./components/RestaurantContainer";

const AppLayout = () => {
  const arr = useState(4);
  console.log(arr);
  return (
    <div className='main-container'>
      <Header />
      <Body />
      <Search />
      <RestaurantContainer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

import React from "react";
import data from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const RestaurantContainer = () => {
  return (
    <div className='res-container'>
      {data.map((item) => (
        <RestaurantCard resData={item} key={item.data.id} />
      ))}
    </div>
  );
};

export default RestaurantContainer;

import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerCards from "./ShimmerCards";

const RestaurantContainer = ({ filteredResList }) => {
  return (
    <div className='res-container'>
      {filteredResList ? (
        filteredResList.map((item) => (
          <RestaurantCard resData={item} key={item.data.id} />
        ))
      ) : (
        <ShimmerCards />
      )}
    </div>
  );
};

export default RestaurantContainer;

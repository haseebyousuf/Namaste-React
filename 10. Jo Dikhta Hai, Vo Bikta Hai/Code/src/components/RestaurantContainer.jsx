import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerCards from "./ShimmerCards";
import { Link } from "react-router-dom";

const RestaurantContainer = ({ filteredResList }) => {
  return (
    <div className='flex justify-between my-8 flex-wrap'>
      {filteredResList ? (
        filteredResList.map((item) => (
          <Link key={item.data.id} to={"restaurant/" + item.data.id}>
            <RestaurantCard resData={item} />
          </Link>
        ))
      ) : (
        <ShimmerCards />
      )}
    </div>
  );
};

export default RestaurantContainer;

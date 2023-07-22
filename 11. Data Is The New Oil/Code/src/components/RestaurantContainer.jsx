import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerCards from "./ShimmerCards";
import { Link } from "react-router-dom";
import WithPromotedLabel from "./WithPromotedLabel";

const RestaurantContainer = ({ filteredResList }) => {
  const PromotedRestaurant = WithPromotedLabel(RestaurantCard);
  return (
    <div className='flex justify-between my-8 flex-wrap'>
      {filteredResList ? (
        filteredResList.map((item) => (
          <Link key={item.data.id} to={"restaurant/" + item.data.id}>
            {item.data.promoted ? (
              <PromotedRestaurant resData={item} />
            ) : (
              <RestaurantCard resData={item} />
            )}
          </Link>
        ))
      ) : (
        <ShimmerCards />
      )}
    </div>
  );
};

export default RestaurantContainer;

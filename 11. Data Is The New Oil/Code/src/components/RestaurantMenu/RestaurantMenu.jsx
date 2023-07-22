import React, { useEffect, useState } from "react";
import "./RestaurantMenu.css";
import { useParams } from "react-router-dom";
import useFetchData from "../../utils/useFetchData";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantMenu = useFetchData(resId);

  if (!restaurantMenu) {
    return null;
  }

  const { name, cuisines, areaName, avgRating, avgRatingString } =
    restaurantMenu?.cards[0]?.card?.card?.info;

  const menuItemsData =
    restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;
  return (
    <div className='res-menu-container'>
      <div className='title-card'>
        <div className='res-info'>
          <h2>{name}</h2>
          <p>{cuisines.join(", ")}</p>
          <p>{areaName}</p>
        </div>
        <div className='res-rating'>Rating: {avgRating || avgRatingString}</div>
      </div>
      <div className='menu-container'>
        {menuItemsData.map((item) => (
          <p key={item.card.info.id}>
            {" "}
            {item.card.info.name} - ₹
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </p>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

import React from "react";
import CDN_URL from "../utils/constants";
import { AiOutlineStar } from "react-icons/ai";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div className='res-card'>
      <img
        src={CDN_URL + cloudinaryImageId}
        alt='banner-image'
        width='250px'
        height='160px'
      />
      <h3>{name}</h3>
      <p className='cuisines'>{cuisines.join(", ")}</p>
      <div className='card-info'>
        <p className='rating'>
          <AiOutlineStar size='1.2rem' />
          {avgRating}
        </p>
        <li className='delivery-time'>{deliveryTime} Mins</li>
        <li className='cost-for-two'> ₹{costForTwo / 100} FOR TWO</li>
      </div>
    </div>
  );
};

export default RestaurantCard;

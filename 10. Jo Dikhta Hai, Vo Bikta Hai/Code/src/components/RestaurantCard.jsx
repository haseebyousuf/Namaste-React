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
    <div className='rounded p-4 border-black-100  my-8 cursor-pointer flex flex-col justify-between  bg-gray-100 hover:bg-gray-200'>
      <img
        className='rounded'
        src={CDN_URL + cloudinaryImageId}
        alt='banner-image'
        width='250px'
        height='160px'
      />
      <h3 className='mt-2 w-60 truncate'>{name}</h3>
      <div className='w-60 mt-4 text-xs truncate'>{cuisines.join(", ")}</div>
      <div className='mt-4 flex text-xs justify-between items-end'>
        <p className='flex items-center gap-1'>
          <AiOutlineStar size='1.2rem' />
          {avgRating}
        </p>
        <li className='flex list-disc items-center gap-1'>
          {deliveryTime} Mins
        </li>
        <li className='cost-for-two'> ₹{costForTwo / 100} FOR TWO</li>
      </div>
    </div>
  );
};

export default RestaurantCard;

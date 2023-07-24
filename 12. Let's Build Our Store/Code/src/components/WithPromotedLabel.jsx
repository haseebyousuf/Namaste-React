import React from "react";

const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className='absolute bg-black text-white p-2 rounded'>
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default WithPromotedLabel;

import React from "react";
import banner from "../../assets/banner.jpg";

const Body = () => {
  return (
    <div className='landing-page'>
      <div className='banner-img-container'>
        <img className='banner-img' src={banner} alt='banner-image' />
      </div>
      <div className='intro'>
        <p className='title'>
          Bring the <span className='orange'>Store</span> to your{" "}
          <span className='orange'>Door</span>
        </p>
        <p className='subtitle'>
          {" "}
          Best Food Ordering App Ever. Pick your desired food from the menu
        </p>
      </div>
    </div>
  );
};

export default Body;

import React, { useEffect, useState } from "react";
import Search from "./Search";
import RestaurantContainer from "./RestaurantContainer";

const Body = () => {
  const [resListData, setResListData] = useState();
  const [filteredResList, setFilteredResList] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=34.0836708&lng=74.7972825&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResListData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const handleFilter = (searchInput) => {
    if (searchInput !== "") {
      const data = resListData.filter((restaurant) =>
        restaurant?.info?.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredResList(data);
      if (data.length === 0) {
        alert("no Restaurant Found!");
        setFilteredResList(resListData);
      }
    } else {
      setFilteredResList(resListData);
    }
  };
  return (
    <>
      {/* <div className='landing-page'>
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
      </div> */}
      <Search handleFilter={handleFilter} />
      <RestaurantContainer filteredResList={filteredResList} />
    </>
  );
};

export default Body;

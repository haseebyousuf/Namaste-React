import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Search from "./components/Search";
import RestaurantContainer from "./components/RestaurantContainer";

const AppLayout = () => {
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
    setResListData(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredResList(json?.data?.cards[2]?.data?.data?.cards);
  };

  const handleFilter = (searchInput) => {
    if (searchInput !== "") {
      const data = resListData.filter((restaurant) =>
        restaurant?.data?.name.toLowerCase().includes(searchInput.toLowerCase())
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
    <div className='main-container'>
      <Header />
      <Body />
      <Search handleFilter={handleFilter} />
      <RestaurantContainer filteredResList={filteredResList} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

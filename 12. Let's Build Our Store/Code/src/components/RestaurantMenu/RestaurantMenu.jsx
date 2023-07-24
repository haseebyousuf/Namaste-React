import React, { useEffect, useState } from "react";
import "./RestaurantMenu.css";
import { useParams } from "react-router-dom";
import useFetchData from "../../utils/useFetchData";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showItems, setShowItems] = useState({ Recommended: true });
  const restaurantMenu = useFetchData(resId);

  if (!restaurantMenu) {
    return null;
  }

  const { name, cuisines, areaName, avgRating, avgRatingString } =
    restaurantMenu?.cards[0]?.card?.card?.info;

  const menuItemsData =
    restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;

  const categories =
    restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return (
    <div className='flex w-[60%] m-auto justify-start flex-col p-4'>
      <div className=' bg-slate-100 rounded flex w-[100%] justify-between p-4'>
        <div className='res-info'>
          <h2 className='font-bold text-3xl'>{name}</h2>
          <p className='text-sm pt-2'>{cuisines.join(", ")}</p>
          <p className='text-sm'>{areaName}</p>
        </div>
        <div className='bg-green-500 p-2 rounded-lg w-fit h-fit'>
          Rating: {avgRating || avgRatingString}
        </div>
      </div>
      <div className='mt-8'>
        {categories.map((category) => {
          const items = category.card.card.itemCards;
          return (
            <>
              <div
                className='bg-slate-200 p-4 rounded mt-2 cursor-pointer flex justify-between'
                onClick={() =>
                  setShowItems({
                    [category.card.card.title]: showItems[
                      category.card.card.title
                    ]
                      ? false
                      : true,
                  })
                }
                key={category.card.card.title}
              >
                <h2 className='font-bold text-2xl'>
                  {category.card.card.title} ({items.length})
                </h2>
                <span>🔽</span>
              </div>
              <div className='p-2 bg-slate-100 rounded'>
                {showItems[category.card.card.title] &&
                  items.map((item) => (
                    <div
                      className=' border-b-2 border-gray-300 my-6 flex w-full justify-between'
                      key={item.card.info.id}
                    >
                      <div className=''>
                        <h3 className='font-bold'>{item.card.info.name}</h3>
                        <p>
                          ₹
                          {item.card.info.price / 100 ||
                            item.card.info.defaultPrice / 100}
                        </p>
                      </div>
                      <button className='font-bold rounded-lg border border-green-500 p-2 px-6 w-fit h-fit hover:bg-green-400 hover:text-white'>
                        ADD
                      </button>
                    </div>
                  ))}
              </div>
            </>
          );
          // {category.card.card.itemCards.map((item)=>(
          //   <div>hii</div>
          // ))}
        })}
      </div>
      {/* <div className='mt-8'>
        {menuItemsData.map((item) => (
          <p key={item.card.info.id}>
            {" "}
            {item.card.info.name} - ₹
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </p>
        ))}
      </div> */}
    </div>
  );
};

export default RestaurantMenu;

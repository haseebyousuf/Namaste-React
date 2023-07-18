import { useState, useEffect } from "react";
import { MENU_API_URL } from "./constants";

const useFetchData = (resId) => {
  //state
  const [resData, setResData] = useState(null);
  //useEffect
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(`${MENU_API_URL}${resId}`);
    const json = await data.json();
    setResData(json?.data);
  };
  console.log(resData);
  return resData;
};

export default useFetchData;

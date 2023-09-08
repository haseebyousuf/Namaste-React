import { useDispatch } from "react-redux";
import { GET_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

export const useFetchMovies = (url, action) => {
  const dispatch = useDispatch();
  const getData = async () => {
    const response = await fetch(url, GET_OPTIONS);
    const data = await response.json();
    dispatch(action(data.results));
  };

  useEffect(() => {
    getData();
  }, []);
};

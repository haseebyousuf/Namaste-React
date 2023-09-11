import { useDispatch, useSelector } from "react-redux";
import { GET_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

export const useFetchMovies = (url, action, stateValue) => {
  const movies = useSelector((state) => state.movies[stateValue]);

  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    if (movies.data) {
      return;
    }
    const response = await fetch(url, GET_OPTIONS);
    const data = await response.json();
    dispatch(action(data.results));
  };
};

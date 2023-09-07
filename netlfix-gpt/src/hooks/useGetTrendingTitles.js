import { useDispatch } from "react-redux";
import { GET_OPTIONS } from "../utils/constants";
import { addTrendingTitles } from "../state/moviesSlice";
import { useEffect } from "react";

export const useGetTrendingTitles = () => {
  const dispatch = useDispatch();
  const getTrendingTitles = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/all/week?language=en-US",
      GET_OPTIONS
    );
    const data = await response.json();
    dispatch(addTrendingTitles(data.results));
  };

  useEffect(() => {
    getTrendingTitles();
  }, []);
};

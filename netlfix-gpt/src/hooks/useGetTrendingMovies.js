import { useDispatch } from "react-redux";
import { GET_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../state/moviesSlice";
import { useEffect } from "react";

export const useGetTrendingMovies = () => {
  const dispatch = useDispatch();
  const getTrendingTitles = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
      GET_OPTIONS
    );
    const data = await response.json();
    dispatch(addTrendingMovies(data.results));
  };

  useEffect(() => {
    getTrendingTitles();
  }, []);
};

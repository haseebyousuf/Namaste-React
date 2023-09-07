import { useDispatch } from "react-redux";
import { GET_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../state/moviesSlice";
import { useEffect } from "react";

export const useGetNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/all/week?language=en-US",
      GET_OPTIONS
    );
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
};

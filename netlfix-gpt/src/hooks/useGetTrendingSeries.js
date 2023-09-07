import { useDispatch } from "react-redux";
import { GET_OPTIONS } from "../utils/constants";
import { addTrendingSeries } from "../state/moviesSlice";
import { useEffect } from "react";

export const useGetTrendingSeries = () => {
  const dispatch = useDispatch();
  const getTrendingSeries = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/tv/week?language=en-US",
      GET_OPTIONS
    );
    const data = await response.json();
    dispatch(addTrendingSeries(data.results));
  };

  useEffect(() => {
    getTrendingSeries();
  }, []);
};

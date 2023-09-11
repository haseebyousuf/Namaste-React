import { GET_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";

export const useFetchData = (type, id) => {
  const [data, setData] = useState(null);
  const getData = async () => {
    if (type === "movie") {
      const movieResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        GET_OPTIONS
      );
      const json = await movieResponse.json();
      setData(json);
    } else {
      const tvShowResponse = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
        GET_OPTIONS
      );
      const json = await tvShowResponse.json();
      setData(json);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return data;
};

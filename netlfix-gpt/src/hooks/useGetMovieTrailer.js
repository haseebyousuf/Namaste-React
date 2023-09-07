import { useEffect } from "react";
import { GET_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../state/moviesSlice";

const useGetMovieTrailer = (videoId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${videoId}}/videos?language=en-US`,
      GET_OPTIONS
    );
    const data = await response.json();
    const allTrailers = data?.results.filter(
      (video) => video.type === "Trailer"
    );
    const selectedTrailer = allTrailers.length
      ? allTrailers[0]
      : data?.results[0];
    dispatch(addTrailerVideo(selectedTrailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useGetMovieTrailer;

import { useEffect } from "react";
import { GET_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../state/moviesSlice";

const useGetMovieTrailer = (videoId, media_type) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    if (media_type === "movie") {
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
    } else {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${videoId}}/videos?language=en-US`,
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
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useGetMovieTrailer;

import { useSelector } from "react-redux";
import PageBody from "../components/PageBody";
import PageHeader from "../components/PageHeader";
import { useFetchMovies } from "../hooks/useFetchMovies";
import {
  addNowPlayingSeries,
  addPopularSeries,
  addTopRatedSeries,
} from "../state/moviesSlice";

const TvShows = () => {
  useFetchMovies(
    "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
    addNowPlayingSeries,
    "nowPlayingSeries"
  );
  useFetchMovies(
    "https://api.themoviedb.org/3/tv/popular?language=en-&page=1",
    addPopularSeries,
    "popularSeries"
  );
  useFetchMovies(
    "https://api.themoviedb.org/3/tv/top_rated?page=1",
    addTopRatedSeries,
    "topRatedSeries"
  );
  let allCategories = [];
  allCategories.push(useSelector((state) => state.movies.topRatedSeries));
  allCategories.push(useSelector((state) => state.movies.nowPlayingSeries));
  allCategories.push(useSelector((state) => state.movies.popularSeries));
  const movies = useSelector((state) => state.movies.topRatedSeries);
  return (
    movies.data && (
      <div className='absolute '>
        <PageHeader movie={movies.data[0]} />
        <PageBody allCategories={allCategories} />
      </div>
    )
  );
};

export default TvShows;

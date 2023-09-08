import { useSelector } from "react-redux";
import PageBody from "../components/PageBody";
import PageHeader from "../components/PageHeader";
import { useFetchMovies } from "../hooks/useFetchMovies";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
} from "../state/moviesSlice";

const Movies = () => {
  useFetchMovies(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    addNowPlayingMovies
  );
  useFetchMovies(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    addPopularMovies
  );
  useFetchMovies(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    addTopRatedMovies
  );
  let allCategories = [];
  allCategories.push(useSelector((state) => state.movies.nowPlayingMovies));
  allCategories.push(useSelector((state) => state.movies.topRatedMovies));
  allCategories.push(useSelector((state) => state.movies.popularMovies));
  const movies = useSelector((state) => state.movies.nowPlayingMovies);
  return (
    movies.data && (
      <div className='absolute '>
        <PageHeader movie={movies.data[0]} />
        <PageBody allCategories={allCategories} />
      </div>
    )
  );
};

export default Movies;

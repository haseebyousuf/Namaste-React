import { useSelector } from "react-redux";
import PageBody from "../components/PageBody";
import PageHeader from "../components/PageHeader";
import { useFetchMovies } from "../hooks/useFetchMovies";
import {
  addTrendingMovies,
  addTrendingSeries,
  addTrendingTitles,
} from "../state/moviesSlice";

const Browse = () => {
  useFetchMovies(
    "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
    addTrendingMovies,
    "trendingMovies"
  );
  useFetchMovies(
    "https://api.themoviedb.org/3/trending/all/week?language=en-US",
    addTrendingTitles,
    "trendingTitles"
  );
  useFetchMovies(
    "https://api.themoviedb.org/3/trending/tv/week?language=en-US",
    addTrendingSeries,
    "trendingSeries"
  );
  let allCategories = [];
  allCategories.push(useSelector((state) => state.movies.trendingTitles));
  allCategories.push(useSelector((state) => state.movies.trendingSeries));
  allCategories.push(useSelector((state) => state.movies.trendingMovies));
  const trendingTitles = useSelector((state) => state.movies.trendingTitles);
  return (
    trendingTitles.data && (
      <div className='absolute '>
        <PageHeader movie={trendingTitles.data[0]} />
        <PageBody allCategories={allCategories} />
      </div>
    )
  );
};

export default Browse;

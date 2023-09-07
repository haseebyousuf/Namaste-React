import { useSelector } from "react-redux";
import PageBody from "../components/PageBody";
import PageHeader from "../components/PageHeader";
import { useGetTrendingMovies } from "../hooks/useGetTrendingMovies";
import { useGetTrendingSeries } from "../hooks/useGetTrendingSeries";
import { useGetTrendingTitles } from "../hooks/useGetTrendingTitles";

const Browse = () => {
  useGetTrendingTitles();
  useGetTrendingMovies();
  useGetTrendingSeries();
  let allCategories = [];
  allCategories.push(useSelector((state) => state.movies.trendingTitles));
  allCategories.push(useSelector((state) => state.movies.trendingSeries));
  allCategories.push(useSelector((state) => state.movies.trendingMovies));
  const trendingTitles = useSelector((state) => state.movies.trendingTitles);
  // const trendingMovies = useSelector((state) => state.movies.trendingMovies);
  // const trendingSeries = useSelector((state) => state.movies.trendingSeries);
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

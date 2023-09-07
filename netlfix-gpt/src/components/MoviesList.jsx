/* eslint-disable react/prop-types */

import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className='py-2'>
      <h1 className='pt-1.5 text-base font-bold leading-6 text-white sm:pt-2 sm:text-2xl'>
        {title}
      </h1>
      <div className='flex overflow-x-auto movies-list'>
        <div className='flex gap-2'>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;

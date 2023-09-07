/* eslint-disable react/prop-types */

import { TMBD_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className='hidden sm:block w-52'>
        <img
          className='sm:w-96 rounded-[0.2vw]'
          src={TMBD_IMAGE_URL + movie.backdrop_path}
          alt={movie.title}
        />
      </div>
      <div className='block w-32 sm:hidden'>
        <img
          className='w-32 rounded-[0.2vw]'
          src={TMBD_IMAGE_URL + movie.poster_path}
          alt={movie.title}
        />
      </div>
    </>
  );
};

export default MovieCard;

/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { TMBD_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const type = movie.first_air_date ? "tv" : "movie";

  return (
    <>
      <div
        onClick={() => {
          navigate(`/watch/${type}/${movie.id}`, {
            state: { movie },
          });
        }}
        className='hidden w-64 transition-transform duration-300 cursor-pointer sm:block hover:scale-110'
      >
        <div className='relative'>
          <img
            className='relative sm:w-72 rounded-[0.2vw]  hover:shadow-2xl'
            src={TMBD_IMAGE_URL + movie.backdrop_path}
            alt={movie.title}
          />

          <h1 className='absolute bottom-0 w-full px-2 py-1 font-medium text-white truncate bg-gradient-to-t from-black'>
            {movie.title || movie.name}
          </h1>
        </div>
      </div>
      <div
        onClick={() => {
          navigate(`/watch/${type}/${movie.id}`, {
            state: { movie },
          });
        }}
        className='block w-32 cursor-pointer sm:hidden'
      >
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

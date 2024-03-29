/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";
import { TMBD_IMAGE_URL } from "../utils/constants";
import { IconContext } from "react-icons";
import { BsPlayFill } from "react-icons/bs";
import { GrCircleInformation } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const VideoBackground = ({ videoId, poster_path, media_type }) => {
  const navigate = useNavigate();
  useGetMovieTrailer(videoId, media_type);
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);
  return (
    <>
      <div className='hidden w-screen sm:block'>
        <iframe
          className='w-full aspect-video'
          src={`https://www.youtube-nocookie.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${trailerVideo?.key}&controls=0&disablekb=1&modestbranding=1&cc_load_policy=3&showinfo=0&iv_load_policy=3`}
          allow='accelerometer;autoplay'
        />
      </div>
      <div className='flex flex-col items-center w-full pt-6 md:hidden sm:hidden h-96'>
        <img
          className='relative object-cover w-4/5 rounded-2xl'
          src={TMBD_IMAGE_URL + poster_path}
          alt=''
        />
        <div className='absolute top-[32.5rem]'>
          <div className='flex gap-7'>
            <button
              onClick={() => {
                navigate(`/watch/${media_type}/${videoId}`);
              }}
              className='flex items-center justify-center gap-2 px-4 py-1 text-black bg-white rounded-[4px] hover:bg-opacity-70'
            >
              <BsPlayFill size={30} /> Play
            </button>
            <IconContext.Provider value={{ color: "white" }}>
              <button
                onClick={() => {
                  navigate(`/watch/${media_type}/${videoId}`);
                }}
                className='flex items-center justify-center gap-2 px-3 py-1 text-white bg-gray-400 rounded-[4px] bg-opacity-60 hover:bg-opacity-80'
              >
                <GrCircleInformation className='text-white' size={20} /> More
                Info
              </button>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoBackground;

/* eslint-disable react/prop-types */
import { IconContext } from "react-icons";
import { BsPlayFill } from "react-icons/bs";
import { GrCircleInformation } from "react-icons/gr";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className='hidden sm:block'>
      <div className='absolute w-screen px-6 sm:top-21 aspect-video sm:px-24 sm:py-48 bg-gradient-to-r from-black'>
        <h1 className='text-xl font-bold text-white sm:text-6xl'>{title}</h1>
        <p className='w-3/4 line-clamp-3 mb-6 py-2 text-[0.6rem] text-white sm:text-lg sm:w-1/4 sm:py-6 '>
          {overview}
        </p>
        <div className='flex gap-2'>
          <button className='flex items-center justify-center gap-2 px-3 py-1 text-black bg-white rounded-[4px] hover:bg-opacity-70'>
            <BsPlayFill size={30} /> Play
          </button>
          <IconContext.Provider value={{ color: "white" }}>
            <button className='flex items-center justify-center gap-2 px-3 py-1 text-white bg-gray-400 rounded-[4px] bg-opacity-30 hover:bg-opacity-40'>
              <GrCircleInformation className='text-white' size={20} /> More Info
            </button>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;

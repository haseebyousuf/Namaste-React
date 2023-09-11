import { useParams } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";
import { TMBD_IMAGE_URL } from "../utils/constants";

const Watch = () => {
  const { type, id } = useParams();
  const data = useFetchData(type, id);
  let scoreBackground;
  if (data?.vote_average < 5) {
    scoreBackground = "bg-red-950 border-2 border-red-600 ";
  } else if (data?.vote_average > 5 && data?.vote_average < 7) {
    scoreBackground = "bg-yellow-950 border-2 border-yellow-600 ";
  } else {
    scoreBackground = "bg-green-950 border-2 border-green-600 ";
  }
  return (
    data && (
      <div className=''>
        <div className='relative'>
          <img
            className='fixed w-screen h-screen  md:w-screen object-cover brightness-50 rounded-[0.2vw] blur-sm'
            src={TMBD_IMAGE_URL + data.backdrop_path}
            alt={data.name || data.title}
          />
          <div className='absolute top-0 z-40 mt-28 md:mt-16'>
            <div className='flex flex-col p-10 mx-auto md:w-screen w-fit md:flex-row'>
              <div className='flex justify-center transition-transform duration-300 hover:scale-105'>
                <img
                  className='relative w-4/5 p-2 md:w-3/4 rounded-xl'
                  src={TMBD_IMAGE_URL + data.poster_path}
                  alt={data.original_name || data.original_title}
                />
              </div>
              <div className='flex flex-col w-full gap-2 text-white md:justify-between'>
                <h1 className='text-4xl font-bold text-center text-white md:text-left md:text-4xl'>
                  {data.name || data.title}
                </h1>
                <div className='flex flex-col items-center gap-1 mt-1 md:items-end md:flex-row'>
                  <div className='flex gap-2'>
                    <span className='p-1 text-xs text-white border border-white rounded-sm'>
                      {data.adult ? "18+" : "UA"}
                    </span>
                    <span className=''>
                      {data.release_date || data.first_air_date}
                    </span>
                  </div>
                  <li className='ml-2 list-none'>
                    -
                    {data?.genres?.map((genre) => (
                      <span className='mx-1' key={genre.id}>
                        {genre.name}
                      </span>
                    ))}
                  </li>
                  <li className='ml-2 list-none'>
                    {data.runtime
                      ? `- Runtime: ${Math.floor(data.runtime / 60)}h ${
                          data.runtime % 60
                        }m`
                      : `- Seasons: ${data.number_of_seasons}`}
                  </li>
                </div>
                <div className='flex flex-col items-center gap-1 mt-4 md:justify-start md:flex-row '>
                  <h1
                    className={`p-5 rounded-full w-fit ${scoreBackground} transition-transform duration-300 hover:scale-105`}
                  >
                    <span className='font-bold'>
                      {data.vote_average.toFixed(1)}
                    </span>
                  </h1>
                  <h1 className='text-lg font-bold'>User Score</h1>
                </div>
                <div className='flex flex-col items-center mt-4 md:items-start'>
                  <h1 className='text-sm italic font-bold md:text-base opacity-70'>
                    {data.tagline}
                  </h1>
                  <div className='mt-2'>
                    <h1 className='text-2xl font-bold'>Overview</h1>
                    <p className='text-justify md:w-1/2'>{data.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Watch;

import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const PageHeader = (movie) => {
  if (!movie) return null;
  const { title, name, overview, id, poster_path, first_air_date } =
    movie.movie;
  const type = first_air_date ? "tv" : "movie";
  return (
    <div className='pt-[23%] sm:pt-[30%] bg-black md:pt-0  '>
      <VideoTitle
        title={title || name}
        overview={overview}
        id={id}
        first_air_date={first_air_date}
      />
      <VideoBackground
        videoId={id}
        poster_path={poster_path}
        title={title}
        media_type={type}
      />
    </div>
  );
};

export default PageHeader;

import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const PageHeader = (movie) => {
  if (!movie) return null;
  const { title, name, overview, id, poster_path } = movie.movie;
  return (
    <div className='pt-[23%] sm:pt-[30%] bg-black md:pt-0  '>
      <VideoTitle title={title || name} overview={overview} />
      <VideoBackground videoId={id} poster_path={poster_path} title={title} />
    </div>
  );
};

export default PageHeader;

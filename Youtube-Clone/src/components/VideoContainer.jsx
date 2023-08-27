import { useEffect } from "react";
import FilterButtons from "./FilterButtons";
import { YOUTUBE_VIDEOS_URL } from "../utils/constants";
import { useState } from "react";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState();
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_URL);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className='w-11/12'>
      <FilterButtons />
      {videos && <VideoCard data={videos[0]} />}
    </div>
  );
};

export default VideoContainer;
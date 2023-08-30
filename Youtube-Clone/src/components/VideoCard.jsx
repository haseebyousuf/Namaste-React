import { formatDate } from "../utils/formatDate";

const VideoCard = ({ data }) => {
  console.log(data);
  const { snippet, statistics } = data;
  const { channelTitle, publishedAt, title, thumbnails } = snippet;
  return (
    <div className='p-2 m-2 rounded-lg shadow-md w-60'>
      <img
        className='mb-2 rounded-lg'
        width='100%'
        alt='thumbnail'
        src={thumbnails.high.url}
      />
      <h3 className='mb-2 font-bold truncate'>{title}</h3>
      <li className='mb-1 text-gray-700 list-none'>{channelTitle}</li>
      <li className='flex justify-between text-gray-700 list-none'>
        <p>{(statistics.viewCount / 1000000).toFixed(1)} m</p>
        <p>{formatDate(publishedAt)}</p>
      </li>
    </div>
  );
};

export default VideoCard;

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

type VideoGridItemProps = {
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    publishedAt: Date;
    thumbnails: {
      default: {
        url: string;
      };
      high: {
        url: string;
      };
    };
    title: string;
  };
};

const Search = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchVideos() {
      try {
        setIsLoading(true);

        const res = await fetch('/api/search/' + searchTerm);
        if (res.status === 200) {
          const data = await res.json();
          setVideos(data['items']);
        } else {
          setVideos([]);
        }

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    }
    fetchVideos();
  }, [searchTerm]);
  return (
    <div
      className='w-full overflow-y-scroll overflow-x-hidden'
      style={{ height: 'calc(100vh - 56px)', width: 'calc(100% - 40px)' }}
    >
      {isLoading && <Spinner />}

      {videos.map((video: VideoGridItemProps) => (
        <Link
          to={`/player/${video.id.videoId}`}
          key={video.id.videoId}
          className='flex flex-col items-center bg-white  rounded-lg  md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full m-2 px-4 py-2'
        >
          <img
            className='object-cover w-full rounded-t-lg aspect-video md:h-auto md:w-80 md:rounded-none md:rounded-s-lg'
            src={
              video.snippet.thumbnails.high.url ||
              video.snippet.thumbnails.default.url
            }
            alt={video.snippet.title}
          />
          <div className='flex flex-col justify-between p-4 leading-normal'>
            <h5 className='mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white'>
              {video.snippet.title}
            </h5>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              {video.snippet.channelTitle}
            </p>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              {video.snippet.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Search;

{
  /* <Link to={`/player/:${id.videoId}`}>
<div className="mx-2 md:8 lg:6 xl:4">
  <div className="relative cursor-pointer">
    <img className=" rounded-2xl hover:rounded-none transition-all ease-out w-full" src={snippet.thumbnails.high.url || snippet.thumbnails.default.url} alt={snippet.title} />
  </div>
  <div className="flex gap-2 my-2">
    <div>
      <h3 className="line-clamp-2">{snippet.title}</h3>
      <p className="text-gray-500 text-sm">{snippet.channelTitle}</p>
    </div>
  </div>
</div>
</Link> */
}

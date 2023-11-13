import Tags from './Tags';
import VideoCard from './VideoCard';
import Spinner from './Spinner';
import { useState, useEffect, Fragment } from 'react';
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

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [tag, setTag] = useState('All');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchVideos() {
      try {
        setIsLoading(true);

        const res = await fetch('/api/search/' + tag);
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
  }, [tag]);

  return (
    <Fragment>
      <Tags tag={tag} setTag={setTag} />
      {isLoading && <Spinner />}
      <div
        className='p-2 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 overflow-y-scroll -z-0 content-start justify-start md:p-6'
        style={{ height: 'calc(100vh - 132px)' }}
      >
        {isLoading === false &&
          videos.map((video: VideoGridItemProps) => (
            <VideoCard {...video} key={video.id.videoId} />
          ))}
      </div>
    </Fragment>
  );
};

export default Home;

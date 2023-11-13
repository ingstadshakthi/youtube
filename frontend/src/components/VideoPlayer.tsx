import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
function VideoPlayer() {
  const { url } = useParams();
  const videoUrl = 'https://www.youtube.com/embed/' + url;
  return (
    <div className="w-full overflow-y-scroll overflow-hidden aspect-video px-8 py-2"
      style={{ maxHeight: 'calc(100vh - 56px)', width: 'calc(100% - 20px)' }}>
      <ReactPlayer height='100%' width='100%' controls url={videoUrl} />
    </div >
  );
}

export default VideoPlayer;
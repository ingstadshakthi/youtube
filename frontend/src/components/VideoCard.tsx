import { Link } from "react-router-dom"

type ItemProps = {
  id: {
    kind: string,
    videoId: string
  }
  snippet: {
    channelId: string,
    channelTitle: string,
    description: string,
    publishedAt: Date,
    thumbnails: {
      default: {
        url: string
      },
      high: {
        url: string
      }
    },
    title: string
  }

}

const VideoCard = ({ id, snippet }: ItemProps) => {

  return (
    <Link to={`/player/${id.videoId}`}>
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
    </Link>
  )
}

export default VideoCard
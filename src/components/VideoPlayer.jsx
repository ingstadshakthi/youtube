import React from "react";
import ReactPlayer from "react-player";
import { useHistory } from "react-router";
function VideoPlayer() {
  const url = localStorage.getItem("videoId");
  const history = useHistory();
  return (
    <div>
      <ReactPlayer width="100%" height="90vh" controls url={url} onEnded={()=>{
        history.push("/")
      }} />
    </div>
  );
}

export default VideoPlayer;

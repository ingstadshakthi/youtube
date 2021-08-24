import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer() {
  const url = localStorage.getItem("videoId");
  return (
    <div>
      <ReactPlayer width="100%" height="90vh" controls url={url} onEnded={()=>{
        window.location.href="/"
      }} />
    </div>
  );
}

export default VideoPlayer;

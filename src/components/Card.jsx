import React from "react";
import { useHistory } from "react-router";
import "./card.css";
function Card(props) {
  const history = useHistory();
  return (
    <div className="listCard">
      <div className="card-photo">
        <img
          src={props.thumbnail}
          alt="youtube-card"
          onClick={() => {
            localStorage.setItem(
              "videoId",
              `https://www.youtube.com/embed/${props.videoId}`
            );
            history.push("/search");
          }}
        />
      </div>
      <div className="card-detail">
        <h5
          className="title"
          onClick={() => {
            localStorage.setItem(
              "videoId",
              `https://www.youtube.com/embed/${props.videoId}`
            );
            history.push("/search");
          }}
        >
          {props.title}
        </h5>
        <div className="viewAndTime">
          <h6>{props.timeStamp}</h6>
        </div>
        <div className="channelDetail">
          <h6>{props.channelTitle}</h6>
        </div>
        <p className="desc">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;

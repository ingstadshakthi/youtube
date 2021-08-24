import React from "react";
import Card from "./Card";

function AllCards(props) {
  console.log(props);

  const card = props.cardList.map((singleCard) => {
    return (
      <Card
        key={singleCard.id.videoId}
        channelTitle={singleCard.snippet.channelTitle}
        title={singleCard.snippet.title}
        thumbnail={singleCard.snippet.thumbnails.high.url}
        description={singleCard.snippet.description}
        videoId={singleCard.id.videoId}
        timeStamp={String(
          new Date(
            singleCard.snippet.publishTime.toLocaleString(undefined, {
              timezone: "Asia/Kolkata",
            })
          )
        ).slice(4, 16)}
      />
    );
  });
  return <div>{card}</div>;
}

export default AllCards;

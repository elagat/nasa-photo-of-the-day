import React from "react";

function ApodCard(props) {
  return (
    <div className="apod-card">
      <h2>{props.title}</h2>
      <img src={props.url} />
      <p>{props.explanation}</p>
    </div>
  );
}

export default ApodCard;

import React, { useEffect, useState } from "react";
import axios from "axios";
import ApodCard from "./ApodCard.js"

function ApodGrid({ limit }) {
  const [apod, setApod] = useState([]);

  useEffect( () => {

    axios
      .get(`https://api.nasa.gov/planetary/apod`)
      .then(res => {
        console.log(res);
      })
  });

  return (
    <div className="apod-grid">Hello</div>
  )
}

export default ApodGrid;

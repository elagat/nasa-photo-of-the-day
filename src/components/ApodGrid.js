import React, { useEffect, useState } from "react";
import axios from "axios";
import ApodCard from "./ApodCard.js"

function ApodGrid({ limit }) {
  const [mediaUrl, setMediaUrl] = useState([])

  useEffect( () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=FInBtIykxEFRHLUAbzXEjZVdcjP594JgzEPhWkQR`)
      .then(res => {
        setMediaUrl(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, []);


  return (
    <div className="apod-grid">Hello</div>
  )
}

export default ApodGrid;

import React, { useEffect, useState } from "react";
import axios from "axios";
import ApodCard from "./ApodCard.js"

function ApodGrid({ limit }) {
  const [photoObject, setPhotoObject] = useState([])

  useEffect( () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=FInBtIykxEFRHLUAbzXEjZVdcjP594JgzEPhWkQR`)
      .then(res => {
        setPhotoObject(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, []);


  return (
    <div className="apod-grid">
      {Object.keys(photoObject).map(photoUrl => {
        console.log(photoUrl);
        console.log(photoObject);
        return <ApodCard imageUrl={photoObject} key={photoUrl} />;
      })}
    </div>
  );
}

export default ApodGrid;

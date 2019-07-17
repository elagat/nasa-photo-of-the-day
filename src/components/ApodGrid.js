import React { useEffect, useState } from "react";
import axios from "axios";
import ApodCard from "./ApodCard.js"

function ApodGrid() {
  // const [apod, setApod] = useState([]);

  useEffect( () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod`)
      .then(res => {
        const
      })
  })
}

export default ApodGrid;

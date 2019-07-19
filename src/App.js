import React, { useEffect, useState } from "react";
import axios from "axios";
import ApodGrid from "./components/ApodGrid.js";
import ApodCard from "./components/ApodCard.js"

import "./App.css";

function App() {
  const [photoObject, setPhotoObject] = useState({});

  useEffect( () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=FInBtIykxEFRHLUAbzXEjZVdcjP594JgzEPhWkQR`)
      .then(res => {
        console.log(res.data);
        setPhotoObject(res.data);
      });
  }, []);

  return (
    <div className="App">
      <ApodCard title={photoObject.title}
                url={photoObject.url}
                explanation={photoObject.explanation}/>
    </div>
  );
}

export default App;

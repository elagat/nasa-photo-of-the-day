import React from "react";
import ApodGrid from "./components/ApodGrid.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ApodGrid limit={10}/>
    </div>
  );
}

export default App;

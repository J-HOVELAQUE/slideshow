import React from 'react';

import './App.css';
import data from './data/dataPlaceholder.json';

import Slideshow from "./components/Slideshow";

function App() {

  return (
    <div className="App">
      <Slideshow data={data} />
    </div>
  );
}

export default App;

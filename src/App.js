import React from 'react';

import './App.css';
import data from './data/dataPlaceholder.json';

import Slideshow from "./components/Slideshow";
import CardLocation from "./components/cardLocation";



function App() {

  return (
    <div className="App">
      <Slideshow />
    </div>
  );
}

export default App;

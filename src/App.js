import React from 'react';
import './public/style.css';
import MusicContainer from './containers/MusicContainer.js'

function App() {
  return (
    <div>
    <header>
    <h1 id="mainTitle">UK Music Chart</h1>
    <hr/>
    </header>
  <MusicContainer />
  </div>
)
}

export default App;

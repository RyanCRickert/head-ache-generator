import React from 'react';

import userMousePosition from "./hooks/useMousePosition";
import './App.css';

function App() {
  const position = userMousePosition();
  const calcRed = (position.x / window.innerWidth) * 255;
  const calcGreen = (position.y / window.innerHeight) * 255;
  const calcBlue = ((calcRed + calcGreen) / 2);

  return (
    <div className="App">
      <header style={{ backgroundColor: `rgb(${calcRed},${calcGreen},${calcBlue})`}} className="App-header">
        <p style={{color: `rgb(${255 - calcBlue},${255 - calcRed},${255 - calcGreen})`}}>
          Head-ache Generator
        </p>
      </header>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Lottie from 'react-lottie';
import { isMobile } from "react-device-detect";
import { Fireworks } from 'fireworks-js/dist/react'

import disneyData from './assets/lottie/disney.json'

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: disneyData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const options = {
  speed: 3,
  particles: 300,
  sound: {
    enable: true,
    files: [
      'explosion0.mp3',
      'explosion1.mp3',
      'explosion2.mp3'
    ],
    volume: { min: 1, max: 2 },
  },
  mouse: { 
    click: false, 
    move: true, 
    max: 3 
  }
}

const style = {
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  position: 'fixed',
  background: '#FFF'
}

function App() {
  const [isStopped, setStopped] = useState(false);

  setTimeout(() => {
    setStopped(true);
  }, 4000);

  return (
    <div className="App">
      <header className="App-header">
        <div className="spinner">
          <Lottie options={defaultOptions}
            height={isMobile ? 350 : 600}
            width={isMobile ? 350 : 600}
            isStopped={isStopped}
            isPaused={false}
          />
        </div>
        {isStopped && <Fireworks options={options} style={style} />}
      </header>
    </div>
  );
}

export default App;

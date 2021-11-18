import React, { useState } from 'react';
import './App.css';
import Lottie from 'react-lottie';
import { isMobile } from "react-device-detect";
import { Fireworks } from 'fireworks-js/dist/react'
import hotel from './assets/img/disney.jpeg';
import { ReactComponent as StudioLogo } from './assets/img/studio.svg';
import { ReactComponent as LandLogo } from './assets/img/land.svg';


import disneyData from './assets/lottie/disney.json'
import birthdayData from './assets/lottie/birthday.json'

const birthdayOptions = {
  loop: true,
  autoplay: true, 
  animationData: birthdayData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const disneyOptions = {
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
    move: false, 
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
        {!isStopped && (
          <div className="spinner">
            <Lottie options={birthdayOptions}
              height={isMobile ? 350 : 600}
              width={isMobile ? 350 : 600}
              isStopped={isStopped}
              isPaused={false}
            />
          </div>
        )}
        {isStopped && (
          <>
            <div className="spinner2">
              <Lottie options={disneyOptions}
                height={isMobile ? 350 : 550}
                width={isMobile ? 350 : 550}
                isStopped={isStopped}
                isPaused={false}
              />
            </div>
            <div className="reservationCard">
              <div className="left">
                <div className="ImageContainer">
                  <img className='img' src={hotel} alt="hotel" />
                </div>
              </div>
              <div className="right">
                <div className="title">
                  <h1>Disney's Sequoia Lodge</h1>
                  <div className="datesContainer">
                    <div className="dates">
                      <div className="beginDate">
                        <p>
                          dimanche<br />
                          <strong>19 déc. 2021</strong>
                        </p>
                      </div>
                      <div className="endDate">
                        <p>
                          lundi<br />
                          <strong>20 déc. 2021</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="logos">
                    <a href="https://www.disneylandparis.com/fr-fr/destinations/parc-disneyland/" target="_blank" rel="noreferrer">
                      <LandLogo className="logo"/>
                    </a>
                    <a href="https://www.disneylandparis.com/fr-fr/destinations/parc-walt-disney-studios/" target="_blank" rel="noreferrer">
                      <StudioLogo className="logo"/>
                    </a>
                  </div>
                </div>
              </div>
            </div> 
          </>
        )}
        {isStopped && <Fireworks options={options} style={style} />}
      </header>
    </div>
  );
}

export default App;

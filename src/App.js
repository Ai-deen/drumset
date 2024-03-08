import './App.css';
import React, {useRef, useState, useEffect } from 'react';

function App() {

  const [power, setPower] = useState(true);

  const H1Ref = useRef(null);
  const H2Ref = useRef(null);
  const H3Ref = useRef(null);
  const H4Ref = useRef(null);
  const H5Ref = useRef(null);
  const H6Ref = useRef(null);
  const H7Ref = useRef(null);
  const H8Ref = useRef(null);
  const H9Ref = useRef(null);

  const playSound = (ref) => {
    if(ref.current && power){
      ref.current.play();
      
    }
  };

  const [volume, setVolume] = useState(60);

  useEffect(() => {
    if (H1Ref.current) {
      H1Ref.current.volume = volume / 100;
    }
    if (H2Ref.current) {
      H2Ref.current.volume = volume / 100;
    }
    if (H3Ref.current) {
      H3Ref.current.volume = volume / 100;
    }
    if (H4Ref.current) {
      H4Ref.current.volume = volume / 100;
    }
    if (H5Ref.current) {
      H5Ref.current.volume = volume / 100;
    }
    if (H6Ref.current) {
      H6Ref.current.volume = volume / 100;
    }
    if (H7Ref.current) {
      H7Ref.current.volume = volume / 100;
    }
    if (H8Ref.current) {
      H8Ref.current.volume = volume / 100;
    }
    if (H9Ref.current) {
      H9Ref.current.volume = volume / 100;
    }
  }, [volume]);


  return (
    <div className="App">
      <div className='borders'>
      <p>Drum Machine</p>
      <div className="drummachine" id="drum-machine">
        <div className="drumset" >
          <div className="set">
            <div className="drum-pad" onClick={() => playSound(H1Ref)}> Q <audio ref={H1Ref} src={'./sounds/Heater-1.mp3'} id="Q" className='clip'/></div>
            <div className="drum-pad" onClick={() => playSound(H2Ref)}> W <audio ref={H2Ref} src={'./sounds/Heater-2.mp3'} id="W" className='clip'/></div>
            <div className="drum-pad" onClick={() => playSound(H3Ref)}> E <audio ref={H3Ref} src={'./sounds/Heater-3.mp3'} id="E" className='clip'/></div>
          </div>          
          <div className="set">
            <div className="drum-pad" onClick={() => playSound(H4Ref)}> A <audio ref={H4Ref} src={'./sounds/Heater-4.mp3'} id="A" className='clip'/></div>
            <div className="drum-pad" onClick={() => playSound(H5Ref)}> S <audio ref={H5Ref} src={'./sounds/Heater-5.mp3'} id="S" className='clip'/></div>
            <div className="drum-pad" onClick={() => playSound(H6Ref)}> D <audio ref={H6Ref} src={'./sounds/Heater-6.mp3'} id="D" className='clip'/></div>
          </div>
          <div className="set">
            <div className="drum-pad" onClick={() => playSound(H7Ref)}> Z <audio ref={H7Ref} src={'./sounds/Heater-7.mp3'} id="Z" className='clip'/></div>
            <div className="drum-pad" onClick={() => playSound(H8Ref)}> X <audio ref={H8Ref} src={'./sounds/Heater-8.mp3'} id="X" className='clip'/></div>
            <div className="drum-pad" onClick={() => playSound(H9Ref)}> C <audio ref={H9Ref} src={'./sounds/Heater-9.mp3'} id="C" className='clip'/></div>
          </div>
        </div>

        <div className='controls'>
        Power
          <div>
            <button className={power ? 'on-button' : 'off-button'}onClick={() => setPower(!power)}>{power ? 'On' : 'Off'}</button>
          </div>
          <div className='display'>
          Volume
          </div>
          <div className='volume'>
            <input type="range" min={0} max={100} value={volume} onChange ={(e) => setVolume(e.target.value)} />
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}

export default App;

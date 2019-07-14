import React, { useState, useEffect } from "react";
import PianoKey from "./components/PianoKey";
import { soundList } from "./data/soundList";
import "./App.css";
import "animate.css";

function App() {
  const [pianoData, setPianoData] = useState([]);

  useEffect(() => {
    const keys = Object.keys(soundList);
    const sounds = keys.map(key => {
      return {
        audio: new Audio(soundList[key].url),
        class: soundList[key].class
      };
    });
    setPianoData(sounds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <div className="title animated jackInTheBox">
        Piano.js{" "}
        <span role="img" aria-label="Space Invader">
          👾
        </span>
        <span role="img" aria-label="Light Beam">
          ☄️
        </span>
      </div>
      <div className="piano animated slideInUp">
        <div className="keyContainer">
          {pianoData.map((sound, i) => (
            <PianoKey key={i} sound={sound} />
          ))}
        </div>
      </div>
      <h5 className="footer">
        Made by{" "}
        <a href="https://albererre.com/" target="blank">
          Alber Erre
        </a>
      </h5>
    </React.Fragment>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import PianoKey from "./components/PianoKey";
import Title from "./components/Title";
import Footer from "./components/Footer";
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
      <Title />
      <div className="piano animated slideInUp">
        <div className="keyContainer">
          {pianoData.map((sound, i) => (
            <PianoKey key={i} sound={sound} />
          ))}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;

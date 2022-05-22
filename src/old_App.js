import React, { useState } from "react"

import './App.css';
import ColorPicker from "./ColorPicker";
import ThemeContext from "./ThemeContext";

const App = () => {
  let [color, setColor] = useState('white');
  return (
    <div className="App">
      <ThemeContext.Provider value={[color, setColor]}>
        <div style={{ backgroundColor: color }}>
          <ColorPicker />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

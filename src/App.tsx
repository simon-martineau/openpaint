import React from "react";
import Canvas from "./components/Canvas";
import ConfigStore from "./contexts/ConfigStore";

function App() {
  return (
    <div className="App">
      <ConfigStore>
        <Canvas />
      </ConfigStore>
    </div>
  );
}

export default App;

import React from "react";
import Canvas from "./components/Canvas";
import { DrawingStoreProvider } from "./contexts/DrawingStore";

function App() {
  return (
    <div className="App">
      <DrawingStoreProvider>
        <Canvas />
      </DrawingStoreProvider>
    </div>
  );
}

export default App;

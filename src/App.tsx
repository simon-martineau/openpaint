import React from "react";
import RootComponent from "./components/RootComponent";
import ConfigStore from "./contexts/ConfigStore";
import MutableThemeProvider from "./contexts/MutableTheme";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <MutableThemeProvider>
        <ConfigStore>
          <RootComponent />
        </ConfigStore>
      </MutableThemeProvider>
    </div>
  );
}

export default App;

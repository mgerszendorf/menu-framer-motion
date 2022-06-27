import React, { useState } from "react";
import "./assets/styles/App.scss";
import NavigationBar from "./components/NavigationBar";
import Menu from "./pages/Menu";

function App() {
  const [buttonState, setButtonState] = useState<boolean>(false);
  const [panelComplete, setPanelComplete] = useState(false);

  return (
    <div className="App">
      {!buttonState && (
        <NavigationBar
          setButtonState={setButtonState}
          buttonState={buttonState}
          setPanelComplete={setPanelComplete}
          panelComplete={panelComplete}
        />
      )}
      {buttonState && (
        <Menu
          setButtonState={setButtonState}
          buttonState={buttonState}
          setPanelComplete={setPanelComplete}
          panelComplete={panelComplete}
        />
      )}
    </div>
  );
}

export default App;

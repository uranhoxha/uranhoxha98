import { useState } from "react";
import "./desktop.scss";
import Window from "../Window/window";

function Desktop() {
  const [showWindow, setShowWindow] = useState(false);

  const handleAboutMeClick = () => {
    setShowWindow(true);
  };

  const handleCloseWindow = () => {
    setShowWindow(false);
  };

  return (
    <div className="desktop-container">
      <div className="desktop-apps">
        <div className="desktop-app" onClick={handleAboutMeClick}>
          <img alt="App logo" className="notepad" />
          <h3>About Me</h3>
        </div>
        <div className="desktop-app">
          <img alt="Folder logo" className="folder" />
          <h3>My Projects</h3>
        </div>
        <div className="desktop-app">
          <img alt="Paper logo" className="paper" />
          <h3>Resume</h3>
        </div>
      </div>

      <div className="recycle-bin">
        <img alt="Recycle Bin logo" />
        <h3>Recycle Bin</h3>
      </div>

      {/* Conditionally render the Window component and pass handleCloseWindow */}
      {showWindow && <Window onClose={handleCloseWindow} />}
    </div>
  );
}

export default Desktop;

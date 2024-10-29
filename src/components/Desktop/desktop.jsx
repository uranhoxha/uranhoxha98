import "./desktop.scss";
function desktop() {
  return (
    <div className="desktop-container">
      <div className="desktop-apps">
        <div className="desktop-app">
          <img alt="App logo" className="notepad" />
          <h3>About Me</h3>
        </div>
        <div className="desktop-app">
          <img alt="Folder logo" className="folder" />
          <h3>My Projects</h3>
        </div>
        <div className="desktop-app">
          <img alt="Github logo" className="github" />
          <h3>GitHub</h3>
        </div>
        <div className="desktop-app">
          <img alt="Linkedin logo" className="linkedin" />
          <h3>Linkedin</h3>
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
    </div>
  );
}

export default desktop;

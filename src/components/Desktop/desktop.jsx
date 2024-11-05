import { useState } from "react";
import "./desktop.scss";

import AboutWindow from "../AllWindows/AboutWindow/aboutWindow";
import ProjectsWindow from "../AllWindows/ProjectsWindow/projectsWindow";
import ResumeWindow from "../AllWindows/ResumeWindow/resumeWindow";
import RecycleWindow from "../AllWindows/RecycleWindow/recycleWindow"

function Desktop() {
  const [showWindow, setShowWindow] = useState(false);
  const [windowType, setWindowType] = useState(null);

  const handleAboutMeClick = () => {
    setShowWindow(true);
    setWindowType("about");
  };

  const handleProjectsClick = () => {
    setShowWindow(true);
    setWindowType("projects");
  };

  const handleResumeClick = () => {
    setShowWindow(true);
    setWindowType("resume");
  };

  const handleRecycleClick = () => {
    setShowWindow(true);
    setWindowType("recycle");
  };

  const handleCloseWindow = () => {
    setShowWindow(false);
    setWindowType(null);
  };

  return (
    <div className="desktop-container">
      <div className="desktop-apps">
        <div className="desktop-app" onDoubleClick={handleAboutMeClick}>
          <img alt="App logo" className="notepad" />
          <h3>About Me</h3>
        </div>
        <div className="desktop-app" onDoubleClick={handleProjectsClick}>
          <img alt="Folder logo" className="folder" />
          <h3>My Projects</h3>
        </div>
        <div className="desktop-app" onDoubleClick={handleResumeClick}>
          <img alt="Paper logo" className="paper" />
          <h3>Resume</h3>
        </div>
      </div>

      <div className="recycle-bin" onDoubleClick={handleRecycleClick}>
        <img alt="Recycle Bin logo" />
        <h3>Recycle Bin</h3>
      </div>

      {showWindow && windowType === "about" && <AboutWindow onClose={handleCloseWindow} />}
      {showWindow && windowType === "projects" && <ProjectsWindow onClose={handleCloseWindow} />}
      {showWindow && windowType === "resume" && <ResumeWindow onClose={handleCloseWindow} />}
      {showWindow && windowType === "recycle" && <RecycleWindow onClose={handleCloseWindow} />}
    </div>
  );
}

export default Desktop;

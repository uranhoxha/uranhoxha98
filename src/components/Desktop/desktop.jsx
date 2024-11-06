import { useState } from "react";
import "./desktop.scss";

import AboutWindow from "../AllWindows/AboutWindow/aboutWindow";
import ProjectsWindow from "../AllWindows/ProjectsWindow/projectsWindow";
import ResumeWindow from "../AllWindows/ResumeWindow/resumeWindow";
import RecycleWindow from "../AllWindows/RecycleWindow/recycleWindow";

function Desktop() {
  const [openWindows, setOpenWindows] = useState([]);

  const handleOpenWindow = (type) => {
    setOpenWindows((prevWindows) => [...prevWindows, type]);
  };

  const handleCloseWindow = (index) => {
    setOpenWindows((prevWindows) => prevWindows.filter((_, i) => i !== index));
  };

  return (
    <div className="desktop-container">
      <div className="desktop-apps">
        <div className="desktop-app" onDoubleClick={() => handleOpenWindow("about")}>
          <img alt="App logo" className="notepad" />
          <h3>About Me</h3>
        </div>
        <div className="desktop-app" onDoubleClick={() => handleOpenWindow("projects")}>
          <img alt="Folder logo" className="folder" />
          <h3>My Projects</h3>
        </div>
        <div className="desktop-app" onDoubleClick={() => handleOpenWindow("resume")}>
          <img alt="Paper logo" className="paper" />
          <h3>Resume</h3>
        </div>
      </div>

      <div className="recycle-bin" onDoubleClick={() => handleOpenWindow("recycle")}>
        <img alt="Recycle Bin logo" />
        <h3>Recycle Bin</h3>
      </div>

      {openWindows.map((windowType, index) => {
        switch (windowType) {
          case "about":
            return <AboutWindow key={index} onClose={() => handleCloseWindow(index)} />;
          case "projects":
            return <ProjectsWindow key={index} onClose={() => handleCloseWindow(index)} />;
          case "resume":
            return <ResumeWindow key={index} onClose={() => handleCloseWindow(index)} />;
          case "recycle":
            return <RecycleWindow key={index} onClose={() => handleCloseWindow(index)} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

export default Desktop;

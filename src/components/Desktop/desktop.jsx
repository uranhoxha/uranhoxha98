import { useState } from "react";
import "./desktop.scss";

import AboutWindow from "../AllWindows/AboutWindow/aboutWindow";
import ProjectsWindow from "../AllWindows/ProjectsWindow/projectsWindow";
import ResumeWindow from "../AllWindows/ResumeWindow/resumeWindow";
import RecycleWindow from "../AllWindows/RecycleWindow/recycleWindow";
import WelcomeWindow from "../WelcomeWindow/welcomeWindow";
import ContactWindow from "../AllWindows/ContactWindow/contactWindow";

function Desktop() {
  const [openWindows, setOpenWindows] = useState([]);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);
  const [clickedApp, setClickedApp] = useState(null);

  const handleOpenWindow = (type) => {
    setOpenWindows((prevWindows) => [...prevWindows, type]);
    setClickedApp(type);
  };

  const handleCloseWindow = (index) => {
    setOpenWindows((prevWindows) => prevWindows.filter((_, i) => i !== index));
  };

  console.log("main branch branch branch branch");
  const handleCloseWelcome = () => {
    setIsWelcomeOpen(false);
  };

  const handleClickOutside = () => {
    setClickedApp(null);
  };

  return (
    <div className="desktop-container" onClick={handleClickOutside}>
      <div className="desktop-apps" onClick={(e) => e.stopPropagation()}>
        <div
          className={`desktop-app ${clickedApp === "about" ? "clicked" : ""}`}
          onDoubleClick={() => handleOpenWindow("about")}
          onClick={() => setClickedApp("about")}
        >
          <>
            <img alt="App logo" className="notepad" />
            <div className="selection-effect-about"></div>
          </>
          <h3>About Me</h3>
        </div>

        <div
          className={`desktop-app ${
            clickedApp === "projects" ? "clicked" : ""
          }`}
          onDoubleClick={() => handleOpenWindow("projects")}
          onClick={() => setClickedApp("projects")}
        >
          <>
            <img alt="Folder logo" className="folder" />
            <div className="selection-effect-projects"></div>
          </>
          <h3>My Projects</h3>
        </div>
        <div
          className={`desktop-app ${clickedApp === "contact" ? "clicked" : ""}`}
          onDoubleClick={() => handleOpenWindow("contact")}
          onClick={() => setClickedApp("contact")}
        >
          <>
            <img alt="Satellite logo" className="contact" />
            <div className="selection-effect-contact"></div>
          </>
          <h3>Contact Me</h3>
        </div>
        <div
          className={`desktop-app ${clickedApp === "resume" ? "clicked" : ""}`}
          onDoubleClick={() => handleOpenWindow("resume")}
          onClick={() => setClickedApp("resume")}
        >
          <>
            <img alt="Paper logo" className="paper" />
            <div className="selection-effect-resume"></div>
          </>
          <h3>Resume</h3>
        </div>
      </div>

      <div onClick={(e) => e.stopPropagation()}>
        <div
          className={`recycle-bin ${clickedApp === "recycle" ? "clicked" : ""}`}
          onDoubleClick={() => handleOpenWindow("recycle")}
          onClick={() => setClickedApp("recycle")}
        >
          <>
            <img alt="Recycle Bin logo" />
            <div className="selection-effect-recycle"></div>
          </>
          <h3>Recycle Bin</h3>
        </div>
      </div>

      {openWindows.map((windowType, index) => {
        switch (windowType) {
          case "about":
            return (
              <AboutWindow
                key={index}
                onClose={() => handleCloseWindow(index)}
              />
            );
          case "projects":
            return (
              <ProjectsWindow
                key={index}
                onClose={() => handleCloseWindow(index)}
              />
            );
          case "contact":
            return (
              <ContactWindow
                key={index}
                onClose={() => handleCloseWindow(index)}
              />
            );

          case "resume":
            return (
              <ResumeWindow
                key={index}
                onClose={() => handleCloseWindow(index)}
              />
            );
          case "recycle":
            return (
              <RecycleWindow
                key={index}
                onClose={() => handleCloseWindow(index)}
              />
            );
          default:
            return null;
        }
      })}
      {isWelcomeOpen && <WelcomeWindow onClose={handleCloseWelcome} />}
    </div>
  );
}

export default Desktop;

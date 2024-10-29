import { useState, useRef } from "react";
import "./footer.scss";
import Startmenu from "../StartMenu/startmenu";
import TaskbarItem from "./TaskbarItem";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useCurrentTime } from "../../hooks/useCurrentTime";

function Footer() {
  const [isClicked, setIsClicked] = useState(false);
  const startTaskbarRef = useRef(null);
  const startMenuRef = useRef(null);
  const currentTime = useCurrentTime();

  const handleStartClick = () => setIsClicked((prev) => !prev);

  useOutsideClick([startMenuRef, startTaskbarRef], () => setIsClicked(false));

  return (
    <div className="footer-container">
      <div className="taskbar-content-one">
        <div
          className={`start-taskbar ${isClicked ? "clicked" : ""}`}
          onClick={handleStartClick}
          ref={startTaskbarRef}
        >
          <div className="start-taskbar-content">
            <img alt="start taskbar" />
            <h3>Start</h3>
          </div>
        </div>
        <div className="bar"></div>
        <TaskbarItem
          href="https://open.spotify.com/user/2w7lbmfji56mqwz8nfb3mkqz9?si=c0f714cb6f164c32"
          altText="Spotify logo"
          className="spotify"
        />
        <TaskbarItem
          href="https://vscode.dev/"
          altText="Visual Studio logo"
          className="vscode"
        />
        <TaskbarItem
          href="https://www.google.com/"
          altText="Internet Explorer logo"
          className="ie"
        />
        <div className="bar"></div>
      </div>

      <div className="taskbar-content-two">
        <div className="bar"></div>
        <div className="time-taskbar">
          <h3>{currentTime}</h3>
        </div>
      </div>

      {isClicked && <Startmenu ref={startMenuRef} />}
    </div>
  );
}

export default Footer;

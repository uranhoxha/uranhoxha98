import "./startmenu.scss";
import React, { forwardRef } from "react";

const Startmenu = forwardRef((props, ref) => {
  return (
    <div className="startmenu-container" ref={ref}>
      <div className="startmenu-title">
        <h3>
          UranHoxha<span>98</span>
        </h3>
      </div>
      <div className="startmenu-content">
        <a
          href="https://www.linkedin.com/in/uran-hoxha-405721256/"
          target="_blank"
          rel="noreferrer"
          className="startmenu-menu"
        >
          <img alt="Pixelated Linkedin Logo" className="linkedin" />
          <h3>Linkedin</h3>
        </a>
        <div className="bar"></div>
        <a
          href="https://github.com/uranhoxha"
          target="_blank"
          rel="noreferrer"
          className="startmenu-menu"
        >
          <img alt="Pixelated Github Logo" className="github" />
          <h3>GitHub</h3>
        </a>
        <div className="bar"></div>
      </div>
    </div>
  );
});

export default Startmenu;

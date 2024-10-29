import "./startmenu.scss";
import React, { forwardRef } from "react";

const Startmenu = forwardRef((props, ref) => {
  return (
    <div className="startmenu-container" ref={ref}>
      <div className="startmenu-title">
        <h3>UranHoxha<span>98</span></h3>
      </div>
      <div className="startmenu-content">
        <div className="startmenu-menus">Test</div>
        <div className="startmenu-menus">Test</div>
        <div className="startmenu-menus">Test</div>
        <div className="startmenu-menus">Test</div>
      </div>
    </div>
  );
});

export default Startmenu;

import Draggable from "react-draggable";
import "./window.scss";

function Window({ title, iconSrc, children, onClose }) {
  return (
    <Draggable
      handle=".window-titlebar"
      defaultPosition={{ x: -100, y: -100 }}
    >
      <div className="window-container">
        <div className="window-titlebar">
          <div className="window-title">
            {iconSrc && <img src={iconSrc} alt="" className="window-icon" />}
            <p>{title}</p>
          </div>
        </div>
        <div className="window-close" onClick={onClose}>
          <img alt="Close" />
        </div>
        <div className="window-content">{children}</div>
      </div>
    </Draggable>
  );
}

export default Window;

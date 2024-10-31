import Draggable from "react-draggable";
import "./window.scss";

function Window({ onClose }) {
  return (
    <Draggable defaultPosition={{ x: -400, y: -300 }}>
      <div className="window-container">
        <div className="window-titlebar">
          <div className="window-title">
            <img alt="" className="window-icon" />
            <p>About me - Notepad</p>
          </div>
          <div className="window-close" onClick={onClose}>
            <img alt="Close" />
          </div>
        </div>
        <div className="window-content">
          <h2>------------------------------------</h2>
          <h2>About Me</h2>
          <h2>------------------------------------</h2>
          <p>
            I'm a 19-year-old student with a keen eye for web
            design/development, constantly driven to create visually appealing
            websites that provide delightful and engaging user experiences and
            bringing them to life. I enjoy learning new techniques and refining
            my skills to bring creative ideas to life through intuitive design
            and functionality.
          </p>
          <h2>------------------------------------</h2>
          <h3>More About Me</h3>
          <h2>------------------------------------</h2>
          <p>
            When I'm not designing, you can find me exploring the outdoors and
            capturing the beauty of nature. I enjoy collaborating with others
            and value meaningful connections.
          </p>
        </div>
      </div>
    </Draggable>
  );
}

export default Window;

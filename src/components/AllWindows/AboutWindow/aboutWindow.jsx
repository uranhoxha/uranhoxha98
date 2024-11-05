import Window from "../../Window/window";
import notepad_small from "../../../assets/notepad_small.svg";
import "./aboutWindow.scss";

import reactLogo from "../../../assets/projectImages/react.png";
import htmlLogo from "../../../assets/projectImages/html.png";
import cssLogo from "../../../assets/projectImages/css.png";
import JSLogo from "../../../assets/projectImages/javascript.png";
import scssLogo from "../../../assets/projectImages/scss.png";
import figmaLogo from "../../../assets/projectImages/figma.png";

function AboutWindow({ onClose }) {
  return (
    <Window
      title="About Me - Notepad"
      iconSrc={notepad_small}
      onClose={onClose}
    >
      <h2>------------------------------------</h2>
      <h2>About Me</h2>
      <p>
        I'm a 20-year-old student with a keen eye for web design/development,
        constantly driven to create visually appealing websites that provide
        delightful and engaging user experiences and bringing them to life.
      </p>
      <h2>------------------------------------</h2>
      <h3>More About Me</h3>
      <p>
        When I'm not designing, you can find me exploring the outdoors and
        capturing the beauty of nature. I enjoy collaborating with others and
        value meaningful connections.
      </p>
      <h2>------------------------------------</h2>
      <h3>The technologies I use</h3>

      <div className="about-technologies">
        <div className="about-technologies-logo">
          <img src={htmlLogo} alt="React Logo" />
          <h4>HTML</h4>
        </div>
        <div className="about-technologies-logo">
          <img src={cssLogo} alt="React Logo" />
          <h4>CSS</h4>
        </div>
        <div className="about-technologies-logo">
          <img src={scssLogo} alt="React Logo" />
          <h4>SCSS</h4>
        </div>
        <div className="about-technologies-logo">
          <img src={JSLogo} alt="React Logo" />
          <h4>JavaScript</h4>
        </div>
        <div className="about-technologies-logo">
          <img src={reactLogo} alt="React Logo" />
          <h4>ReactJS</h4>
        </div>
        <div className="about-technologies-logo">
          <img src={figmaLogo} alt="React Logo" />
          <h4>Figma</h4>
        </div>
      </div>
    </Window>
  );
}

export default AboutWindow;

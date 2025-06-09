import Window from "../../Window/window";
import notepad_small from "../../../assets/notepad_small.svg";
import "./aboutWindow.scss";

import reactLogo from "../../../assets/projectImages/react.png";
import htmlLogo from "../../../assets/projectImages/html.png";
import cssLogo from "../../../assets/projectImages/css.png";
import JSLogo from "../../../assets/projectImages/javascript.png";
import scssLogo from "../../../assets/projectImages/scss.png";
import figmaLogo from "../../../assets/projectImages/figma.png";
import nextLogo from "../../../assets/projectImages/next.png";
import tailwindLogo from "../../../assets/projectImages/tailwind.png";
import TSLogo from "../../../assets/projectImages/typescript.png";

function AboutWindow({ onClose }) {
  return (
    <Window
      title="About Me - Notepad"
      iconSrc={notepad_small}
      onClose={onClose}
    >
      <div className="about-content">
        <h2>------------------------------------</h2>
        <h2>About Me</h2>
        <p>
          I'm a 20-year-old student based in Kosova with a keen eye for web design/development,
          constantly driven to create visually appealing websites that provide
          delightful and engaging user experiences and bringing them to life.
        </p>
        <h2>------------------------------------</h2>
        <h3>More About Me</h3>
        <p>
          When I'm not designing, you can find me exploring the outdoors and
          capturing the beauty of nature. I enjoy collaborating with others and
          value meaningful connections. I also enjoy listening to musc you can find my Spotify account linked in the Taskbar.
        </p>
        <h2>------------------------------------</h2>
        <h3>The technologies I use</h3>
      </div>

      <div className="about-technologies">
        <div className="about-technologies-logo">
          <img src={htmlLogo} alt="HTML Logo" />
          <h4>HTML</h4>
        </div>
        <div className="about-technologies-logo">
          <img src={cssLogo} alt="CSS Logo" />
          <h4>CSS</h4>
        </div>
        <div className="about-technologies-logo">
          <img src={scssLogo} alt="SASS Logo" />
          <h4>SASS</h4>
        </div>
        <div className="about-technologies-logo">
          <img src={JSLogo} alt="JS Logo" />
          <h4>JavaScript</h4>
        </div>
        <div className="about-technologies-logo">
          <img src={TSLogo} alt="TS Logo" />
          <h4>TypeScript</h4>
        </div>
        <div className="about-technologies-logo">
          <img src={reactLogo} alt="React Logo" />
          <h4>ReactJS</h4>
        </div>
        <div className="about-technologies-logo">
          <img src={figmaLogo} alt="Figma Logo" />
          <h4>Figma</h4>
        </div>
        <div className="about-technologies-logo">
          <img src={nextLogo} alt="Next Logo" />
          <h4>Next.js</h4>
        </div>
        <div className="about-technologies-logo">
          <img src={tailwindLogo} alt="Tailwind Logo" />
          <h4>TailwindCSS</h4>
        </div>
      </div>
    </Window>
  );
}

export default AboutWindow;

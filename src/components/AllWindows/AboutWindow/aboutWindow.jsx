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
  const getAge = () => {
    const birthDate = new Date(2004, 7, 31);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
      age--;
    }

    return age;
  };

  return (
    <Window
      title="About Me - Notepad"
      iconSrc={notepad_small}
      onClose={onClose}
    >
      <div className="about-content">
        <h2>------------------------------------</h2>
        <h1>
          <pre style={{ fontFamily: "monospace", fontSize: "12px" }}>
            {`   _____ ___.                  __                    
  /  _  \\_ |__   ____  __ ___/  |_    _____   ____  
 /  /_\\  \\| __ \\ /  _ \\|  |  \\   __\\  /     \\_/ __ \\ 
/    |    \\ \\_\\ (  <_> )  |  /|  |   |  Y Y  \\  ___/ 
\\____|__  /___  /\\____/|____/ |__|   |__|_|  /\\___  >
        \\/    \\/                           \\/     \\/`}
          </pre>
        </h1>
        <p>
          Hello, i'm Urani a {getAge()} year old software developer and designer
          based in Kosova. I like designing functional websites and then
          bringing said websites into life. I'm always down to challenge myself
          with new and crazy ideas.
        </p>
        <h2>------------------------------------</h2>
        <h3>More About Me</h3>
        <p>
          When i'm not on my computer, you can find me explorin
          <strong>g</strong> the nature and capturin<strong>g</strong> the
          beauty of the world. I enjoy working in tea<strong>m</strong>s and val
          <strong>u</strong>e meaningful connections. True enjoyer of music,
          you can find my Spotify account in the taskbar, feel free to
          follow I'll return the favor :D.
        </p>
        <h2>------------------------------------</h2>
        <h3>The technologies and tools I use</h3>
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

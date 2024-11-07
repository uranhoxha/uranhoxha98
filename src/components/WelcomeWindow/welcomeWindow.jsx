import uraniIcon from "../../assets/uraniIcon_small.svg";
import "./welcomeWindow.scss";

function WelcomeWindow({ onClose }) {
  return (
    <div className="welcomeWindow-container">
      <div className="welcomeWindow-titlebar">
        <div className="welcomeWindow-title">
          <img src={uraniIcon} alt="" className="welcomeWindow-icon" />
          <p>Welcome to Uran Hoxha Portfolio</p>
        </div>
      </div>
      <div className="welcomeWindow-close" onClick={onClose}>
        <img alt="Close" />
      </div>
      <div className="welcomeWindow-content">
        <div className="welcomeWindow-contentTitle">
          <h2>Hi, I'm Uran Hoxha</h2>
        </div>
        <div className="welcomeWindow-contents">
          <div className="welcomeWindow-contents-one">
            <h3>Contents</h3>
            <ul>
              <li>
                <div className="yellow"></div> About Me
              </li>
              <li>
                <div className="green"></div>My Projects
              </li>
              <li>
                <div className="red"></div>Contacts
              </li>
              <li>
                <div className="purple"></div>My Resume
              </li>
            </ul>
          </div>
          <div className="welcomeWindow-contents-two">
            <h2>Welcome</h2>
            <p>
              Welcome to my portfolio! This site is your gateway to discovering
              my work and skills. Feel free to explore and enjoy the experience!
            </p>
            <p>Sit back and relax as you take a brief tour of my world!</p>
            <p>(for a better experience use your PC to view this website)</p>
          </div>
        </div>
        <button className="welcome-button" onClick={onClose}>
          <p>Close</p>
        </button>
      </div>
    </div>
  );
}

export default WelcomeWindow;

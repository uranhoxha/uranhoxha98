import Window from "../../Window/window";
import "./recycleWindow.scss";
import recyclBin_small from "../../../assets/recycle_bin_small.png";
import oldPortfolio from "../../../assets/old_portfolio.png";
import reactLogo from "../../../assets/projectImages/react.png";
import cssLogo from "../../../assets/projectImages/css.png";
import figmaLogo from "../../../assets/projectImages/figma.png";
import { MdOpenInNew } from "react-icons/md";
function recycleWindow({ onClose }) {
  return (
    <Window title="Recycle Bin" iconSrc={recyclBin_small} onClose={onClose}>
      <a href="https://uranhoxha.netlify.app/" target="_blank" rel="noreferrer">
      <h2>------------------------------------</h2>
      <h2>Old not in-use projects</h2>
      <h2>------------------------------------</h2>
        <div className="recycleBin-content">
          <img
            src={oldPortfolio}
            alt="Old Portfolio"
            className="recycleBin-image"
          />
          <div className="recycleBin-description">
            <MdOpenInNew />
            <h3>Old portfolio</h3>
            <p>
              My first and previous portfolio before I made the current one.
            </p>
            <div className="recycleBin-logo">
              <img src={reactLogo} alt="tech logo" className="react-logo" />
              <img src={cssLogo} alt="tech logo" className="css-logo" />
              <img src={figmaLogo} alt="tech logo" className="figma-logo" />
            </div>
            <p>Designed by Me</p>
          </div>
        </div>
      </a>
    </Window>
  );
}

export default recycleWindow;

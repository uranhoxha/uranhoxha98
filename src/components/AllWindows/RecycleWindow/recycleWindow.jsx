import Window from "../../Window/window";
import "./recycleWindow.scss";
import recyclBin_small from "../../../assets/recycle_bin_small.png";

function recycleWindow({ onClose }) {
  return (
    <Window title="Recycle Bin" iconSrc={recyclBin_small} onClose={onClose} className="recycle-window">
      <a href="https://uranhoxha.netlify.app/" target="_blank" rel="noreferrer">
        <h2>------------------------------------</h2>
        <h2>404s & Heartbreak</h2>
        <h2>------------------------------------</h2>
        <p>No Current Projects that are not in use :D</p>
      </a>
    </Window>
  );
}

export default recycleWindow;
